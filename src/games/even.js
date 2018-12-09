import * as gameEngine from '..';

const description = '\nAnswer "yes" if number even otherwise answer "no".';

const dictionaryAnswers = { true: 'yes', false: 'no' };

const isNumberEven = number => number % 2 === 0;

const maxnumberForRandomvalue = 20;

export const getQuestionAnswerPair = () => {
  const outputQuestion = gameEngine.generateRandomNumber(0, maxnumberForRandomvalue);
  const operationResult = dictionaryAnswers[isNumberEven(outputQuestion)];
  return { question: outputQuestion, answer: operationResult };
};

export const gameRunner = () => {
  gameEngine.implementGameLogic(description, getQuestionAnswerPair);
};
