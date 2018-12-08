import readlineSync from 'readline-sync';

import * as calcGame from './games/calc';
import * as evenGame from './games/even';

import * as constants from './constants';

const outputWelcome = (typeOfGame) => {
  if (typeOfGame === constants.EVEN_GAMETYPE) {
    return evenGame.outputWelcome;
  }
  return calcGame.outputWelcome;
};

const getQuestion = (typeOfGame) => {
  if (typeOfGame === constants.EVEN_GAMETYPE) {
    return evenGame.getQuestion();
  }
  return calcGame.getQuestion();
};

const getCorrectAnswer = (typeOfGame, question) => {
  if (typeOfGame === constants.EVEN_GAMETYPE) {
    return evenGame.getCorrectAnswer(question);
  }

  return calcGame.getCorrectAnswer(question);
};

const checkAnswer = (typeOfGame, userAnswer, correctAnswer) => {
  if (typeOfGame === constants.EVEN_GAMETYPE) {
    return evenGame.checkAnswer(userAnswer, correctAnswer);
  }
  return calcGame.checkAnswer(userAnswer, correctAnswer);
};

const outputForWrongAnswer = (typeOfGame, userAnswer, correctAnswer, userName) => {
  if (typeOfGame === constants.EVEN_GAMETYPE) {
    console.log(evenGame.outputForWrongAnswer(userAnswer, correctAnswer, userName));
  }
  if (typeOfGame === constants.CALC_GAMETYPE) {
    console.log(calcGame.outputForWrongAnswer(userAnswer, correctAnswer, userName));
  }
};

export const introduceUser = () => {
  const userName = readlineSync.question('\nMay I have your name?');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const gameRunner = (typeOfGame) => {
  console.log(outputWelcome(typeOfGame));
  const userName = introduceUser();
  for (let i = 0; i < constants.NUMBER_OF_QUESTIONS; i += 1) {
    const question = getQuestion(typeOfGame);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(typeOfGame, question);
    const isAnswerCorrect = checkAnswer(typeOfGame, userAnswer, correctAnswer);
    if (!isAnswerCorrect) {
      outputForWrongAnswer(typeOfGame, userAnswer, correctAnswer, userName);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
