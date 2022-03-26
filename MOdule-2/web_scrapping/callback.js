const fs = require("fs");

console.log("Beore : ");

fs.readFile("File.txt", cb);

function cb(error, data) {
    if(error){
        console.log(error);
    }else{
        console.log(data + " ");
    }
    }
    

//console.log(content + " ");

console.log("Ater :");