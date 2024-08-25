/**
 * Mark and John are trying to compare their BMI (Body Mass Index), which is
    calculated using the formula:
    BMI = mass / height ** 2 = mass / (height * height) (mass in kg
    and height in meter).
 */

// Data 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

// Data 2
let markMass2 = 95;


let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

// Calculate BMI for Data 1
let markBMI1 = markMass1 / (markHeight1 * markHeight1);
let johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);

// Calculate BMI for Data 2
let markBMI2 = markMass2 / (markHeight2 * markHeight2);
let johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);

// Check if Mark has a higher BMI for Data 1
let markHigherBMI1 = markBMI1 > johnBMI1;

// Check if Mark has a higher BMI for Data 2
let markHigherBMI2 = markBMI2 > johnBMI2;

console.log("Data 1:");
console.log("Mark's BMI:", markBMI1);
console.log("John's BMI:", johnBMI1);
console.log("Mark has a higher BMI than John:", markHigherBMI1);

console.log("\nData 2:");
console.log("Mark's BMI:", markBMI2);
console.log("John's BMI:", johnBMI2);
console.log("Mark has a higher BMI than John:", markHigherBMI2);