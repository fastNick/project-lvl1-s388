import * as gameEngine from '..';

const description = '\nWhat number is missing in the progression?';

const arithmeticProgressionArrayLength = 10;

const maxnumberForRandomvalue = 20;

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

export const getQuestionAnswerPair = () => {
  const firstNumber = gameEngine.generateRandomNumber(0, maxnumberForRandomvalue);
  const commonDifference = gameEngine.generateRandomNumber(0, maxnumberForRandomvalue);
  const array = generateArithmeticProgression(firstNumber, commonDifference,
    arithmeticProgressionArrayLength);
  const randomIndex = gameEngine.generateRandomNumber(0, array.length);
  return { question: outputArrayAsString(array, randomIndex), answer: array[randomIndex] };
};

export const gameRunner = () => {
  gameEngine.implementGameLogic(description, getQuestionAnswerPair);
};
