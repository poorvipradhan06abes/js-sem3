const fs = require('fs');

fs.mkdir('./myFolder1/myFolder2/myFolder3', {recursive: true}, (err) => {
    if (err) {
        console.log(err);
        return;
    }
        console.log('Folder created ');
        fs.writeFile("myfolder1/notes.txt", "Hello, World!", (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('File created ');
        });
});

fs.readdir('./myFolder', (err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Directory contents", files);
});