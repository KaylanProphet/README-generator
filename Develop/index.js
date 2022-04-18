// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown');

const docData = {
    title: 'README.md Generator',
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
                console.log ('Please provide the installation process for this project to continue');
                return false;
            }
        }
    },

    //Collect usage information
    {
        type: 'input',
        name: 'usage',
        message: 'Please list the steps for this project to be utilized',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log ('Please provide the usage process for this project to continue');
                return false;
            }
        }
    },

    //Collect license information
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license option for this project',
        choices: ['None', 'MIT', 'ISC', 'Apache', 'GPL','BSD',]
    },

    //Collect contribution information
    {
        type: 'input',
        name: 'contributions',
        message: 'Please let users know how they can contribute to the project',
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log('Please enter a way for users to contribute to this project to continue');
            }
        }
    },

    //Collect testing information
    {
        type: 'input',
        name: 'testing',
        message: 'Please let users know testing information for this project',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please enter the testing information for this project to continue');
                return false;
            }
        }
    },

    //Collect repo information
    {
        type: 'input',
        name:'repo',
        message: 'Please enter the repository URL for this project',
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log('Please enter the repository URL for this project to continue');
                return false;
            }
        }
    },

    //Collect github information
    {
        type: 'input',
        name: 'github',
        message: 'Please enter the GitHub URL for this project',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter the GitHub URL for this project to continue');
                return false;
            }
        }
    },

    //Collect email for contact information
    {
        type: 'input',
        name: 'contact',
        message: 'Please provide an email address so that users may contact you about this project',
        validate: contactInput => {
            if (contactInput) {
                return true;
            } else {
                console.log('Please provide an email address to continue');
                return false;
            }
        }
    }
];

//Prompts user
const promptUser = async() => {
    return await inquirer.prompt(questions);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.promises.writeFile(fileName,data)
}

// TODO: Create a function to initialize app
async function init() {
    //wait till the promise from prompt user is resolved, store in var answers
    var answers = await promptUser()
    var markdown = (generateMarkdown(answers))
    writeToFile('generated-readmes/README.md',markdown)
}

// Function call to initialize app
init();
