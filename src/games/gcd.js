import game from '../index.js';
import getRandomInt from '../rndnmb.js';

const minNumberForGenerate = 0;
const maxNumberForGenerate = 100;

const gameDescription = 'Find the greatest common divisor of given numbers.';

function getGreatestCommonDivisor(firstNumber, secondNumber) {
  let gcd = 1;
  for (let divisor = 2; divisor <= Math.max(firstNumber, secondNumber); divisor += 1) {
    if (firstNumber % divisor === 0 && secondNumber % divisor === 0) {
      gcd = divisor;
    }
  }
  return gcd;
}

function questionAndAnswer() {
  const firstNumber = getRandomInt(minNumberForGenerate, maxNumberForGenerate);
  const secondNumber = getRandomInt(minNumberForGenerate, maxNumberForGenerate);
  const question = [firstNumber, secondNumber].join(' ');
  const correctAnswer = getGreatestCommonDivisor(firstNumber, secondNumber).toString();

  return [question, correctAnswer];
}

export default () => game(gameDescription, questionAndAnswer);
