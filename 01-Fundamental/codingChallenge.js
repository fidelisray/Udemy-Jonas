/////////////////////////////////////
// Coding Challenge #1

/*
  Mark and John are trying to compare their BMI (Body Mass Index),
  which is calculated using formula : 
    BMI = mass / height ** 2 = mass / (height * height).
    (mass in kg, height in meter)

  1. Store Mark's and John's mass and height in variables
  2. Calculate both their BMIs using the formula (you can even implement both version)
  3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

  TEST DATA 1 : Marks weights 78 kg and is 1.69 m tall.
                John's weights 92 kg and is 1.95 m tall.
  TEST DATA 2 : Mark's weights 95 kg and is 1.88 m tall.
                John's weights 85 kg and is 1.76 m tall.
*/

/*let markWeight, markHeight;
let johnWeight, johnHeight;
let markHigherBMI;

markWeight = prompt("Mark's Weight ? ");
markHeight = prompt("Mark's Height ? ");
johnWeight = prompt("John's Weight ? ");
johnHeight = prompt("John's Height ? ");

function calculateBMI(weight, height) {
  let bmi = weight / (height ** 2)
  return bmi;
}

let markBMI = calculateBMI(markWeight, markHeight);
let johnBMI = calculateBMI(johnWeight, johnHeight);

markHigherBMI = markBMI > johnBMI;

console.log("Mark's Weight : " + markWeight + " Mark's Height : " + markHeight);
console.log("John's Weight : " + johnWeight + " John's Height : " + johnHeight);
console.log("Mark's BMI = " + markBMI);
console.log("John's BMI = " + johnBMI);
console.log("Is Mark's BMI higher than John's ? " + markHigherBMI); */

/////////////////////////////////////
// Coding Challenge #2

/*if(markBMI > johnBMI) console.log(`Mark's BMI is higher than John's`);
else console.log(`John's BMI is higher than Mark's`);

if(markBMI > johnBMI) console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
else console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`); */

/////////////////////////////////////
// Coding Challenge #3

/* 
  1. Calculate the avereage score for each team, using the test data below
  2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

  3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks
  4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the tropy.

  TEST DATA :
    1.) DOLPHINS score 96, 108 and 89.
        KOALAS score 88, 91, and 110
  TEST DATA BONUS :
    1.) DOLPHINS score 97, 112 and 101.
        KOALAS score 109, 95, and 123
    2.) DOLPHINS score 97, 112 and 101.
        KOALAS score 109, 95, and 106
*/

/*const dolphinsScore = ((97 + 112 + 101)/3);
const koalasScore = ((109 + 95 + 106)/3);

if(dolphinsScore > koalasScore) {
  console.log(`Dolphins Score : ${dolphinsScore} | Koalas Score : ${koalasScore}`);
  console.log(`Dolphins are the winner!!`);
} else if(koalasScore > dolphinsScore) {
  console.log(`Dolphins Score : ${dolphinsScore} | Koalas Score : ${koalasScore}`);
  console.log(`Koalas are the winner!!`);
} else {
  console.log(`Dolphins Score : ${dolphinsScore} | Koalas Score : ${koalasScore}`);
  console.log(`DRAW!!`);
}

if(dolphinsScore > 100 && koalasScore > 100) {
  if(dolphinsScore > koalasScore) {
    console.log(`Dolphins Score : ${dolphinsScore} | Koalas Score : ${koalasScore}`);
    console.log(`Dolphins are the winner!!`);
  } else if(koalasScore > dolphinsScore) {
    console.log(`Dolphins Score : ${dolphinsScore} | Koalas Score : ${koalasScore}`);
    console.log(`Koalas are the winner!!`);
  } else {
    console.log(`Dolphins Score : ${dolphinsScore} | Koalas Score : ${koalasScore}`);
    console.log(`DRAW!!`);
  }
} else if(!(dolphinsScore > 100) && koalasScore > 100) {
  console.log(`Dolphins Score : ${dolphinsScore} | Koalas Score : ${koalasScore}`);
  console.log(`Koalas are the winner!!`);
} else if(dolphinsScore > 100 && !(koalasScore > 100)) {
  console.log(`Dolphins Score : ${dolphinsScore} | Koalas Score : ${koalasScore}`);
  console.log(`Dolphins are the winner!!`);
} else {
  console.log(`Dolphins Score : ${dolphinsScore} | Koalas Score : ${koalasScore}`);
  console.log(`No Team Wins The Tropy!!`);
} */

/////////////////////////////////////
// Conditional Challenge

// let day = prompt('Masukkan Hari...');

