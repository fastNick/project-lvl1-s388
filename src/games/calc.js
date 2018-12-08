import * as constants from '../constants';

export const outputWelcome = '\nWelcome to the Brain Games! \nWhat is the result of the expression?';

let firstOperand;
let secondOperand;
let mathOperation;

const generateRandomNumber = () => Math.floor(Math.random() * constants.MAXNUMBER_FOR_RANDOMVALUES);

const generateRandomOperator = () => constants.MATH_OPERATIONS_ARRAY[Math.floor(Math.random()
    * constants.MATH_OPERATIONS_ARRAY.length)];

export const getQuestion = () => {
  firstOperand = generateRandomNumber();
  secondOperand = generateRandomNumber();
  mathOperation = generateRandomOperator();
  console.log(`Question: ${firstOperand} ${mathOperation} ${secondOperand}`);
};

export const getCorrectAnswer = () => {
  switch (mathOperation) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    default:
      return firstOperand * secondOperand;
  }
};

export const checkAnswer = (answerText, correctAnswer) => Number.parseInt(answerText, 0)
=== correctAnswer;

export const outputForWrongAnswer = (userAnswer, correctAnswer, userName) => `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. \n`
+ `Let's try again, ${userName}!`;
