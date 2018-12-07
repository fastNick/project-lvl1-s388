import readlineSync from 'readline-sync';

const dictionaryAnswers = { true: 'yes', false: 'no' };

const numberOfQuestions = 3;
const maxNumberForRandomValues = 20;

const isNumberEven = number => number % 2 === 0;

const printMessageOnWrongAnswer = (name, answer, number) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${dictionaryAnswers[isNumberEven(number)]}'. \n`
        + `Let's try again, ${name}!`);
};

const generateRandomNumber = maxNumber => Math.floor(Math.random() * maxNumber);

const isAnswerCorrect = (number, answerText) => answerText === dictionaryAnswers[isNumberEven(number)];

export const brainGamesTask = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
};


export const brainEvenTask = () => {
  console.log('Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".');

  const name = readlineSync.question('May I have your name?');

  console.log(`Hello, ${name}!`);

  for (let i = 0; i < numberOfQuestions; i++) {
    const randomNumber = generateRandomNumber(maxNumberForRandomValues);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isAnswerCorrect(randomNumber, userAnswer);
    if (!correctAnswer) {
      printMessageOnWrongAnswer(name, userAnswer, randomNumber);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
