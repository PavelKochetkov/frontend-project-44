import { getRandomNumber } from '../utilities.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 100;

const getGcd = (number1, number2) => {
  let num1 = number1;
  let num2 = number2;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }

  return num1 + num2;
};

const generateGameRound = () => {
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGcd(number1, number2));

  return [question, correctAnswer];
};

export default () => {
  runGame(description, generateGameRound);
};
