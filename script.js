// let js = "amazing";
// // if (js === "amazing") alert("JS is AWSOME!");

// console.log(26+27*2);

// Assignment 1 - Values and Variable
/*
let country = "Indonesia";
let continent = "Central Java";
let population = 1000000;

console.log(country);
console.log(continent);
console.log(population);
*/

// Variables and Values
console.log(a);
var a = 10;
console.log(a);
firstName = "Fidelis Raymond";
console.log(firstName);

// for(let i = 0; i < 3;i++){
//     console.log(i);
// }
// console.log(i);

// Operators
let x = 0;
let y = 0;

function postIncrement() {
    while(x < 3) {
        y = x++; // nilai pada x (Global Scope) akan terupdate
        // console.log("y = " + y);
    }
    x++; // nilai pada x (Global Scope) akan terupdate
}
// postIncrement();
// console.log("x = " + x);

function preIncrement() {
    while(x < 3) {
        y = ++x;
        console.log("y = " + y);
    }
    // ++x;
}
preIncrement();
console.log("x = " + x++);
console.log("x = " + x);