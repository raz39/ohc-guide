/// <reference types="cypress" />

describe("Signup Test", () => {
    let randomString = Math.random().toString(36).substring(2);
    const email = "auto_" + randomString + randomString + "@gmail.com";
    const password = "Password1";
    const securityAnswer = "Hello world";

    it("Test valid individual signup", () => {
        cy.visit("https://ohcguide.com/");
        cy.get(".flex-row [type='button']:nth-of-type(2)").click();
        cy.get('#individual').click();
        cy.get("#first-name").type("rajeev");
        cy.get('#last-name').type("lamichhane");
        cy.get('#email').type(email);
        cy.get('#phone').type("422345678");
        cy.get('#autocomplete').type("pokhara");
        cy.get('#state').type("123456789");
        cy.get('#city').type("pokhara");
        cy.get('#country').select("Angola");
        cy.get('#zipcode').type("4223456789");
        cy.get('#city').type("pokhara");
        cy.get('#bank-name').type("pokhara");
        cy.get('#account-name').type("pokhara");
        cy.get('#account-number').type("123456789");
        cy.get('#branch-code').type("pokhara");
        cy.get('#swift-code').type("pokhara");
        //cy.get('#agent-submit').click();
    })
        it("Test valid business signup", () => {
        cy.visit("https://ohcguide.com/");
        cy.get(".flex-row [type='button']:nth-of-type(2)").click();
        cy.get("#business-name").type("rajeev");
        cy.get("#first-name").type("rajeev");
        cy.get('#last-name').type("lamichhane");
        cy.get('#business-registration-number').type(123456789);
        cy.get('#email').type(email);
        cy.get('#phone').type("422345678");
        cy.get('#autocomplete').type("pokhara");
        cy.get('#state').type("123456789");
        cy.get('#city').type("pokhara");
        cy.get('#country').select("Angola");
        cy.get('#zipcode').type("4223456789");
        cy.get('#city').type("pokhara");
        cy.get('#bank-name').type("pokhara");
        cy.get('#account-name').type("pokhara");
        cy.get('#account-number').type("123456789");
        cy.get('#branch-code').type("pokhara");
        cy.get('#swift-code').type("pokhara");
        //cy.get('#agent-submit').click();
        })
         it("Test valid signin", () => {
        cy.visit("https://agents.ohcguide.com//");
        //cy.visit("https://ohcguide.com//");
        //cy.get(".flex-row [type='button']:nth-of-type(1)").click();
        //cy.get('a[href="/forgot-password"]').click()
        //cy.wait(1000)
        //cy.get('#email').type(email);
        //cy.get('.button__RegularButtonStyle-sc-12v0ze9-0.jPSssv').click();
        cy.get("#email").type("gaurav.bastola@globalyhub.com");
        cy.get("#password").type("Login555");
        cy.get('.checkbox__CheckboxLabel-sc-1lx9a1q-2').click();
        cy.get('.button__RegularButtonStyle-sc-12v0ze9-0').click();

})}) 