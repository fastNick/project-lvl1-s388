import * as gameEngine from '..';

const description = '\nFind the greatest common divisor of given numbers.';

const maxnumberForRandomvalue = 20;

const gcdRec = (firstNumber, secondNumber) => {
  if (secondNumber) {
    return gcdRec(secondNumber, firstNumber % secondNumber);
  }
  return Math.abs(firstNumber);
};

export const getQuestionAnswerPair = () => {
  const firstNumber = gameEngine.generateRandomNumber(0, maxnumberForRandomvalue);
  const secondNumber = gameEngine.generateRandomNumber(0, maxnumberForRandomvalue);
  const gcd = gcdRec(firstNumber, secondNumber);
  return { question: (`${firstNumber} ${secondNumber}`), answer: gcd };
};

export const gameRunner = () => {
  gameEngine.implementGameLogic(description, getQuestionAnswerPair);
};
