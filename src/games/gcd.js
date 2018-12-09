import * as gameEngine from '..';

const description = '\nFind the greatest common divisor of given numbers.';

const maxnumberForRandomvalue = 20;

const getGCD = (firstNumber, secondNumber) => {
  let absFirstNumber = Math.abs(firstNumber);
  let absSecondNumber = Math.abs(secondNumber);
  if (absSecondNumber > absFirstNumber) {
    const temp = absFirstNumber; absFirstNumber = absSecondNumber; absSecondNumber = temp;
  }
  for (;;) {
    if (absSecondNumber === 0) return absFirstNumber;
    absFirstNumber %= absSecondNumber;
    if (absFirstNumber === 0) return absSecondNumber;
    absSecondNumber %= absFirstNumber;
  }
};

export const getQuestionAnswerPair = () => {
  const firstNumber = gameEngine.generateRandomNumber(0, maxnumberForRandomvalue);
  const secondNumber = gameEngine.generateRandomNumber(0, maxnumberForRandomvalue);
  const gcd = getGCD(firstNumber, secondNumber);
  return { question: (`${firstNumber} ${secondNumber}`), answer: gcd };
};

export const gameRunner = () => {
  gameEngine.implementGameLogic(description, getQuestionAnswerPair);
};
