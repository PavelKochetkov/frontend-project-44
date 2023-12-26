#!/usr/bin/env node
import readLineSync from 'readline-sync';

const greetingsUser = () => {
    console.log('Welcome to the Brain Games!');
    const nameUser = readLineSync.question('May I have your name? ');
    console.log(`Hello, ${nameUser}!`);

    return nameUser;
};

export default greetingsUser;