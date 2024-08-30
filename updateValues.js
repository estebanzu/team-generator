// updateValues.js

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
