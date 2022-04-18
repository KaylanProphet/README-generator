// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//icon
function renderLicenseBadge(license) {
  if (license === 'None') return '';
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') return "";
  return `  [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') return '';
  return `## License
  ${license} was used for this project.`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //copy and paste skeletion into back tics
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  [Description](#description) 
  ${renderLicenseLink(data.license)}
  [Usage](#usage)  
  [Installation](#installation)  
  [Constributions](#Constributions)  
  [Testing](#Testing)  
  [Repository](#Repository)  
  [GitHub](#GitHub)  
  [Contact](#Contact)    
  ## Description
  ${data.description}

  ${renderLicenseSection(data.license)}

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
  ## Questions or Comments?
  You can contact the creator at ${data.contact} or ${data.github}
`;
}

module.exports = generateMarkdown;
