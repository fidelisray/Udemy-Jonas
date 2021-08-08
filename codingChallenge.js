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

let markWeight, markHeight;
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
console.log("Is Mark's BMI higher than John's ? " + markHigherBMI);

