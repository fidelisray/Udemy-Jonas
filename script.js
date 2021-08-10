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

const teks = '5';
const angka = Number(teks); // Mengubah teks '5' (tipe data String) menjadi sebuah angka 5 (tipe data Number)

console.log(angka, typeof angka);
console.log(teks , typeof teks);

console.log(('5' + '5')/ 55); // Hasilnya → 1 (tipe datanya Number)
console.log(('5' + '5' - '20') + 5); // Hasilnya → 40 (tipe datanya Number)

console.log(`saya suka nonton bioskop di` + ` ` + `21` - `11`);