let display = document.getElementById("display");
let expression = "";

function appendToDisplay(value) {
  expression += value;
  display.textContent = expression;
}

function calculateResult() {
  try {
    const result = eval(expression);
    display.textContent = result;
    expression = String(result);
  } catch (error) {
    display.textContent = "Error";
    expression = "";
  }
}

function clearDisplay() {
  display.textContent = "0";
  expression = "";
}
