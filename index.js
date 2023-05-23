const questions = require('./lib/questions');
const generateLogo = require('./lib/generateLogo');
const inquirer = require('inquirer');
const fs = require('fs');
const Shapes = require('./lib/shapes');


function askQuestions(){
    inquirer.prompt(questions).then(function(answers){
        console.log(answers);
    })
};

(() =>{
    askQuestions();
    
})()