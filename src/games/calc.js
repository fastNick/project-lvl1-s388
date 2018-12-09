import * as gameEngine from '..';

const description = ' \nWhat is the result of the expression?';

const maxnumberForRandomvalue = 20;

const operationsArray = ['+', '-', '*'];

const generateRandomOperator = operatorsList => gameEngine.getRandomElementInArray(operatorsList);

export const getQuestionAnswerPair = () => {
  const firstOperand = gameEngine.generateRandomNumber(0, maxnumberForRandomvalue);
  const secondOperand = gameEngine.generateRandomNumber(0, maxnumberForRandomvalue);
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
