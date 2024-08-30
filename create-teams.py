import csv
import random
from collections import defaultdict

# Step 1: Read the CSV file and calculate the averages
def read_players_and_calculate_averages(file_path):
    players = []
    with open(file_path, 'r') as file:
        reader = csv.reader(file)
        headers = next(reader)  # Skip the header row
        for row in reader:
            name = row[0]
            scores = list(map(int, row[1:]))
            print(scores)
            average = sum(scores) / len(scores)
            players.append((name, average))
            print(players)
    return players

# Step 2: Sort players by their average score
def sort_players(players):
    return sorted(players, key=lambda x: x[1], reverse=True)

# Step 3: Create balanced teams
def create_balanced_teams(players, team_size=5):
    random.shuffle(players)  # Shuffle to add randomness
    teams = defaultdict(list)
    team_ranks = defaultdict(float)
    team_count = 0

    for player, average in players:
        # Try to assign the player to the team with the lowest total rank
        min_team = min(team_ranks, key=team_ranks.get, default=team_count)
        if len(teams[min_team]) < team_size:
            teams[min_team].append(player)
            team_ranks[min_team] += average
        else:
            # If the current team is full, create a new team
            team_count += 1
            teams[team_count].append(player)
            team_ranks[team_count] = average

    return teams

# Step 4: Print the averages
def print_averages(players):
    print("Player Averages:")
    for player, average in players:
        print(f"{player}: {average:.2f}")

# Step 5: Print the teams
def print_teams(teams):
    for team_id, team in teams.items():
        print(f"Team {team_id + 1}: {', '.join(team)}")

# Main Function
if __name__ == "__main__":
    file_path = 'players.csv'  # Replace with your actual CSV file path
    players = read_players_and_calculate_averages(file_path)
    print_averages(players)  # Print the averages before creating teams
    sorted_players = sort_players(players)
    teams = create_balanced_teams(sorted_players)
    print("\nBalanced Teams:")
    print_teams(teams)
