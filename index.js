// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message:'Welcome to the README.md generator 2000, What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message:'Please enter the description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message:'Please enter the installation instructions for your project',
    },
    {
        type: 'input',
        name: 'usage',
        message:'Please enter the usage instructions for your project',
    },
    {
        type: 'input',
        name: 'contribution',
        message:'Please enter the contribution guidelines for your project',
    },
    {
        type: 'input',
        name: 'tests',
        message:'Please enter the test instructions',
    },
    {
        type: 'input',
        name: 'github',
        message:'Please enter your Github username',
    },
    {
        type: 'input',
        name: 'email',
        message:'Please enter your email address',
    },
    {
        type: 'list',
        name: 'license',
        message:'Please choose a lisence for the project',
        choices: ['MIT', 'Mozilla', 'GNU GPL v3', 'ISC']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
