import startGame from '../index.js';
import getRandomInt from '../random-number.js';

const minNumberForGenerate = 0;
const maxNumberForGenerate = 100;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

function questionAndAnswer() {
  const question = getRandomInt(minNumberForGenerate, maxNumberForGenerate);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
}

export default () => startGame(gameDescription, questionAndAnswer);
