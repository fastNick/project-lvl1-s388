import * as gameEngine from '..';

import { generateRandomNumber } from '../utils';

const description = '\nAnswer "yes" if number even otherwise answer "no".';

const dictionaryAnswers = { true: 'yes', false: 'no' };

const isNumberEven = number => number % 2 === 0;

const maxnumberForRandomvalue = 20;

const getQuestionAnswerPair = () => {
  const outputQuestion = generateRandomNumber(0, maxnumberForRandomvalue);
  const operationResult = dictionaryAnswers[isNumberEven(outputQuestion)];
  return { question: outputQuestion, answer: operationResult };
};

export const gameRunner = () => {
  gameEngine.implementGameLogic(description, getQuestionAnswerPair);
};

export default gameRunner;
