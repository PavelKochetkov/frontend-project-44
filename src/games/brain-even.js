#!/usr/bin/env node
import readLineSync from 'readline-sync';
import getRandomNumber from '../utilities.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 0;
const maxNumber = 100;
const numberOfAttempts = 3;
const isEvenOrOdd = (number) => {
    return number % 2 === 0;
}

export default () => {
    console.log(description);
    for (let i = 1; i <= numberOfAttempts; i += 1) {
        const number = getRandomNumber(minNumber, maxNumber);
        console.log(`Question: ${number}`);
        const answerUser = readLineSync.question('Your answer: ');
        const correctAnswer = isEvenOrOdd(number) ? 'yes' : 'no';
        if (answerUser === correctAnswer) {
            console.log('Correct!');
        } 
        if (answerUser !== correctAnswer) {
            console.log(`${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer}.
            Let's try again!`);
            return;
        }
    };
    console.log('Congratulations!');
};