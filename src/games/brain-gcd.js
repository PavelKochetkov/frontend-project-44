#!/usr/bin/env node
/* eslint-disable no-param-reassign */
import { getRandomNumber } from '../utilities.js';
import runGameRound from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 100;

const getRemainderOfDivision = (num1, num2) => {
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
  const numberOne = getRandomNumber(minNumber, maxNumber);
  const numberTwo = getRandomNumber(minNumber, maxNumber);
  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = getRemainderOfDivision(numberOne, numberTwo).toString();

  return [question, correctAnswer];
};

export default () => {
  runGameRound(description, generateGameRound);
};
