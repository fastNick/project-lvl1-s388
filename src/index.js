import readlineSync from 'readline-sync';

const numberOfQuestions = 4;

export const introduceUser = () => {
  const userName = readlineSync.question('\nMay I have your name?');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const getUserAnswer = () => readlineSync.question('Your answer: ');

const outputForWrongAnswer = (userAnswer, correctAnswer, userName) => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n`
+ `Let's try again, ${userName}!`);

export const implementGameLogic = (gameDescription, getQuestionAnswerPair) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(gameDescription);
  const userName = introduceUser();
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const questionAnswerPair = getQuestionAnswerPair();
    console.log(questionAnswerPair.question);
    const userAnswer = getUserAnswer();
    const isAnswerCorrect = String(userAnswer) === String(questionAnswerPair.answer);
    if (!isAnswerCorrect) {
      outputForWrongAnswer(userAnswer, questionAnswerPair.answer, userName);
      return;
    }
    console.log('Correct!');
  }
  console.log(` \nCongratulations, ${userName} `);
};
