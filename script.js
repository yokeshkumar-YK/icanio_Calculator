const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let expression = "";

// Prevent invalid operator chaining
function isOperator(char) {
  return ["+", "-", "*", "/"].includes(char);
}

// Safe calculation (NO eval danger)
function calculate(expr) {
  try {
    // remove trailing operator
    if (isOperator(expr.slice(-1))) {
      expr = expr.slice(0, -1);
    }

    // handle empty
    if (!expr) return "";

    // convert × ÷ symbols if any
    expr = expr.replace(/×/g, "*").replace(/÷/g, "/");

    let result = Function('"use strict";return (' + expr + ")")();

    if (!isFinite(result)) return "Error";

    return result;
  } catch {
    return "Error";
  }
}

// Button handling
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value;

    // CLEAR ALL
    if (value === "C") {
      expression = "";
      display.value = "";
      return;
    }

    // BACKSPACE
    if (value === "CE") {
      expression = expression.slice(0, -1);
      display.value = expression;
      return;
    }

    // EQUALS
    if (value === "=") {
      expression = String(calculate(expression));
      display.value = expression;
      return;
    }

    // prevent multiple operators like ++ -- **/
    const lastChar = expression.slice(-1);

    if (isOperator(value) && isOperator(lastChar)) {
      expression = expression.slice(0, -1) + value;
    } else {
      expression += value;
    }

    display.value = expression;
  });
});

// Keyboard support (bonus)
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || isOperator(e.key) || e.key === ".") {
    expression += e.key;
  }

  if (e.key === "Enter") {
    expression = String(calculate(expression));
  }

  if (e.key === "Backspace") {
    expression = expression.slice(0, -1);
  }

  display.value = expression;
});
