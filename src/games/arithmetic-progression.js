import * as gameEngine from '..';

import * as constants from '../constants';

export const outputWelcomeText = '\nWelcome to the Brain Games!';

export const gameDescriptionText = '\nWhat number is missing in the progression?';

export const arithmeticProgressionArrayLength = 10;

const generateArithmeticProgression = (firstNumber, commonDifference, lengthOfArray) => {
  const numbersArray = [];
  let elementOfArray = firstNumber;
  for (let i = 0; i < lengthOfArray; i += 1) {
    numbersArray.push(elementOfArray);
    elementOfArray += commonDifference;
  }
  return numbersArray;
};

const outputArrayAsString = (numbersArray, indexInArray) => {
  let stringSequence = '';
  for (let i = 0; i < numbersArray.length; i += 1) {
    stringSequence += i === indexInArray ? '.. ' : ` ${numbersArray[i]} `;
  }
  return stringSequence;
};

export const getQuestionAndSystemAnswer = () => {
  const firstNumber = gameEngine.generateRandomNumber(0, constants.MAXNUMBER_FOR_RANDOMVALUES);
  const commonDifference = gameEngine.generateRandomNumber(0, constants.MAXNUMBER_FOR_RANDOMVALUES);
  const numbersArray = generateArithmeticProgression(firstNumber, commonDifference,
    arithmeticProgressionArrayLength);
  const randomIndexInArray = gameEngine.generateRandomNumber(0, numbersArray.length);
  const outputQuestion = outputArrayAsString(numbersArray, randomIndexInArray);
  console.log(outputQuestion);
  const answer = numbersArray[randomIndexInArray];
  return answer;
};

export const gameRunner = () => {
  gameEngine.implementGameLogic(gameDescriptionText, getQuestionAndSystemAnswer,
    constants.NUMBER_OF_QUESTIONS);
};
