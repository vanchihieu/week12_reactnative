/** Let's improve Steven's tip calculator even more, this time using loops!
 */

// Function to calculate tip
function calcTip(billValue) {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
}

// Array of bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Empty arrays for tips and totals
const tips = [];
const totals = [];

// Calculate tips and totals for each bill
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

// Function to calculate average
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// Calculate average of totals
const averageTotal = calcAverage(totals);

// Print results
console.log(tips);
console.log(totals);
console.log(`Average total: ${averageTotal.toFixed(2)}`);
