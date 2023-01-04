

describe("Signup Test", () => {
 let randomString = Math.random().toString(36).substring(2);
    const email = "rajeev.lamichhan@globalyhub.com"    
    it("Test valid signin", () => {
        cy.visit("https://agents.ohcguide.com//");
        cy.get("#email").type("gaurav.bastola@globalyhub.com");
        cy.get("#password").type("Login555");
        cy.get('.checkbox__CheckboxLabel-sc-1lx9a1q-2').click();
        cy.get('.button__RegularButtonStyle-sc-12v0ze9-0').click();
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
        cy.get('.jxeeaz').click();
        cy.get('.react-datepicker__day--002').first().click();
        cy.get('.UCYtM').click();
        cy.get('input[name="address.street"]').type("POKHARA");
        cy.get('input[name="address.city').type("pokhara");
        cy.get('input[name="address.state').type("Angola");
        cy.get('input[name="address.zipcode').type("4223456789");
        cy.get('.UCYtM').click()
        cy.get('input[name="contact.email').type(email);
        cy.get('input[name="contact.emailConfirm').type(email);
        cy.get('.form-control').type('423627227');
        cy.get('.UCYtM').click();
        cy.get('input[name="visaDetails.course').type('NCIT');
        cy.get('input[name="visaDetails.passportNumber').type('1234567');
        cy.get('.UCYtM').click();
        cy.get('.iyFZgP').first().click();
        cy.get('.iyFZgP').last().click();
        cy.get('.UCYtM').click();
        cy.get('.fvchgu').click();
        cy.contains('Sign Out').click(); 
 })
})