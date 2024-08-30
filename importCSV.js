// importCSV.js

function importCSV(event) {
    const file = event.target.files[0];
    if (!file) {
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const content = e.target.result;
        console.log("CSV content loaded:", content);

        // Split the CSV content into rows
        const rows = content.split("\n").filter(row => row.trim() !== "");
        console.log("Parsed rows:", rows);

        // Clear the current players array
        players.length = 0;

        // Skip the header row and process the data rows
        for (let i = 1; i < rows.length; i++) {
            const columns = rows[i].split(",");
            console.log("Parsed columns:", columns);

            if (columns.length === 9) {
                const player = {
                    name: columns[1].trim(),
                    pac: parseInt(columns[2]),
                    sho: parseInt(columns[3]),
                    pas: parseInt(columns[4]),
                    dri: parseInt(columns[5]),
                    def: parseInt(columns[6]),
                    phy: parseInt(columns[7]),
                    average: parseFloat(columns[8])
                };
                players.push(player);
                console.log("Player added from CSV:", player);
            }
        }

        // Update the player table with the new data
        updatePlayerTable();
    };

    reader.readAsText(file);
}
