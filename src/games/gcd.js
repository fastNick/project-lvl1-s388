import * as gameEngine from '..';

import { generateRandomNumber } from '../utils';

const description = '\nFind the greatest common divisor of given numbers.';

const maxnumberForRandomvalue = 20;

const gcdRec = (firstNumber, secondNumber) => {
  if (secondNumber) {
    return gcdRec(secondNumber, firstNumber % secondNumber);
  }
  return Math.abs(firstNumber);
};

const getQuestionAnswerPair = () => {
  const firstNumber = generateRandomNumber(0, maxnumberForRandomvalue);
  const secondNumber = generateRandomNumber(0, maxnumberForRandomvalue);
  const gcd = gcdRec(firstNumber, secondNumber);
  return { question: (`${firstNumber} ${secondNumber}`), answer: gcd };
};

export const gameRunner = () => {
  gameEngine.implementGameLogic(description, getQuestionAnswerPair);
};

export default gameRunner;
