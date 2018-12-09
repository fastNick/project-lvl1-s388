import { implementGameLogic } from '..';

import { generateRandomNumber } from '../utils';

const description = ' \nWhat is the result of the expression?';

const upperLimit = 20;
const lowerLimit = 0;

const operationsArray = ['+', '-', '*'];

const generateRandomOperator = array => array[generateRandomNumber(0, array.length)];

const getQuestionAnswerPair = () => {
  const firstOperand = generateRandomNumber(lowerLimit, upperLimit);
  const secondOperand = generateRandomNumber(lowerLimit, upperLimit);
  const mathOperation = generateRandomOperator(operationsArray);
  let operationResult;

  switch (mathOperation) {
    case '+':
      operationResult = firstOperand + secondOperand;
      break;
    case '-':
      operationResult = firstOperand - secondOperand;
      break;
    default:
      operationResult = firstOperand * secondOperand;
  }
  return { question: `Question: ${firstOperand} ${mathOperation} ${secondOperand}`, answer: operationResult };
};

export const gameRunner = () => {
  implementGameLogic(description, getQuestionAnswerPair);
};

export default gameRunner;
