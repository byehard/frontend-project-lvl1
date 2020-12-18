import readlineSync from 'readline-sync';

const trueAnswers = 3;

// eslint-disable-next-line func-names
export default function (gameDescription, questionAndAnswer) {
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
}
