import * as gameEngine from '..';

import { generateRandomNumber } from '../utils';

const description = ' \nWhat is the result of the expression?';

const maxnumberForRandomvalue = 20;

const operationsArray = ['+', '-', '*'];

const generateRandomOperator = array => array[generateRandomNumber(0, array.length)];

const getQuestionAnswerPair = () => {
  const firstOperand = generateRandomNumber(0, maxnumberForRandomvalue);
  const secondOperand = generateRandomNumber(0, maxnumberForRandomvalue);
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
  gameEngine.implementGameLogic(description, getQuestionAnswerPair);
};

export default gameRunner;
