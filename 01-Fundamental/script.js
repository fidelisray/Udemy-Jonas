'use strict';
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

///////////////////////////////////////////
// Variables and Values
/* // awal
console.log(a);
var a = 10;
console.log(a);
const firstName = "Fidelis Raymond";
console.log(firstName); */ // akhir

// for(let i = 0; i < 3;i++){
//     console.log(i);
// }
// console.log(i);

///////////////////////////////////////////
// Operators
/*let x = 0;
let y = 0;*/

/*function postIncrement() {
    while(x < 3) {
        y = x++; // nilai pada x (Global Scope) akan terupdate
        // console.log("y = " + y);
    }
    x++; // nilai pada x (Global Scope) akan terupdate
}*/
// postIncrement();
// console.log("x = " + x);

/*function preIncrement() {
    while(x < 3) {
        y = ++x;
        // console.log("y = " + y);
    }
    // ++x;
}*/
// preIncrement();
// console.log("x = " + x++);
// console.log("x = " + x);


///////////////////////////////////////////
// Template Literals
/*const firstName = 'Fidelis Raymond';
const lastName = 'Jose Airudin';
const yearOfBrith = 2000;
const job = 'Student'; */

// console.log("Hello my name is " + firstName + ", I'am a " + (2021 - yearOfBrith) + " years old " + job);
/*const fidelis = `Hello my name is ${firstName + ' ' + lastName}, I'am a ${2021-yearOfBrith} years old ${job}`;
console.log(fidelis);

const kata = 'Ini baris pertama \n\
Ini adalah baris ke dua \n\
Ini adalah baris ke tiga';
console.log(kata);

const kata2 = 'Ini baris pertama \nini baris kedua \nini baris ketiga';
console.log(kata2);

const kata3 = `Ini baris 1
Ini baris 2
Ini baris 3`;
console.log(kata3);*/

///////////////////////////////////////////
// Type Conversion and Coercion

/* Note :
    Type Coercion adalah proses mengubah tipe data sebuah nilai
    ke tipe data yang lain secara otomatis atau implisit.
    
    This includes conversion from Number to String, String to Number, Boolean to Number etc. when different types of operators are applied to the values.
*/

/*const teks = '5';
const angka = Number(teks); // Mengubah teks '5' (tipe data String) menjadi sebuah angka 5 (tipe data Number)
*/

/* console.log(angka, typeof angka);
console.log(teks , typeof teks);

console.log(('5' + '5')/ 55); // Hasilnya ??? 1 (tipe datanya Number)
console.log(('5' + '5' - '20') + 5); // Hasilnya ??? 40 (tipe datanya Number)

console.log(`saya suka nonton bioskop di` + ` ` + `21` - `11`); */

///////////////////////////////////////////
// Truthy and Falsy Value

/* Note : 
    Falsy Value : 0, '', undefined, NaN, null
*/

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('False'));
console.log(Boolean({}));*/

// const money = Number('Fidelis');
/*const money = 10;
console.log(`Money : ${money}`);
if(money) console.log(`Don't spend it all ????`);
else console.log(`You should get a job!!`);

let height = 10;
if(height) console.log(`YAY! height is defined`);
else console.log(`height is UNDEFINED`);*/

///////////////////////////////////////////
// Switch Statements
/*
let day = 'wednesday';

switch (day) {
    case 'monday':
        console.log('Belajar javascript (udemy)');
        break;
    case 'tuesday':
        console.log('Belajar laravel (Web Programming UNPAS)');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Mencari dan membaca jurnal');
        break;
    case 'friday':
        console.log('Belajar javascript (Youtube / WPU)');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Istirahat');
        break;
    default:
        console.log('Hari yang anda masukkan TIDAK VALID!!');
} */

///////////////////////////////////////////
// Array

/*
const friends = new Array('Marc', 'Jack', 'Piter');
console.log(friends); */

// for(let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }
/*
    i = 0 (i < 3): True => cetak
    i = 1 (i < 3): True => cetak
    i = 2 (i < 3): True => cetak
    i = 3 (i < 3): False => exit
*/
// console.log(friends[friends.length]);
// friends[3] = 'Fidelis';
// console.log(friends);
// friends[2] = 'Michael';
// console.log(friends);

