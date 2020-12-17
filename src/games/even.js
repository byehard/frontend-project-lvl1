import readlineSync from 'readline-sync';

const trueAnswers = 3;
const minNumberForGenerate = 0;
const maxNumberForGenerate = 100;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export default function () {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name: ');
    console.log(`Hello, ${name}!`);
    console.log(gameDescription);
    for (let counterTrueAnswers = 0; ;) {
        const [question, correctAnswer] = questionAndAnswer();
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');
        if (answer === correctAnswer) {
            console.log('Correct!');
            counterTrueAnswers += 1;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            break;
        }
        if (counterTrueAnswers === trueAnswers) {
            console.log(`Congratulations, ${name}!`);
            break;
        }
    }
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function questionAndAnswer() {
    const isEven = (number) => number % 2 === 0;
    const question = getRandomInt(minNumberForGenerate, maxNumberForGenerate);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer];
}