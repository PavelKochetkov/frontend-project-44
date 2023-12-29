#!/usr/bin/env node
import runGameRound from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utilities.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const minNumber = 0;
const maxNumber = 50;

const generateGameRound = () => {
    const index = getRandomIndex(operators);
    const numberOne = getRandomNumber(minNumber, maxNumber);
    const numberTwo = getRandomNumber(minNumber, maxNumber);
    const question = `${numberOne}${operators[index]}${numberTwo}`;
    let correctAnswer = 0;
    switch (operators[index]) {
        case '+':
            correctAnswer = (numberOne + numberTwo).toString();
            break;
        case '-':
            correctAnswer = (numberOne - numberTwo).toString();
            break;
        case '*':
            correctAnswer = (numberOne * numberTwo).toString();
            break;
    }

    return [question, correctAnswer];
};

export default () => {
    runGameRound(description, generateGameRound);
};