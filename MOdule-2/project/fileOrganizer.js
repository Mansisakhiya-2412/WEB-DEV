// // console.log("Hello World");

// let inputArr = process.argv;
// console.log(inputArr);
// //['pathTonode','pathtoFile','input_passed_in_terminal']

// let input = inputArr[2];
// console.log(input);


let fs = require("fs");
let path = require("path");

let Folderpath = process.argv[2];

//let input = Folderpath[2];
// console.log(Folderpath);

let Folderexists = fs.existsSync(Folderpath);

let extensions = {
    Audio: [".mp3"],
    Video: [".mp4", ".mkv", ".gif"],
    Document: [".doc", ".xlsx", ".pdf", ".txt"],
    Image: [".jpeg", ".jpg", ".png"],
    Software: [".exe", ".apk"]
}

if (Folderexists) {
    //We Will code
    //console.log("Path is valid");
    let Files = fs.readdirSync(Folderpath);
    for (let i = 0; i < Files.length; i++) {
        let ext = path.extname(Files[i]);
        let nameofFolder = giveFolderName(ext);
        console.log("Ext--",ext," Folder--",nameofFolder);
    }

} else {
    console.log("Please Enter a valid Path!!!!!!!");
}



function giveFolderName(ext){

    for (let key in extensions)//For-each loop
    {
        let extArr = extensions[key];
        for(let i = 0; i <extArr.length ; i++){
            if (extArr[i] == ext){
                return key;
            }
        }
    }
    return "Others";

}