const fs = require('fs');

// File name
const fileName = 'sample.txt';

// 1. Create & Write File
fs.writeFile(fileName, 'Hello, this is the initial content.\n', (err) => {
    if (err) {
        console.error("Error creating file:", err);
        return;
    }
    console.log("File created and written successfully.");

    // 2. Read File
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log("File content after write:");
        console.log(data);

        // 3. Append Data
        fs.appendFile(fileName, 'This is appended content.\n', (err) => {
            if (err) {
                console.error("Error appending file:", err);
                return;
            }
            console.log("Data appended successfully.");

            // 4. Read Again
            fs.readFile(fileName, 'utf8', (err, updatedData) => {
                if (err) {
                    console.error("Error reading updated file:", err);
                    return;
                }
                console.log("Updated file content:");
                console.log(updatedData);

                // 5. Delete File
                fs.unlink(fileName, (err) => {
                    if (err) {
                        console.error("Error deleting file:", err);
                        return;
                    }
                    console.log("File deleted successfully.");
                });
            });
        });
    });
});