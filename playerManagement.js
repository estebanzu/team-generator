// playerManagement.js

// Array to store player data
const players = [];

function addPlayer() {
    // Get player attributes from the input fields
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();
    const pac = parseInt(document.getElementById('pac').value);
    const sho = parseInt(document.getElementById('sho').value);
    const pas = parseInt(document.getElementById('pas').value);
    const dri = parseInt(document.getElementById('dri').value);
    const def = parseInt(document.getElementById('def').value);
    const phy = parseInt(document.getElementById('phy').value);

    // Validate name input
    if (name === "") {
        alert("Please enter a player name.");
        return;
    }

    // Calculate the average skill rating
    const average = (pac + sho + pas + dri + def + phy) / 6;

    // Add the new player to the players array
    players.push({ name, pac, sho, pas, dri, def, phy, average });

    // Update the player table to reflect the newly added player
    updatePlayerTable();

    // Display the success message
    const messageElement = document.getElementById('addPlayerMessage');
    messageElement.textContent = `${name} has been added to the list.`;
    messageElement.style.display = 'block';

    // Hide the message after 3 seconds
    setTimeout(() => {
        messageElement.style.display = 'none';
    }, 3000);

    // Reset the form inputs and slider values
    nameInput.value = ''; // Clear the name field
    resetSliders();

    // Toggle the export button visibility
    toggleExportButton();
}

function resetSliders() {
    const defaultValue = '50';
    document.getElementById('pac').value = defaultValue;
    document.getElementById('sho').value = defaultValue;
    document.getElementById('pas').value = defaultValue;
    document.getElementById('dri').value = defaultValue;
    document.getElementById('def').value = defaultValue;
    document.getElementById('phy').value = defaultValue;

    document.getElementById('pac-value').innerText = defaultValue;
    document.getElementById('sho-value').innerText = defaultValue;
    document.getElementById('pas-value').innerText = defaultValue;
    document.getElementById('dri-value').innerText = defaultValue;
    document.getElementById('def-value').innerText = defaultValue;
    document.getElementById('phy-value').innerText = defaultValue;
}

function updatePlayerTable() {
    // Get the table body element where players will be displayed
    const playerTableBody = document.querySelector('#player-table tbody');
    playerTableBody.innerHTML = '';  // Clear the table body

    // Populate the table with player data
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

        // Add the row to the table body
        playerTableBody.appendChild(row);
    });

    // Toggle the export button visibility
    toggleExportButton();
}

function removePlayer(index) {
    // Remove the player from the array
    players.splice(index, 1);
    
    // Update the player table to reflect the removal
    updatePlayerTable();

    // Toggle the export button visibility
    toggleExportButton();
}

function toggleExportButton() {
    const exportButton = document.getElementById('exportButton');
    if (players.length >= 2) {
        exportButton.style.display = 'inline-block';
    } else {
        exportButton.style.display = 'none';
    }
}
