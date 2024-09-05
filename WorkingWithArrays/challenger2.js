/**
Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
dog ages to human ages and calculate the average age of the dogs in their study
 */

// Function to calculate average human age
function calcAverageHumanAge(ages) {
  // Convert dog ages to human ages
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));

  // Filter out dogs less than 18 human years old
  const adultHumanAges = humanAges.filter((age) => age >= 18);

  // Calculate average human age
  const averageHumanAge =
    adultHumanAges.reduce((sum, age) => sum + age, 0) / adultHumanAges.length;

  return averageHumanAge;
}

// Test data
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

// Calculate average human age for each dataset
const averageHumanAge1 = calcAverageHumanAge(data1);
const averageHumanAge2 = calcAverageHumanAge(data2);

// Print results
console.log(`Average human age for data 1: ${averageHumanAge1.toFixed(2)}`);
console.log(`Average human age for data 2: ${averageHumanAge2.toFixed(2)}`);
