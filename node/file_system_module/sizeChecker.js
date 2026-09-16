
const fs = require('fs');
function sizeChecker(fileName) {
    const limit = 50; 
    const stats = fs.statSync(fileName);

    if (stats.size > limit) {
        console.log(`File should be less than ${limit} bytes. `);
    }
    else {
        console.log(`File has been submitted `);
    }

}
sizeChecker("notes.txt");