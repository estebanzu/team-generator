// exportCSV.js

function exportToCSV() {
    // Create the header row for the CSV
    const headers = ["#", "Name", "PAC", "SHO", "PAS", "DRI", "DEF", "PHY", "Average"];
    console.log("Exporting CSV. Headers:", headers);

    // Initialize an array to hold all the rows including the header
    const rows = [];
    rows.push(headers);

    // Check if players array is populated
    if (players.length === 0) {
        alert("No players available to export!");
        console.log("Export aborted: No players available.");
        return;
    }

    // Populate rows with player data
    players.forEach((player, index) => {
        const row = [
            index + 1,               // Index
            player.name || '',       // Player Name (handle any undefined or null values)
            player.pac,              // PAC (Pace)
            player.sho,              // SHO (Shooting)
            player.pas,              // PAS (Passing)
            player.dri,              // DRI (Dribbling)
            player.def,              // DEF (Defense)
            player.phy,              // PHY (Physical)
            player.average.toFixed(2) // Average
        ];
        rows.push(row);
    });

    // Debug: Log the rows that will be converted to CSV
    console.log("Rows to be exported:", rows);

    // Convert the rows array into a CSV string
    const csvContent = rows.map(row => row.join(",")).join("\n");

    // Debug: Log the final CSV content
    console.log("CSV content generated:", csvContent);

    // Create a Blob from the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    // Create a link element for download
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "player_list.csv");

    // Append the link to the document body and trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up by revoking the object URL and removing the link element
    URL.revokeObjectURL(url);
    document.body.removeChild(link);

    // Debug: Confirm download triggered
    console.log("CSV download triggered.");
}
