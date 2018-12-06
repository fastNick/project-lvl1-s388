import readlineSync from 'readline-sync'

export const printCongratulation = () => {
 console.log('Welcome to the Brain Games!');
};

export const askAboutName = () => {
 const name = readlineSync.question('May I have your name?');
 console.log('Hello, ' + name + '!');
}
