// Three packages are initialized. One is inherent to node.js (fs), one is just refering to a local file (generateMarkdown) and one is an external package (inquierer)

const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// This is an array of objects following inquirer's notation documentation
const questions = [
    {
        type: 'input',
        name: 'title',
        message:'Welcome to the PROFESSIONAL README.md GENERATOR, What is the title of your project?',
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
        choices: ['MIT', 'Mozilla', 'GNU GPL v3', 'ISC', 'no license (not recommended)']
    },
];

// This function uses file system (fs)'s writeFile method, using the fileName argument and the data I recieved from the user (in the form of an object), 
// This is immediately passed along to the generateMarkdown function 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Success!')
    );

}

// Once the app runs, i use inquirer package to ask the user questions about the app using the array of objects called 'questions'
// then (when the promise gets resolved), I invoke writeToFile and pass along the data as an argument and the filename as a string.

function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile('YourREADME.md', data)
        })
}

// Function call to initialize app
init();
