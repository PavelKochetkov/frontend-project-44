import { getRandomNumber } from '../utilities.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 0;
const maxNumber = 100;

const isEven = (number) => number % 2 === 0;

const generateGameRound = () => {
  const number = getRandomNumber(minNumber, maxNumber);
  const question = number;
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  runGame(description, generateGameRound);
};
