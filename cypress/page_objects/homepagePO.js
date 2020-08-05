class homepagePO {
    validateTitle(title) {
        cy.title().should('eq', title);
    }
}
export default homepagePO;