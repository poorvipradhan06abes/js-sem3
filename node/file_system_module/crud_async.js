const fs = require("fs")

fs.writeFile("notes.txt", "ECE-B", (err) =>{
    if (err){
        console.log(err);
        return
    }
    console.log("data successfully written in the file notes.txt")
})
fs.readFile("notes.txt", (err, data) =>{
    if (err){
        console.log(err);
        return
    }
    console.log(`read data: ${data}`)
})

const updateData = " hello ECE-B"
fs.appendFile("notes.txt", updateData, (err) =>{
    if (err){
        console.log(err);
        return
    }
    console.log("data successfully appended in the file notes.txt")
})
       
fs.rm("notes.txt", (err) =>{
    if (err){
        console.log(err);
        return
    }
    console.log("file notes.txt successfully deleted")
})
       
       