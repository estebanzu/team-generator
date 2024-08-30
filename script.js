const players = [];

// Add event listeners for slider value updates
document.getElementById('pac').addEventListener('input', function() {
    document.getElementById('pac-value').innerText = this.value;
});

document.getElementById('sho').addEventListener('input', function() {
    document.getElementById('sho-value').innerText = this.value;
});

document.getElementById('pas').addEventListener('input', function() {
    document.getElementById('pas-value').innerText = this.value;
});

document.getElementById('dri').addEventListener('input', function() {
    document.getElementById('dri-value').innerText = this.value;
});

document.getElementById('def').addEventListener('input', function() {
    document.getElementById('def-value').innerText = this.value;
});

document.getElementById('phy').addEventListener('input', function() {
    document.getElementById('phy-value').innerText = this.value;
});

function updateNumTeams() {
    const numTeams = document.getElementById('num-teams').value;
    document.getElementById('num-teams-value').innerText = numTeams;
}

function addPlayer() {
    const name = document.getElementById('name').value;
    const pac = parseInt(document.getElementById('pac').value);
    const sho = parseInt(document.getElementById('sho').value);
    const pas = parseInt(document.getElementById('pas').value);
    const dri = parseInt(document.getElementById('dri').value);
    const def = parseInt(document.getElementById('def').value);
    const phy = parseInt(document.getElementById('phy').value);

    const average = (pac + sho + pas + dri + def + phy) / 6;

    players.push({ name, pac, sho, pas, dri, def, phy, average });

    updatePlayerTable();

    // Clear the form inputs and reset slider values
    document.getElementById('name').value = '';
    document.getElementById('pac').value = '50';
    document.getElementById('sho').value = '50';
    document.getElementById('pas').value = '50';
    document.getElementById('dri').value = '50';
    document.getElementById('def').value = '50';
    document.getElementById('phy').value = '50';

    document.getElementById('pac-value').innerText = '50';
    document.getElementById('sho-value').innerText = '50';
    document.getElementById('pas-value').innerText = '50';
    document.getElementById('dri-value').innerText = '50';
    document.getElementById('def-value').innerText = '50';
    document.getElementById('phy-value').innerText = '50';
}

function updatePlayerTable() {
    const playerTableBody = document.querySelector('#player-table tbody');
    playerTableBody.innerHTML = '';  // Clear the table body

    players.forEach((player, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${player.name}</td>
            <td>${player.pac}</td>
            <td>${player.sho}</td>
            <td>${player.pas}</td>
            <td>${player.dri}</td>
            <td>${player.def}</td>
            <td>${player.phy}</td>
            <td>${player.average.toFixed(2)}</td>
            <td><button onclick="removePlayer(${index})">Remove</button></td>
        `;

        playerTableBody.appendChild(row);
    });
}

function removePlayer(index) {
    players.splice(index, 1);
    updatePlayerTable();
}

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
