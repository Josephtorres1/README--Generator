// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}\n

  # Description
  ${data.description}\n

  # Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)

  # Installation\n
  ${data.installation}\n

  # Usage\n
  ${data.usage}\n

  #License\n
  ${data.license}\n
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n

  # Contributing\n
  ${data.contributing}\n

  # Test
  ${data.test}\n

  # Questions\n
  ${data.questions}\n


`;
}

module.exports = generateMarkdown;
