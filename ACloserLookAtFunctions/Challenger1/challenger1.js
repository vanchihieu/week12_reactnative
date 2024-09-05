/**
 * Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an 
array with the number of replies for each option. This data is stored in the starter 
'poll' object below
 */

// Poll object
const poll = {
  question: "What is your favourite programming language?",
  options: ["JavaScript", "Python", "Rust", "C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = prompt(
      `${this.question}\n${this.options
        .map((option, index) => `${index}: ${option}`)
        .join("\n")}\n(Write option number)`
    );
    if (Number(answer) >= 0 && Number(answer) < this.answers.length) {
      this.answers[Number(answer)]++;
      this.displayResults("string");
    } else {
      alert("Invalid answer. Please enter a valid option number.");
    }
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

// Event listener for the "Answer poll" button
const answerButton = document.getElementById("answer-button");
answerButton.addEventListener("click", () => poll.registerNewAnswer());

// Test data for bonus
const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

// Display results for test data
data1.forEach((answer) => poll.answers[answer]++);
poll.displayResults("string");

data2.forEach((answer) => poll.answers[answer]++);
poll.displayResults("array");
