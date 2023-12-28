#!/usr/bin/env node
import readLineSync from 'readline-sync';

const numberOfAttempts = 3;

const runGameRound = (description, generateGameRound) => {
    console.log('Welcome to the Brain Games!');
    const nameUser = readLineSync.question('May I have your name? ');
    console.log(`Hello, ${nameUser}!`);
    console.log(description);
    
    for (let i = 1; i <= numberOfAttempts; i += 1) {
        const [question, correctAnswer] = generateGameRound();
        console.log(`Question: ${question}`);
        const answerUser = readLineSync.question('Your answer: ');
        if (answerUser === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer}. 
            Let's try again, ${nameUser}!`);

            return;
        }
    }
    console.log(`Congratulations, ${nameUser}!`);
};

export default runGameRound;