
// If there is no license, return an empty string
// I use if statements based on the value of data data.license (which is being passed through the function as an argument)
function renderLicenseBadge(license) {
  if(license === "MIT"){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  else if(license === "Mozilla"){
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  }
  else if(license === "GNU GPL v3"){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  else if(license === "ISC"){
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  }
  else {
    return '';
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT"){
    return 'https://opensource.org/licenses/MIT';
  }
  else if(license === "Mozilla"){
    return 'https://opensource.org/licenses/MPL-2.0';
  }
  else if(license === "GNU GPL v3"){
    return 'https://www.gnu.org/licenses/gpl-3.0';
  }
  else if(license === "ISC"){
    return 'https://opensource.org/licenses/ISC';
  }
  else {
    return '';
  }
}


// If there is no license, return an empty string
// This function returns as template literal with the license and also calls the 'render license link' function.
function renderLicenseSection(license) {
  if(license === 'no license (not recommended)'){
    return '';
  }
return `## License

This project is licensed under the [${license} License](${renderLicenseLink(license)})
`
}


// This function accepts an object as it's argument which is the data the the user was asked.
// the main function which constructs the markdown, it also calls the functions renderLicenseBadge and renderLicenseSection (passing in the user choice of license as an argument) 
// which works because those functions all return strings (which fits perfectly into the template literal)

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ${data.description}

  ## Table of Contents 

  * [Installation Instructions](#installation)
  * [Usage Instructions](#usage)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Test Instructions](#test-instructions)
  * [Questions](#questions)
  * [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribution Guidelines

  ${data.contribution}

  ## Test Instructions

  ${data.tests}

  ## Questions

  If you have any questions you can reach me at:

  * [Github](https://github.com/${data.github})
  * [Email](mailto:${data.email})

  ${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;