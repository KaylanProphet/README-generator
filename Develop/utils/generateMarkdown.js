// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//icon
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //copy and paste skeletion into back tics
  return `
  # ${data.title}
  ## Table of Contents
  [Description](#description)  
  [Usage](#usage)  
  [Installation](#installation)  
  [Constributions](#Constributions)  
  [Testing](#Testing)  
  [Repository](#Repository)  
  [GitHub](#GitHub)  
  [Contact](#Contact)    
  ## Description
  ${data.description}
  ## Usage
  ${data.usage}
  ## Installation
  ${data.installation}
  ## Contributions
  ${data.contributions}
  ## Testing
  ${data.testing}
  ## Repository
  ${data.repository}
  ## GitHub
  ${data.github}
  ## Contact
  ${data.contact}
`;
}

module.exports = generateMarkdown;
