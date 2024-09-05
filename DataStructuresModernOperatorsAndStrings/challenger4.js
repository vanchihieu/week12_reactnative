/**
 * Write a program that receives a list of variable names written in underscore_case 
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to 
insert the elements), and conversion will happen when the button is pressed.
 */

const show_result = document.getElementById("show_result");
let listNames = [
  "underscore_case",
  "first_name",
  "Some_Variable",
  "calculate_AGE",
  "delayed_departure",
];

function convertCamelCase(variableName = "") {
  let temp = variableName.toLowerCase();
  temp = temp
    .split("_")
    .map((word, index) => {
      if (index > 0) {
        word = word[0].toUpperCase() + word.slice(1);
      }
      return word;
    })
    .join("");
  return temp;
}

let newListNames = listNames.map((variableName) => {
  return convertCamelCase(variableName);
});

show_result.innerHTML = newListNames
  .map((value, index) => {
    return `<p>${value} ${Array(index + 1)
      .fill()
      .map(() => {
        return "✅";
      })
      .join("")}</p>`;
  })
  .join("");
