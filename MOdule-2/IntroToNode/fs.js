let fs = require("fs"); //Fs==File system
//console.log(fs);

let path = require("path");

let FilePath = path.join(__dirname, "file.txt");
console.log(FilePath);

//C-create
//it creates File i it does exists else it override
fs.writeFileSync(FilePath, "HEllo i am vadapav  ");

//R-read
let content = fs.readFileSync(FilePath, "utf-8");
console.log(content);

//U-update
fs.appendFileSync(FilePath, "newly added content in File");
console.log("Ater update : ");
console.log(fs.readFileSync(FilePath,"utf-8"));

//D-delete
fs.unlinkSync(FilePath);

