// teamManagement.js

function generateTeams() {
    const numTeams = parseInt(document.getElementById('num-teams').value);
    
    // Sort players by average in descending order
    const sortedPlayers = [...players].sort((a, b) => b.average - a.average);
    
    // Select captains (highest averages)
    const captains = sortedPlayers.slice(0, numTeams);
    
    // Shuffle the remaining players
    const remainingPlayers = shuffleArray(sortedPlayers.slice(numTeams));

    // Initialize teams with captains
    const teams = captains.map(captain => [captain]);

    // Distribute remaining players to teams
    remainingPlayers.forEach((player, index) => {
        const teamIndex = index % numTeams;
        teams[teamIndex].push(player);
    });

    // Display teams
    displayTeams(teams);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayTeams(teams) {
    const teamsContainer = document.getElementById('teams');
    teamsContainer.innerHTML = '';

    teams.forEach((team, index) => {
        let teamRank = team.reduce((sum, player) => sum + player.average, 0) / team.length;
        const teamDiv = document.createElement('div');
        teamDiv.innerHTML = `<strong>Team ${index + 1} (Avg Rank: ${teamRank.toFixed(2)}):</strong> ${team.map(player => player.name).join(', ')}`;
        teamsContainer.appendChild(teamDiv);
    });
}
