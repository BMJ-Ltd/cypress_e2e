import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../page_objects/homepagePO.js"; 

const homepage = new HomePage();

Given('the user is on bmj homepage', () => {
    cy.visit(Cypress.config().baseUrl);  
}) 

Then(/^the user should see title "([^"]*)"$/, (title) => {
    homepage.validateTitle(title);
})