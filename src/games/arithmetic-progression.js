import { implementGameLogic } from '..';

import { generateRandomNumber } from '../utils';

const description = '\nWhat number is missing in the progression?';

const sequenceLength = 10;

const lowerLimit = -20;
const upperLimit = 20;


const generateArithmeticProgression = (firstNumber, commonDifference) => {
  const numbersArray = [];
  let elementOfArray = firstNumber;
  for (let i = 0; i < sequenceLength; i += 1) {
    numbersArray.push(elementOfArray);
    elementOfArray += commonDifference;
  }
  return numbersArray;
};

const getQuestion = (numbersArray, indexInArray) => {
  let stringSequence = '';
  for (let i = 0; i < numbersArray.length; i += 1) {
    stringSequence += i === indexInArray ? '.. ' : ` ${numbersArray[i]} `;
  }
  return stringSequence;
};

const getQuestionAnswerPair = () => {
  const firstNumber = generateRandomNumber(lowerLimit, upperLimit);
  const commonDifference = generateRandomNumber(lowerLimit, upperLimit);
  const array = generateArithmeticProgression(firstNumber, commonDifference);
  const randomIndex = generateRandomNumber(0, array.length);
  return { question: getQuestion(array, randomIndex), answer: array[randomIndex] };
};

export const gameRunner = () => {
  implementGameLogic(description, getQuestionAnswerPair);
};

export default gameRunner;
