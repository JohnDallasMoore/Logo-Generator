const questions = require('./lib/questions');
const generateLogo = require('./lib/generateLogo');
const inquirer = require('inquirer');
const fs = require('fs');

function askQuestions(){
    inquirer.prompt(questions).then(function(answers){
        console.log(answers);
        fs.writeFile('logo.svg', generateLogo(answers), 'utf-8', function(err){
            console.error(err);
        });
    })
};

(() =>{
    askQuestions();
})()