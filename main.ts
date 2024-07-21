#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer Will generate a random number - Done.

// 2) user input for guessing number - Done

// 3) Computer user input with computer generated number and show result - Done

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    },
]);

if(answers.userGuessedNumber === randomNumber ) {
    console.log("Congtratulations! you guessed right number.");
}else{
    console.log("You guessed wrong number");
}