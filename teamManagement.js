// teamManagement.js

function generateTeams() {
    const numTeams = parseInt(document.getElementById('num-teams').value);
    players.sort((a, b) => b.average - a.average);

    const teams = [];
    for (let i = 0; i < numTeams; i++) {
        teams.push([]);
    }

    players.forEach((player, index) => {
        const teamIndex = index % numTeams;
        teams[teamIndex].push(player);
    });

    const teamsContainer = document.getElementById('teams');
    teamsContainer.innerHTML = '';

    teams.forEach((team, index) => {
        let teamRank = team.reduce((sum, player) => sum + player.average, 0);
        const teamDiv = document.createElement('div');
        teamDiv.innerHTML = `<strong>Team ${index + 1} (Avg Rank: ${(teamRank / team.length).toFixed(2)}):</strong> ${team.map(player => player.name).join(', ')}`;
        teamsContainer.appendChild(teamDiv);
    });
}
