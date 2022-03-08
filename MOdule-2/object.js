// //empty object
// let obj = {};
// console.log(obj);

// //object == key-pair value --> key name : value ,
// let objAman = {
//     "Name": " vishal bhanderi ",
//     Age: 26,
//     phoneNo: 9909802023,
//     lastName: 'Gandhri'
// }
// console.log(objAman)

let capAmerica = {
    Name: 'steve',
    Age: 9898,
    Friends: ['Natasha', 'Thor', 'Tony', 'Hulk'],
    address: {
        city: 'surat',
        state: 'Rajkot'
    },
    sayHi: function () {
        console.log("Cap America says Namaste")
    }
}
//whole object
//console.log(capAmerica);

//name oF capAmerica
console.log(capAmerica.Name);
//age oF capAmerica
console.log(capAmerica.Age);
//Friends oF CapAmerica
console.log(capAmerica.Friends);
//address oF capAmerica 
//console.log(capAmerica.address);
console.log(capAmerica.address.city);

// sayHi

capAmerica.sayHi();


