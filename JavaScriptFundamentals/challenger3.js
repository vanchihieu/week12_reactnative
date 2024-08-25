/**
 * There are two gymnastics teams, Dolphins and Koalas. They compete against each
    other 3 times. The winner with the highest average score wins a trophy!
 */

// Data 1
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

// Data Bonus 1
const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

// Data Bonus 2
const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

// Function to calculate average score
const calculateAverage = (scores) =>
  scores.reduce((a, b) => a + b, 0) / scores.length;

// Calculate average scores
const dolphinsAverage1 = calculateAverage(dolphinsScores1);
const koalasAverage1 = calculateAverage(koalasScores1);

const dolphinsAverageBonus1 = calculateAverage(dolphinsScoresBonus1);
const koalasAverageBonus1 = calculateAverage(koalasScoresBonus1);

const dolphinsAverageBonus2 = calculateAverage(dolphinsScoresBonus2);
const koalasAverageBonus2 = calculateAverage(koalasScoresBonus2);

// Function to determine the winner
const determineWinner = (dolphinsAverage, koalasAverage) => {
  if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log(`Dolphins win with an average score of ${dolphinsAverage}!`);
  } else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log(`Koalas win with an average score of ${koalasAverage}!`);
  } else if (
    dolphinsAverage === koalasAverage &&
    dolphinsAverage >= 100 &&
    koalasAverage >= 100
  ) {
    console.log(`It's a draw with both teams scoring ${dolphinsAverage}!`);
  } else {
    console.log(`No team wins the trophy.`);
  }
};

// Determine winners for each dataset
console.log("Data 1:");
determineWinner(dolphinsAverage1, koalasAverage1);

console.log("Data Bonus 1:");
determineWinner(dolphinsAverageBonus1, koalasAverageBonus1);

console.log("Data Bonus 2:");
determineWinner(dolphinsAverageBonus2, koalasAverageBonus2);
