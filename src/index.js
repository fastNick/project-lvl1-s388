import readlineSync from 'readline-sync';

export const introduceUser = () => {
  const userName = readlineSync.question('\nMay I have your name?');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};
export const outputWelcome = (welcomeText) => {
  console.log(welcomeText);
};

export const outputGameDescription = (gameDescriptionText) => {
  console.log(gameDescriptionText);
};

export const getUserAnswer = () => readlineSync.question('Your answer: ');

export const outputForWrongAnswer = (userAnswer, correctAnswer, userName) => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n`
+ `Let's try again, ${userName}!`);

export const outputFroCorrectAnswer = () => console.log('Correct!');


export const generateRandomNumber = (lowerBoundary, upperBoundary) => lowerBoundary
+ Math.floor(Math.random() * (upperBoundary - lowerBoundary));

export const getRandomElementInArray = array => array[Math.floor(Math.random() * array.length)];

export const implementGameLogic = (gameDescription, getQuestionAndSystemAnswer,
  numberOfQuestions) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(gameDescription);
  const userName = introduceUser();
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const correctAnswer = getQuestionAndSystemAnswer();
    const userAnswer = getUserAnswer();
    const isAnswerCorrect = String(userAnswer) === String(correctAnswer);
    if (!isAnswerCorrect) {
      outputForWrongAnswer(userAnswer, correctAnswer, userName);
      return;
    }
    console.log('Correct!');
  }
  console.log(` \nCongratulations, ${userName} `);
};
