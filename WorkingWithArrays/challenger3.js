/**
 * Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time 
as an arrow function, and using chaining!
 */
const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((sum, age) => sum + age, 0) /
  ages.filter((age) => age >= 18).length;

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const averageHumanAge1 = calcAverageHumanAge(data1);
const averageHumanAge2 = calcAverageHumanAge(data2);

console.log(`Average human age for data 1: ${averageHumanAge1.toFixed(2)}`);
console.log(`Average human age for data 2: ${averageHumanAge2.toFixed(2)}`);
