describe("Signup Test", () => {
    it("Test valid signin", () => {
        cy.visit("https://agents.ohcguide.com//");
       //cy.get("#email").type("gaurav.bastola@globalyhub.com");
       // cy.get("#password").type("Login555");
        //cy.get('.checkbox__CheckboxLabel-sc-1lx9a1q-2').click();
        //cy.get('.button__RegularButtonStyle-sc-12v0ze9-0').click();
        cy.get('.iAqnXL').click();
        cy.get('.cqyJjb').click();
        cy.get('.react-datepicker__day--010').click();
        cy.get('.css-b38e8b').first().click();
        cy.contains('2').click();
        //cy.get('.css-b38e8b').second().click();
        cy.get('.kAgbZX').click();
        //cy.get('p > button').click();
       // cy.get('p > button').click();
        //cy.get('.comparePolicies__GridPolicyTable-aqj1iq-12 > :nth-child(2) > button').click();
        //cy.get('.UCYtm').click();



        
 })
})