// if (day === 'Monday') {
//   console.log('Belajar Javascript (Udemy)');
// } else if (day === 'Tuesday') {
//   console.log('Belajar Javascript (Youtube / WPU)');
// } else if (day === 'Wednesday' || day === 'Thursday') {
//   console.log('Belajar Javascript & Bahasa Jepang');
// } else if (day === 'Friday') {
//   console.log('Mencari & membaca jurnal');
// } else if (day === 'Saturday' || day === 'Sunday') {
//   console.log('Istirahat');
// } else {
//   console.log('Hari yang anda masukkan tidak Valid!!');
// }

/////////////////////////////////////
// Coding Challenge #4

/*
  Fidelis wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

  1. Your task is to calculate the tip, depending on the bill value. Create variable called 'tip' for this. It's not allowed to use an if/else statements (if it's easier for you, you can start with if/else statement, and then try to convert it to a ternary operator!)
  2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
  Example: 'The bill was 275 the tip was 41.25, and the total value 316.25'

  TEST DATA: Test for bill values 275, 40 and 430
*/

// let bill = 275;
/*
let bill = Number(prompt('Insert the bill : '));
let tip = bill * (bill > 50 && bill < 300 ? 15*(1/100) : 20*(1/100));
let finalValue = bill + tip;

console.log(`Bill   : ${bill}`);
console.log(`Tip    : ${tip}`);
console.log(`Total  : ${finalValue}`);*/

/////////////////////////////////////
// Coding Challenge #5

/*
  Back to the two gmnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, wich works differently.
  Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
  A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

  Task:
  1. Create an arrow function 'calcAverage' to calculate the average of 3 scores.
  2. Use the function to calculate the average for both teams.
  3. Create a function 'checkWinner' that takes the average score of each teams as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
  4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
  5. Ignore draws this time.

  TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49.
  TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27.
*/

/*
const calcAverage = scores => scores / 3;
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins / 2 >= avgKoalas) {
    return `Dophins wins (${avgDolphins} vs ${avgKoalas})`;
  } else if (avgKoalas / 2 >= avgDolphins) {
    return `Koalas wins (${avgKoalas} vs ${avgDolphins})`;
  } else {
    return `No one wins (Dolphins: ${avgDolphins}, Koalas: ${avgKoalas})`;
  }
}*/

// const dolphins = calcAverage(44 + 23 + 71);
// const koalas = calcAverage(65 + 54 + 49);
// const dolphins = calcAverage(85 + 54 + 41);
// const koalas = calcAverage(23 + 34 + 27);
// console.log(checkWinner(dolphins,koalas));

/////////////////////////////////////
// Coding Challenge #6

/*
  Fidelis is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the value is between 50 and 300, and if the value is different, the tip is 20%.

  Task:
  1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
  2. And now let's use arrays! so create an array 'bills' containing the test data below.
  3. Create an array 'tips' containing the tip value for each bill, calculated  from the function you created before.
  4. BONUS: Create an array 'total' containing the total values, so bill + tip.

  TEST DATA: 125, 555 and 44
*/

// const calcTip = bill => {
//   if (bill > 50 && bill < 300) {
//     return 0.15 * bill;
//   } else {
//     return 0.2 * bill;
//   }
// }
// const calcTip2 = bill => bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill; 
// console.log(calcTip(10));

// const bills = [125, 555, 44];
// const tips = [calcTip2(bills[0]), calcTip2(bills[1]), calcTip2(bills[bills.length - 1])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(tips);
// console.log(total);

/////////////////////////////////////
// Coding Challenge #7

/* 
  Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculation! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in KG and Height in meter)

  1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
  2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
  3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

  TEST DATA :
    mark's weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 55,
//   height: 1.75,
//   calcBMI: function() {
//     this.BMI = this.mass / (this.height ** 2);
//     return this.BMI;
//   }
// };

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function() {
//     this.BMI = this.mass / (this.height ** 2);
//     return this.BMI;
//   }
// };

// console.log(`${mark.calcBMI() > john.calcBMI() ? `Mark's BMI (${mark.BMI}) is higher than John's (${john.BMI})` : `John's BMI (${john.BMI}) is higher than Mark's (${mark.BMI})`}`);

/////////////////////////////////////
// Coding Challenge #8

/*
  Let's improve Fidel's tip calculator even more, this time using loops!

  1. Create Array 'bills' containing all 10 test bill values
  2. Create empty arrays for the tips and the totals ('tips' and 'totals')
  3. Use the 'calcTip' function to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

  TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52

  HINT: call calcTip in the loop and use the push method to add values to the tips and totals arrays

  4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how 
*/

const calcTip = bill => {
  if (bill > 50 && bill < 300) {
    return 0.15 * bill;
  } else {
    return 0.2 * bill;
  }
}
const calcTip2 = bill => bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill; 
// console.log(calcTip(10));

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = new Array();
const totals = new Array();

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

const test = [1,2,3];

console.log(`Average: ${calcAverage(totals)}`);
console.log(`Average: ${calcAverage(tips)}`);
