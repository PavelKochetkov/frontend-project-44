#!/usr/bin/env node
import { getRandomNumber } from "../utilities.js";
import runGameRound from "../index.js";

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 1;
const maxNumber = 100;

const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        };
    }
    
    return true;
};

const generateGameRound = () => {
    const number = getRandomNumber(minNumber, maxNumber);
    const question = `${number}`;
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    return [question, correctAnswer];
};

export default () => {
    runGameRound(description, generateGameRound);
};