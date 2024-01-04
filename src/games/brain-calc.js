import runGame from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utilities.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const minNumber = 0;
const maxNumber = 50;

const calculateValue = (number1, number2, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      throw new Error(`missing calculation for operator: '${operator}'`);
  }

  return result;
};

const generateGameRound = () => {
  const index = getRandomIndex(operators);
  const operator = operators[index];
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  const question = `${number1} ${operators[index]} ${number2}`;
  const correctAnswer = String(calculateValue(number1, number2, operator));

  return [question, correctAnswer];
};

export default () => {
  runGame(description, generateGameRound);
};
