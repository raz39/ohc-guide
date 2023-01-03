

describe("Signup Test", () => {
    it("Test valid signin", () => {
        cy.visit("https://agents.ohcguide.com//");
        // cy.get("#email").type("gaurav.bastola@globalyhub.com");
        // cy.get("#password").type("Login555");
        // cy.get('.checkbox__CheckboxLabel-sc-1lx9a1q-2').click();
        // cy.get('.button__RegularButtonStyle-sc-12v0ze9-0').click();
        cy.get('.iAqnXL').click();
        cy.get('.cqyJjb').click();
        cy.get('.react-datepicker__day--008').click();
        cy.get('.css-b38e8b').first().click();
        cy.contains('3').click();
        cy.get('.kAgbZX').click();
        cy.get('p > button').click();
        cy.get('p > button').click();
        cy.get(':nth-child(1) > .slideInner___2mfX9 > .searchPolicyCard__Wrapper-iauqte-0 > .searchPolicyCard__BuyNowContainer-iauqte-6 > .button__RegularButtonStyle-sc-12v0ze9-0').click();
        cy.wait(1000)
        cy.get('.css-ews7tn').click();
        cy.contains('Miss').click();
        cy.get('input[name="personalData.firstName"]').type("rita");
        cy.get('input[name="personalData.lastName"]').type("lamichhane");
        //cy.get('.hpDagD').Second().click();
        cy.get('.jxeeaz').click();
        cy.get('.react-datepicker__day--002').first().click();
        cy.wait(3000)
        //cy.get('.UCYtm').click();
        cy.get('.jLyBuV').click();
        cy.get('.fqphhe').click(); 
        cy.get()  
 })
})