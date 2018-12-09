import { implementGameLogic } from '..';

import { generateRandomNumber } from '../utils';

const description = '\nFind the greatest common divisor of given numbers.';

const upperLimit = 20;
const lowerLimit = 0;

const gcdRec = (firstNumber, secondNumber) => {
  if (secondNumber) {
    return gcdRec(secondNumber, firstNumber % secondNumber);
  }
  return Math.abs(firstNumber);
};

const getQuestionAnswerPair = () => {
  const firstNumber = generateRandomNumber(lowerLimit, upperLimit);
  const secondNumber = generateRandomNumber(lowerLimit, upperLimit);
  const gcd = gcdRec(firstNumber, secondNumber);
  return { question: (`${firstNumber} ${secondNumber}`), answer: gcd };
};

export const gameRunner = () => {
  implementGameLogic(description, getQuestionAnswerPair);
};

export default gameRunner;
