import readlineSync from 'readline-sync';

const CALC = 'CALC';
const EVEN = 'EVEN';
const GCD = 'GCD';
const ARITHEMIC_PROGRESSION = 'ARITHEMIC_PROGRESSION';

const getGameData = (gameName) => {
  switch (gameName) {
    case CALC:
      return { countOfRounds: 3, gameDescription: '\nWhat is the result of the expression?' };
    case EVEN:
      return { countOfRounds: 3, gameDescription: '\nAnswer "yes" if number even otherwise answer "no".' };
    case GCD:
      return { countOfRounds: 3, gameDescription: '\nFind the greatest common divisor of given numbers.' };
    case ARITHEMIC_PROGRESSION:
      return { countOfRounds: 3, gameDescription: '\nWhat number is missing in the progression?' };
    default:
      return { countOfRounds: 3, gameDescription: 'Name of game is not defined' };
  }
};


export const introduceUser = () => {
  const userName = readlineSync.question('\nMay I have your name?');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const getUserAnswer = () => readlineSync.question('Your answer: ');

const outputForWrongAnswer = (userAnswer, correctAnswer, userName) => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n`
+ `Let's try again, ${userName}!`);

export const implementGameLogic = (getQuestionAnswerPair, gameName) => {
  const gameData = getGameData(gameName);
  console.log('\nWelcome to the Brain Games!');
  console.log(gameData.gameDescription);
  const userName = introduceUser();
  for (let i = 0; i < gameData.countOfRounds; i += 1) {
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
