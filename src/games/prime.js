import game from '../index.js';
import getRandomInt from '../rndnmb.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minNumberForGenerate = 2;
const maxNumberForGenerate = 3571;

function isPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function questionAndAnswer() {
  const question = getRandomInt(minNumberForGenerate, maxNumberForGenerate);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
}

export default () => game(gameDescription, questionAndAnswer);
