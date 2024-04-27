// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "GNU General Public License v3.0") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT License") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license === "GNU General Public License v3.0") {
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT License") {
    return "";
  } else if (license === "GNU General Public License v3.0") {
    return ;
  } else {
    return " ";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

## How to Contribute

${data.contribution}

## Tests

${data.tests}

## Questions

Please refer to my [GitHub](https://github.com/${data.username}) if you have further questions.
Otherwise, you can reach me at ${data.email}.
`;
}

module.exports = generateMarkdown;
