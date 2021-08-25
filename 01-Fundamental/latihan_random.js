// let x = 0;
// while(x < 3){
//     console.log(x);
//     y = ++x;
//     console.log("y = " + y);
// }
// for(let i = 0;i < 3;i++){
//     console.log("i = " + i);
// }


////////////////////////////////////////
// Operator
// Operator precedence

const now = 2021;
const myAge = now - 2000;
const sparkyAge = now - 2014;

console.log(myAge, sparkyAge);

const isFullAge = myAge >= 18;
// console.log(isFullAge);

const firstName = "Fidelis";
const lastName = "Airudin";

// console.log(firstName + ' ' + lastName);
/*
let a, b;
a = b = myAge + 1 * 2;
console.log(a, b);

const averageAge = (myAge + sparkyAge) / 2;*/
// console.log(averageAge);

////////////////////////////////////////
// Latihan random 210808

/*
let theNumber = Number(prompt('Masukkan angka '));
// let theNumber = prompt('Masukkan angka ');
if(!Number.isNaN(theNumber)) {
  console.log(`Your number is square root of ${theNumber * theNumber}`);
} else {
  console.log(`You are not submiting a number`);
} */
/*
if (false != true) {
  console.log("That makes sense.");
  if (1 < 2) {
  console.log("No surprise there.");
  }
}*/

// let theNumber = Number(prompt('Pick a number'));
// if(!Number.isNaN(theNumber)) console.log('Your input is a number ' + theNumber);
// else console.log(`Your input is ${theNumber} / not a number`);
// if(theNumber % 2 != 0) {
//   theNumber = Number(prompt('Choose even number!'));
// }
// for(let i = 1; i <= theNumber; i++) {
//   // console.log('#'.repeat(i));
//   if(i % 2 != 0) {
//     for(let j = 1; j <= (theNumber/2); j++) {
//       if(j % 2 != 0) document.write('#');
//       else document.write('_');
//     }
//   } else {
//     for(let k = 1; k <= (theNumber/2); k++) {
//       if(k % 2 == 0) document.write('#');
//       else document.write('_');
//     }
//   }
//   document.write(`<br>`);
//   /*
//   for(let j = 0; j <= i; j++) {
//     document.write('# ');
//   }
//   document.write('<br>');
//   */
// }

function sikusikuKanan(a) {
  let str = '';
  /////////////////////////////
  /*
        *
       **
      ***
     ****
    *****
  */
  for(let i = 0; i < a; i++) {
    for(let k = 0; k < a; k++) {
      if(i + k >= a - 1) str = str.concat('*');
      else str = str.concat(' ');
    }
    str = str.concat('\n');
  }

  console.log(str);
  /////////////////////////////
  // own version
  /*
  for(let i = 0; i < a; i++) {
    for(let j = i; j < a - 1; j++) {
      document.write(`_`);
    }
    for(let k = 0; k <= i; k++) {
      document.write('* ');
    }
    document.write(`<br>`);
  } */
}

function sikusikuKiri(a) {
  let str = '';
  /////////////////////////////
  /*
    *    
    **   
    ***  
    **** 
    *****
  */
  for(let i = 0; i < a; i++) {
    for(let j = 0; j < a; j++) {
      if(j <= i) str = str.concat('*');
      else str = str.concat(' ');
    }
    str = str.concat('\n');
  }

  console.log(str);
}

function sikusikuKananKebalik(a) {
  let str = '';
  /////////////////////////////
  /*
    *****
     ****
      ***
       **
        *
  */
  for(let i = 0; i < a; i++) {
    for(let j = 0; j < a; j++) {
      if(i <= j) str = str.concat('*');
      else str = str.concat(' ');
    }
    str = str.concat('\n');
  }
  console.log(str);
}

function sikusikuKiriKebalik(a) {
  let str = '';
  /////////////////////////////
  /*
    ***** 
    ****   
    ***    
    **
    *
  */
  for(let i = 0; i < a; i++) {
    for(let j = 0; j < a; j++) {
      if(i + j <= a - 1) str = str.concat('*');
      else str = str.concat(' ');
    }
    str = str.concat('\n');
  }
  console.log(str);
}

const segitiga = function(a) {
  let str = '';

  for(let i = 0; i < a; i++) {
    for(let j = 0; j < a; j++) {
      if(i + j >= a - 1) str = str.concat(`* `);
      else str = str.concat(` `);
    }
    str = str.concat(`\n`);
  }
  console.log(str);
}

// sikusikuKanan(theNumber);
// sikusikuKananKebalik(theNumber);
// sikusikuKiri(theNumber);
// sikusikuKiriKebalik(theNumber);

// segitiga(theNumber);

const pangkat = function(a,pangkat) {
  let hasil = 1;
  for(let i = 0; i < pangkat; i++) {
    hasil *= a;
  }
  return hasil;
}

// console.log(pangkat(theNumber,3));

const wesTatas = function() {
  console.log('Wes Tatas!');
}

// wesTatas();

let x = 10;
const a = function() {
  // var b = function() {
  //   c();
  //   console.log('Function B has been called');
  // }
  // var c = function() {
  //   console.log('Function C has been called');
  // }
  // b();
  // console.log('Function A has been called');
  console.log(x);
}

a();
if(!false) {
  var z = 20;
  let y = 40;
  console.log(x + y + z); // → 70
} 
// console.log(y); // y is not visible here
console.log(x + z); // → 30