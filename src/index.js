import readlineSync from 'readline-sync';

const dictionaryAnswers = {};

export const initializeAnswers = () => {
  dictionaryAnswers.true = 'yes';
  dictionaryAnswers.false = 'no';
};

export const printCongratulation = (message) => {
  console.log(message);
};

export const askAboutName = () => readlineSync.question('May I have your name?');

export const printUserCongratulation = (name) => {
  console.log(`Hello, ${name}!`);
};

const successfulGameCongratulation = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const printMessageOnWrongAnswer = (name, answer, number) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${dictionaryAnswers[isNumberEven(number)]}'. \n`
        + `Let's try again, ${name}!`);
};

const printMessageOnRightAnswer = (name) => {
  console.log('Correct!');
};

const generateRandomNumber = maxNumber => Math.floor(Math.random() * maxNumber);

const isNumberEven = number => number % 2 == 0;

const isAnswerCorrect = (number, answerText) => isNumberEven(number) && answerText === 'yes' || !isNumberEven(number) && answerText === 'no';

export const giveTask = (numberOfQuestions, maxNumberForRandomValues, name) => {
  for (let i = 0; i < numberOfQuestions; i++) {
    const randomNumber = generateRandomNumber(maxNumberForRandomValues);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isAnswerCorrect(randomNumber, userAnswer);
    if (!correctAnswer) {
      printMessageOnWrongAnswer(name, userAnswer, randomNumber);
      return;
    }
    printMessageOnRightAnswer(name);
  }
  successfulGameCongratulation(name);
};
