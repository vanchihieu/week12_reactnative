/**
 * Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
    gymnastics discipline, which works differently.
    Each team competes 3 times, and then the average of the 3 scores is calculated (so
    one average score per team).
    A team only wins if it has at least double the average score of the other team.
    Otherwise, no team wins!
 */

    // Function to calculate average
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Data 1
const dolphinsScore1 = [44, 23, 71];
const koalasScore1 = [65, 54, 49];

// Data 2
const dolphinsScore2 = [85, 54, 41];
const koalasScore2 = [23, 34, 27];

// Function to check winner
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins.toFixed(1)} vs. ${avgKoalas.toFixed(1)})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas.toFixed(1)} vs. ${avgDolphins.toFixed(1)})`);
  } else {
    console.log("No team wins!");
  }
};

// Calculate averages for Data 1
const dolphinsAverage1 = calcAverage(...dolphinsScore1);
const koalasAverage1 = calcAverage(...koalasScore1);

// Calculate averages for Data 2
const dolphinsAverage2 = calcAverage(...dolphinsScore2);
const koalasAverage2 = calcAverage(...koalasScore2);

// Check winner for Data 1
checkWinner(dolphinsAverage1, koalasAverage1);

// Check winner for Data 2
checkWinner(dolphinsAverage2, koalasAverage2);