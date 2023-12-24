#!/usr/bin/env node
import readLineSync from 'readline-sync';
import getRandomNumber from '../utilities.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 0;
const maxNumber = 100;
const numberOfAttempts = 3;

export default () => {
    console.log(description);
    for (let i = 1; i <= numberOfAttempts; i += 1) {
        const number = getRandomNumber(minNumber, maxNumber);
        console.log(`Question: ${number}`);
        const answer = readLineSync.question('Your answer: ');
        if (answer !== 'yes' && answer !== 'no') {
            console.log('you have to answer yes or no.');
            return;
        } else if (number % 2 === 0 && answer === 'yes') {
            console.log('Correct!');
        } 
        if (number % 2 === 0 && answer === 'no') {
            console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
            Let's try again!`);
            return;
        }
        if (number % 2 !== 0 && answer === 'no') {
            console.log('Correct!');
        } 
        if (number % 2 !== 0 && answer === 'yes') {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
            Let's try again!`);
            return;
        }
    };
    console.log('Congratulations!');
};