import { implementGameLogic } from '..';

import { generateRandomNumber } from '../utils';

const description = '\nAnswer "yes" if number even otherwise answer "no".';

const dictionaryAnswers = { true: 'yes', false: 'no' };

const isNumberEven = number => number % 2 === 0;

const upperLimit = 20;
const lowerLimit = 0;

const getQuestionAnswerPair = () => {
  const outputQuestion = generateRandomNumber(lowerLimit, upperLimit);
  const operationResult = dictionaryAnswers[isNumberEven(outputQuestion)];
  return { question: outputQuestion, answer: operationResult };
};

export const gameRunner = () => {
  implementGameLogic(description, getQuestionAnswerPair);
};

export default gameRunner;
