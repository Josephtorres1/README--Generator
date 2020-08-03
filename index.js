const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    message: "What is your Github username?",
    name: "username",
    type: "input",
  },
  {
    message: "What is your email address?",
    name: "email",
    type: "input",
  },
  {
    message: "What would you like to title your project?",
    name: "title",
    type: "input",
  },
  {
    message: "Please provide a brief description",
    name: "description",
    type: "input",
  },
  {
    message: "Installation instructions",
    name: "installation",
    type: "input",
  },
  {
    message: "What does the user need to do to run this program?",
    name: "usage",
    type: "input",
  },
  {
    message: "Contribution Guidelines",
    name: "contributing",
    type: "input",
  },
  {
    message: "How does the user test this program?",
    name: "test",
    type: "input",
  },
  {
    message: "What type of license would you like for this project?",
    name: "license",
    type: "list",
    choices: ["MIT", "GP 3.0", "BSD 3", "None"],
  },
  {
    message: "Questions",
    name: "questions",
    type: "input",
  },
];
inquirer
  .prompt(questions)
  // function to write README file
  .then(function (data) {
    fs.writeFile("userREADME.md", generateMarkdown(data), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("README was succesfully created!");
    });
  });

function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
