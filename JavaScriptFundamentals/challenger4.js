/**
 * Steven wants to build a very simple tip calculator for whenever he goes eating in a
    restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
    300. If the value is different, the tip is 20%.
 */

// Test data
const billValues = [275, 40, 430];

// Calculate tip and total for each bill value
billValues.forEach((billValue) => {
  // Calculate tip using ternary operator
  const tip =
    billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

  // Calculate total
  const total = billValue + tip;

  // Print output
  console.log(
    `The bill was ${billValue}, the tip was ${tip.toFixed(
      2
    )}, and the total value ${total.toFixed(2)}`
  );
});
