import game from '../index.js';
import getRandomInt from '../rndnmb.js';

const minStepProgression = 2;
const maxStepProgression = 10;
const minLengthProgression = 5;
const maxLengthProgression = 15;
const minNumberProgression = 0;
const maxNumberProgression = 100;

const gameDescription = 'What number is missing in the progression?';

function getProgression(progressionLength, step, firstElement) {
  const progressionArr = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progressionArr.push(firstElement + (step * i));
  }
  return progressionArr;
}

function questionAndAnswer() {
  const progressionLength = getRandomInt(minLengthProgression, maxLengthProgression);
  const step = getRandomInt(minStepProgression, maxStepProgression);
  const startIndex = 0;
  const lastIndex = progressionLength - 1;
  const hiddenIndexOnProgresiion = getRandomInt(startIndex, lastIndex);
  const firstElement = getRandomInt(minNumberProgression, maxNumberProgression);

  const progression = getProgression(progressionLength, step, firstElement);
  const correctAnswer = progression[hiddenIndexOnProgresiion].toString();
  progression[hiddenIndexOnProgresiion] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
}

export default () => game(gameDescription, questionAndAnswer);
