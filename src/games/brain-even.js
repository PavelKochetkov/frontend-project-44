#!/usr/bin/env node
import { getRandomNumber } from '../utilities.js';
import runGameRound from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 0;
const maxNumber = 100;

const isEvenOrOdd = (number) => {
    return number % 2 === 0;
}

const generateGameRound = () => {
    const number = getRandomNumber(minNumber, maxNumber);
    const question = number;
    const correctAnswer = isEvenOrOdd(number) ? 'yes' : 'no';
    
    return [question, correctAnswer];
}

export default () => {
    runGameRound(description, generateGameRound)
};