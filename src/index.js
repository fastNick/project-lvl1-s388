import readlineSync from 'readline-sync'

let dictionaryAnswers = {};

export const initializeAnswers = () => {
    dictionaryAnswers[true] = "yes";
    dictionaryAnswers[false] = "no";
}

export const printCongratulation = () => {
    console.log('Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".');
};

export const askAboutName = () => {
    return readlineSync.question('May I have your name?'); 
}

export const printUserCongratulation = (name) => { 
    console.log('Hello, ' + name + '!');
}

const successfulGameCongratulation = (name) => {
    console.log("Congratulations, " + name + "!");
}

const printMessageOnWrongAnswer = (name, answer, number) => {

    console.log("'" + answer + "' is wrong answer ;(. Correct answer was '" + dictionaryAnswers[isNumberEven(number)] + "'. \n"+
        "Let's try again, " + name + "!");
}

const printMessageOnRightAnswer = (name) => {
    console.log("Correct!");
}

const generateRandomNumber = (maxNumber) => {
    return Math.floor(Math.random() * maxNumber);
}

const isNumberEven = (number) => {
    return number % 2 == 0;
}

const isAnswerCorrect = (number, answerText) => {
    return isNumberEven(number) && answerText === "yes" || !isNumberEven(number) && answerText === "no";
} 

export const giveTask = (numberOfQuestions, maxNumberForRandomValues, name) => {
    for(var i = 0; i<numberOfQuestions; i++){
        let randomNumber = generateRandomNumber(maxNumberForRandomValues);
        console.log("Question: " + randomNumber);
        var userAnswer = readlineSync.question('Your answer: '); 
        let correctAnswer = isAnswerCorrect(randomNumber, userAnswer);
        if(!correctAnswer){
            printMessageOnWrongAnswer(name, userAnswer, randomNumber);
            return;
        }
        printMessageOnRightAnswer(name);
    }
    successfulGameCongratulation(name);
}