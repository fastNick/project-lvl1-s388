import * as gameEngine from '..';

import * as constants from '../constants';

export const gameDescriptionText = '\nAnswer "yes" if number even otherwise answer "no".';

const isNumberEven = number => number % 2 === 0;

export const getQuestionAndSystemAnswer = () => {
  const outputQuestion = gameEngine.generateRandomNumber(0, constants.MAXNUMBER_FOR_RANDOMVALUES);
  console.log(outputQuestion);
  const answer = constants.DICTIONARY_ANSWERS[isNumberEven(outputQuestion)];
  return answer;
};

export const gameRunner = () => {
  gameEngine.implementGameLogic(gameDescriptionText, getQuestionAndSystemAnswer,
    constants.NUMBER_OF_QUESTIONS);
};
