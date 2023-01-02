/// <reference types="cypress" />

describe("Signup Test", () => {
    let randomString = Math.random().toString(36).substring(2);
    const email = "auto_" + randomString + randomString + "@gmail.com";
    const password = "Password1";
    const securityAnswer = "Hello world";

    it("Test valid signup", () => {
        cy.visit("https://ohcguide.com/");
        cy.get(".flex-row [type='button']:nth-of-type(2)").click();
        cy.get('#individual').click();
        cy.get("#first-name").type("rajeev");
        cy.get('#last-name').type("lamichhane");
        cy.get('#email').type(email);
        cy.get('#phone').type(123456789);
        cy.get('#').contains("Not yet a customer?").click({force: true});
      
})})