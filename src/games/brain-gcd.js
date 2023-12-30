#!/usr/bin/env node
import { getRandomNumber } from "../utilities.js";
import runGameRound from "../index.js";

const description = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 100;

const getRemainderOfDivision = (num_1, num_2) => {
    while (num_1 != 0 && num_2 != 0) {
        if (num_1 > num_2) {
            num_1 = num_1 % num_2;
        } else {
            num_2 = num_2 % num_1;
        }
    }

    return num_1 + num_2;
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
