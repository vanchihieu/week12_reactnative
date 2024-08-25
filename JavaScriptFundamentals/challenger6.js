/**
 * Steven is still building his tip calculator, using the same rules as before: Tip 15% of
    the bill if the bill value is between 50 and 300, and if the value is different, the tip is
    20%.
 */

// Function to calculate tip
function calcTip(billValue) {
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
  }
  
  // Test the function
  console.log(calcTip(100));
  
  // Create an array of bill values
  const bills = [125, 555, 44];
  
  // Create an array of tip values using the calcTip function
  const tips = bills.map(billValue => calcTip(billValue));
  
  // Create an array of total values
  const totals = bills.map((billValue, index) => billValue + tips[index]);
  
  // Print the results
  console.log(tips);
  console.log(totals);