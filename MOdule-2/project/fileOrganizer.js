// // console.log("Hello World");

// let inputArr = process.argv;
// console.log(inputArr);
// //['pathTonode','pathtoFile','input_passed_in_terminal']

// let input = inputArr[2];
// console.log(input);


let fs = require("fs");
let Folderpath = process.argv[2];

let input = Folderpath[2];
// console.log(Folderpath);

let Folderexists = fs.existsSync(Folderpath);

if (Folderexists) {
    //We Will code
    //console.log("Path is valid");
    let Files = fs.readdirSync(Folderpath);
    console.log(Files);
} else {
    console.log("Please Enter a valid Path!!!!!!!");
}