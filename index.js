// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "userName",
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Give a description of your project",
        name: "description",
    },
    {
        type: "input",
        message: "How do you install your project",
        name: "installation",
    },
    {
        type: "input",
        message: "How should folks use your project?",
        name: "usage",
    },
    {
        type: "input",
        message: "What are the best practices for folks contributing to your project?",
        name: "contribution",
    },
    {
        type: "input",
        message: "What are some tests that folks can use to make sure your project runs for them?",
        name: "tests",
    },
    {
        type: "list",
        message: "Which license do you want to use?",
        name: "license",
        choices: ["MIT License", "GNU General Public License v3.0", "No License"],
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data)
    .then(() => console.log(`Success! Open the readme file to look at your work!\nRemember to add a screenshot if applicable.`))
    .catch(err => console.log(err))
};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(
        questions
    )
    .then(response => {
        const readMe = generateMarkdown(response);
        writeToFile("README.md", readMe);
    })
}

// Function call to initialize app
init();
