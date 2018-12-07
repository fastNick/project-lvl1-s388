import readlineSync from 'readline-sync';

import * as constants from './constants';


const isNumberEven = number => number % 2 === 0;

const printMessageOnWrongAnswerForBrainEven = (name, answer, number) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${constants.DICTIONARY_ANSWERS[isNumberEven(number)]}'. \n`
        + `Let's try again, ${name}!`);
};

const printMessageOnWrongAnswerForBrainCalc = (name, answer, number) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${number}'. \n`
        + `Let's try again, ${name}!`);
};

const generateRandomNumber = () => Math.floor(Math.random() * constants.MAXNUMBER_FOR_RANDOMVALUES);

const generateRandomOperator = mathOperations => mathOperations[Math.floor(Math.random() * mathOperations.length)];

const generateRandomOperation = () => {
  const firstOperand = generateRandomNumber(constants.MAXNUMBER_FOR_RANDOMVALUES);
  const secondOperand = generateRandomNumber(constants.MAXNUMBER_FOR_RANDOMVALUES);
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

const isAnswerCorrectForBrainEven = (number, answerText) => answerText === constants.DICTIONARY_ANSWERS[isNumberEven(number)];

const isAnswerCorrectForBrainCalc = (number, answerText) => Number.parseInt(answerText, 0) === number;

const printWelcomeAndGetName = (additionalPhrase) => {
  console.log(`Welcome to the Brain Games! ${additionalPhrase}`);

  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);

  return name;
};

export const brainGamesTask = () => {
  printWelcomeAndGetName('');
};


export const brainEvenTask = () => {
  const name = printWelcomeAndGetName('\nAnswer "yes" if number even otherwise answer "no". ');
  for (let i = 0; i < constants.NUMBER_OF_QUESTIONS; i += 1) {
    const outputQuestion = generateRandomNumber();
    console.log(`Question: ${outputQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isAnswerCorrectForBrainEven(outputQuestion, userAnswer);
    if (!correctAnswer) {
      printMessageOnWrongAnswerForBrainEven(name, userAnswer, outputQuestion);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export const brainCalcTask = () => {
  const name = printWelcomeAndGetName('\nWhat is the result of the expression?');
  for (let i = 0; i < constants.NUMBER_OF_QUESTIONS; i += 1) {
    const outputQuestion = generateRandomOperation();
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isAnswerCorrectForBrainCalc(outputQuestion, userAnswer);
    if (!correctAnswer) {
      printMessageOnWrongAnswerForBrainCalc(name, userAnswer, outputQuestion);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
