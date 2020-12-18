import game from '../index.js';
import getRandomInt from '../rndnmb.js';

const minNumberForGenerate = 0;
const maxNumberForGenerate = 100;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

function questionAndAnswer() {
  const isEven = (number) => number % 2 === 0;
  const question = getRandomInt(minNumberForGenerate, maxNumberForGenerate);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
}

export default () => game(gameDescription, questionAndAnswer);
