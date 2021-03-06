import startGame from '../index.js';
import getRandomInt from '../random-number.js';

const minNumberForGenerate = 0;
const maxNumberForGenerate = 100;

const minIndexForGenerate = 0;
const maxIndexForGenerate = 2;

const gameDescription = 'What is the result of the expression?';

function getSummarize(firstOperand, secondOperand, operator) {
  let result = 0;
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    default:
  }
  return result;
}

function questionAndAnswer() {
  const operators = ['+', '-', '*'];
  const firstOperand = getRandomInt(minNumberForGenerate, maxNumberForGenerate);
  const secondOperand = getRandomInt(minNumberForGenerate, maxNumberForGenerate);
  const indexOnOparation = getRandomInt(minIndexForGenerate, maxIndexForGenerate);
  const operator = operators[indexOnOparation];
  const question = [firstOperand, operator, secondOperand].join(' ');
  const correctAnswer = getSummarize(firstOperand, secondOperand, operator).toString();

  return [question, correctAnswer];
}

export default () => startGame(gameDescription, questionAndAnswer);
