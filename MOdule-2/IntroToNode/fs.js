let fs = require("fs"); //Fs==File system
//console.log(fs);

let path = require("path");

let FilePath = path.join(__dirname, "file.txt");
console.log(FilePath);

//it creates File i it does exists else it override
fs.writeFileSync(FilePath, "HEllo i am vadapav  ")