import readlineSync from 'readline-sync';

const correctAnswers = 3;

export default (gameDescription, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);
  for (let correctAnswerCounter = 0; ;) {
    const [question, correctAnswer] = questionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswerCounter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (correctAnswerCounter === correctAnswers) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};
