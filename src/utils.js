export const generateRandomNumber = (lowerLimit, upperLimit) => lowerLimit
+ Math.floor(Math.random() * (upperLimit - lowerLimit));

export default generateRandomNumber;
