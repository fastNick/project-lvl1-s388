import * as constants from '../constants';

export const outputWelcome = '\nWelcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".';

export const getQuestion = () => {
  const outputQuestion = Math.floor(Math.random() * constants.MAXNUMBER_FOR_RANDOMVALUES);
  console.log(outputQuestion);
  return outputQuestion;
};

const isNumberEven = number => number % 2 === 0;

export const getCorrectAnswer = question => constants.DICTIONARY_ANSWERS[isNumberEven(question)];

export const checkAnswer = (answerText, correctAnswer) => answerText === correctAnswer;

export const outputForWrongAnswer = (userAnswer, correctAnswer, userName) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n`
+ `Let's try again, ${userName}!`;
