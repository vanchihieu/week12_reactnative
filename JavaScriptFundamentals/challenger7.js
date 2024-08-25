/**
 * Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
    implement the calculations! Remember: BMI = mass / height ** 2 = mass
    / (height * height) (mass in kg and height in meter)
 */

// Create objects for Mark and John
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI() {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };
  
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI() {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };
  
  // Calculate BMIs
  mark.calcBMI();
  john.calcBMI();
  
  // Compare BMIs
  if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s BMI (${john.bmi.toFixed(1)})!`);
  } else if (mark.bmi < john.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s BMI (${mark.bmi.toFixed(1)})!`);
  } else {
    console.log("Mark's BMI and John's BMI are equal!");
  }