const questions = require('./questions');
// const generateLogo;
const inquirer = require('inquirer');
const fs = require('fs');

function askQuestions(){
    inquirer.prompt(questions).then(function(answers){
        console.log(answers);
    })
};

(() =>{
    askQuestions();
})()