# cypress_e2e

After cloning the project, run the command on terminal 'npm install'

### Running BDD
To run the testcases for particular feature tags can be used (eg homepage)  `npx cypress run -e TAGS='@homepage' in terminal
To run all the feature files `npx cypress run`
Both the above commands will trigger script run in a headless browser. Cypress will capture a video of the execution and will save under Cypress>video folder in local drive

To open Cypress GUI use ".\node_modules\.bin\cypress open"

### Adding/updating Configurations for cypress framework
`cypress.json` file is placed at root location
Under cypress/integration, feature files are stored
In package.json>cypress-cucumber-preprocessor property, file step defination path is defined