let inputEquation = document.querySelector('.input-equation');
let input = document.querySelector('.calculator-input');
let buttons = document.querySelectorAll('.calculator-btn');
let operatorButtons = document.querySelectorAll('.operator-btn');
let inputHistory = document.querySelector('.input-history');
let calculateResult = function () {
  let inputValue = input.value;
  let result = '';

  try {
    result = eval(inputValue);
  } catch (e) {
    result = 'ERROR';
  }

  if (result === 'ERROR') {
    inputEquation.innerHTML = '';
  } else {
    inputEquation.innerHTML = inputValue;
    addItemToInputHistoryList(inputValue, result);
  }

  input.value = result;
};
let clearInput = function () {
  input.value = '';
  inputEquation.innerHTML = '';
};
let deleteLastInput = function () {
  input.value = input.value.slice(0, -1);
};
let onCalculatorButtonClick = function (event) {
  let action = event.currentTarget.textContent;

  processCalculatorWithAction(action);
};

let processCalculatorWithAction = function (action) {
  if (action === '=') {
    calculateResult();
  } else if (action === 'AC') {
    clearInput();
  } else if (action === 'DEL') {
    deleteLastInput();
  } else {
    let inputValue = input.value;
    let newValue = inputValue + action;

    input.value = newValue;
  }

  let isOperator = isLastCharacterAnOperator(input.value);
  console.log(isOperator);
};

for (let i = 0; i < buttons.length; i++) {
  let currentButton = buttons[i];

  currentButton.addEventListener('click', onCalculatorButtonClick);
}

// ========================
// INPUT VALIDATION
// ========================
let operators = ['+', '-', '*', '/', '.'];

let setOperatorButtonsDisabled = function (disabled) {
  for (let i = 0; i < operatorButtons.length; i++) {
    let operatorButton = operatorButtons[i];

    operatorButton.disabled = disabled;
  }
};
let isLastCharacterAnOperator = function (inputValue) {
  let operators = ['+', '-', '*', '/', '.'];
  let lastCharacter = inputValue[inputValue.length - 1];

  return operators.includes(lastCharacter);
};

function isOperator(action) {
  return operators.includes(action);
}

// ========================
// KEYBOARD
// ========================
let onBodyKeyUp = function (event) {
  let key = event.key;
  let action;

  if (key === 'Enter') {
    action = '=';
  } else if (key === 'Escape') {
    action = 'AC';
  } else if (key === 'Backspace') {
    action = 'DEL';
  } else {
    action = key;
  }

  let acceptableActions = [];

  for (let i = 0; i < buttons.length; i++) {
    let currentButton = buttons[i];
    let buttonText = currentButton.textContent;

    acceptableActions.push(buttonText);
  }

  if (acceptableActions.includes(action)) {
    processCalculatorWithAction(action);
  }
};
document.body.addEventListener('keyup', onBodyKeyUp);
