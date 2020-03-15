# standwoodCypress

## How to Install Project? 
1. Install VSCode for Cypress IDE
2. Install Cypress

### Install the plugin by running
$ npm install --save-dev cypress-cucumber-preprocessor
$ npm install cypress --save-dev
  
## Cypress Configuration
Add to your plugins:
cypress/plugins/index.js
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
Add support for feature files to your Cypress configuration
cypress.json
{
  "testFiles": "**/*.feature"
}

### Configuration
Please make use of cosmiconfig to create a configuration for the plugin, for example, by adding this section to your package.json:
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}

## Build a Cypress project test
### Starting a Cypress project
Steps are mentioned with screen shots in guideline document attached.

