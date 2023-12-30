#!/usr/bin/env node
import { getRandomNumber, getRandomIndex } from "../utilities.js";
import runGameRound from "../index.js";

const description = 'What number is missing in the progression?';
const minNumber = 5;
const maxNumber = 9;

const getProgression = (start, step, length) => {
    const progressionArray = [];
    for (let i = 0; i <= length; i += 1) {
        progressionArray.push(start + i * step);
    }

    return progressionArray;
};

const generateGameRound = () => {
    const start = getRandomNumber(minNumber, maxNumber);
    const step = getRandomNumber(minNumber, maxNumber);
    const length = getRandomNumber(minNumber, maxNumber);
    const progression = getProgression(start, step, length);
    const index = getRandomIndex(progression);
    const searchElement = progression[index];
    progression[index] = '..';
    const question = `${progression.join(' ')}`;
    const correctAnswer = searchElement.toString();
    
    return [question, correctAnswer];
};

export default () => {
    runGameRound(description, generateGameRound);
};