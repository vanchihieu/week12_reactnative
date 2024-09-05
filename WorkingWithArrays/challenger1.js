// Function to check dogs' ages
function checkDogs(dogsJulia, dogsKate) {
  // Remove cat ages from Julia's array
  const juliaCorrected = [...dogsJulia];
  juliaCorrected.splice(0, 1);
  juliaCorrected.splice(-2);

  // Combine both arrays
  const dogs = [...juliaCorrected, ...dogsKate];

  // Check each dog's age
  for (let i = 0; i < dogs.length; i++) {
    if (dogs[i] >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${dogs[i]} years old`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  }
}

// Test data
const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];

const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

// Run the function for both test datasets
checkDogs(dogsJulia1, dogsKate1);
checkDogs(dogsJulia2, dogsKate2);
