import * as gameEngine from '..';

import * as constants from '../constants';

export const outputWelcomeText = '\nWelcome to the Brain Games!';

export const gameDescriptionText = '\nFind the greatest common divisor of given numbers.';

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

export const getQuestionAndSystemAnswer = () => {
  const firstNumber = gameEngine.generateRandomNumber(0, constants.MAXNUMBER_FOR_RANDOMVALUES);
  const secondNumber = gameEngine.generateRandomNumber(0, constants.MAXNUMBER_FOR_RANDOMVALUES);
  const gcd = getGCD(firstNumber, secondNumber);
  const outputQuestion = (`${firstNumber} ${secondNumber}`);
  console.log(outputQuestion);
  const answer = gcd;
  return answer;
};

export const gameRunner = () => {
  gameEngine.implementGameLogic(gameDescriptionText, getQuestionAndSystemAnswer,
    constants.NUMBER_OF_QUESTIONS);
};
