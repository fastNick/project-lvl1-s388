import * as constants from '../constants';

import * as gameEngine from '..';

export const gameDescriptionText = ' \nWhat is the result of the expression?';

const generateRandomOperator = operatorsList => gameEngine.getRandomElementInArray(operatorsList);

export const getQuestionAndSystemAnswer = () => {
  const firstOperand = gameEngine.generateRandomNumber(0, constants.MAXNUMBER_FOR_RANDOMVALUES);
  const secondOperand = gameEngine.generateRandomNumber(0, constants.MAXNUMBER_FOR_RANDOMVALUES);
  const mathOperation = generateRandomOperator(constants.MATH_OPERATIONS_ARRAY);
  console.log(`Question: ${firstOperand} ${mathOperation} ${secondOperand}`);

  switch (mathOperation) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    default:
      return firstOperand * secondOperand;
  }
};

export const gameRunner = () => {
  gameEngine.implementGameLogic(gameDescriptionText, getQuestionAndSystemAnswer,
    constants.NUMBER_OF_QUESTIONS);
};
