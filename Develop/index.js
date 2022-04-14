// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require ('./utils/generateMarkdown');

const docData = {
    title: 'README.md Generator'
    description: 'This README.md Generator helps users easily create a professional README.md file for projects by answering a series of questions.',
    badge: 'Badges are unavailable at this time.',
    installation: 'To access the README.md Generator, a user must clone the README.md-generator repository to their local machine and use Node to run index.js ("node index.js")',
    usage: 'The README.md Generator will prompt the user for essential details about their application, using that data it will generate a professional README.md file that the user can acess and alter as needed. ',
    license: 'Licenses are unavailable at this time.',
    contributions: 'There are no contributors at this time.',
    testing: 'All testing is done on local machine',
    repo: 'https://github.com/KaylanProphet/README-generator',
    github: 'https://github.com/KaylanProphet',
    contact: 'kaylanprophet@gmail.com'
};   

// TODO: Create an array of questions for user input
const questions = [

    //Collect project title
    //console.log('Please input all fields as they are ALL required)
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title for this project');
                return false;
            }
        }
    },

    //Collect description of project
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of the project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log ('Please provide a description to continue');
                return false;
            }
        }
    },

    //Callect badge information
    {
        type: 'input',
        name: 'badge',
        message: 'Please provide the badge for this project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log ('Please provide a description to continue');
                return false;
            }
        }
    },

    //TODO make sure to include table of contents in markdown

    //Collect installation information
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process for this project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log ('Please provide the installation process for this project');
                return false;
            }
        }
    },




];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
