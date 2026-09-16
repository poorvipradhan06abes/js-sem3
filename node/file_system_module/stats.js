// const fs = require("fs")

// fs.stat("notes.txt", (err, stats) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("information about [notes.txt]", stats);
//     console.log("size of the file in bytes", stats.size,"Bytes");
//     console.log("Creation time of the file", stats.birthtime.toISOString().split("T")[0]);
//     console.log("Last modified time of the file", stats.mtime.toISOString().split("T")[0]);

//    
 const fs = require("fs")
fs.stat("./myFolder1/notes.txt", (err, stats) => {
    if (err) {
        console.log(err);
        return;
    }   
    console.log(stats.size);

})