/*
const years = [1990, 1967, 2002, 2010, 2018];

const calcAge = birthyear => 2037 - birthyear;

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = new Array();
for(let i = 0; i < years.length; i++) {
    ages[i] = calcAge(years[i]);
}
console.log(ages);*/

///////////////////////////////////////////
// Basic Array Operations (Methods)

// Add elements
/* FIRST
let newLength = friends.push('Bambang');
console.log(friends);
console.log(newLength);

// console.log('----------------------');
newLength = friends.unshift('Martin');
console.log(friends);
console.log(newLength);

// Remove elements
friends.pop() // Remove LAST elements of array
let popped;
console.log(friends);
popped = friends[friends.length - 1] = friends.pop();
console.log(`Popped: ${popped}`);
console.log(friends);

friends.shift() // Remove FIRST elements of array
console.log(friends); LAST */

///////////////////////////////////////////
// Introduction to Object

// Key = Property of Object
// const fidelis = {
//     firstName: 'Fidelis Raymond',
//     lastName: 'Jose Airudin',
//     age: 2021 - 2000,
//     job: 'Student',
//     friends: ['Marc', 'Martin', 'Alex']
// };

// console.log(fidelis);
// console.log(fidelis['friends'][1]);
// console.log(fidelis.lastName);
// console.log(fidelis['lastName']);

// const nameKey = 'Name';

// console.log(fidelis['first' + nameKey]);
// console.log(fidelis['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Fidelis? Choose between firstName, lastName, age, job, and friends');

// console.log(fidelis[interestedIn]);

// if(fidelis[interestedIn]) {
//     console.log(fidelis[interestedIn]);
// } else {
//     alert(`${interestedIn} is dosen't exist. Wrong request!!`);
// }

// Challenge
// console.log(`${fidelis.firstName} has ${fidelis.friends.length} friends, and his best friend is called ${fidelis.friends[0]}`);


// const fidelis = {
//     firstName: 'Fidelis Raymond',
//     lastName: 'Jose Airudin',
//     birthYear: 2000,
//     job: 'Student',
//     friends: ['Marc', 'Martin', 'Alex'],
//     calcAge: function(yearNow) {
//         this.age = yearNow - this.birthYear 
//         return this.age;
//     },
//     // hasDriverLicense: this.calcAge(2021) > 18 ? true : false,
//     // summary: () => {
//     //     return `${this.firstName} is a ${this.fidelis}-years old ${this.job}, and ${this.hasDriverLicense ? "he has a driver's license" : "he doesn't have driver's license"}`;
//     // }
//     getSummary: function() {
//         this.calcAge(2021);
//         return `${this.firstName} is a ${this.age}-years old ${this.job}, and ${this.age > 18 ? "he has a driver's license" : "he doesn't have a driver's license"}`;
//     }
// };

// console.log(fidelis.calcAge(2022));
// console.log(fidelis.age);

// console.log(fidelis.getSummary());

///////////////////////////////////////////
// for Loop (iteration)

// for(let i = 0; i < 30; i++) {
//     console.log(`Iteration ${i + 1}`);
// }

const fidelis = [
    'fidelis raymond',
    'jose airudin',
    21,
    [
        'sparky',
        'marc',
        'martin'
    ]
];
const type = new Array();
// console.log(fidelis);

for (let i = 0; i < fidelis.length; i++) {
    // console.log(fidelis[i], typeof fidelis[i]);
}

for (let i = 0; i < fidelis.length; i++) {
    if (typeof fidelis[i] === "number") break;
    // console.log(fidelis[i]);
}

for (let i = 0; i < fidelis.length; i++) {
    type[i] = typeof fidelis[i];
    // type.push(typeof fidelis[i]);
}

// console.log(type);

for (let i = 0; i < fidelis.length; i++) {
    if (typeof fidelis[i] == 'object') {
        for (let j = 0; j < fidelis[i].length; j++) {
            console.log(`Rj's friends ${j + 1}: ${fidelis[i][j]}`);
        }
    }
}

let i = 0;
while (i < fidelis.length) {
    console.log(`i: ${i}, ${fidelis[i]}`);
    i++;
}