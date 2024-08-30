// playerManagement.js

const players = [];

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
