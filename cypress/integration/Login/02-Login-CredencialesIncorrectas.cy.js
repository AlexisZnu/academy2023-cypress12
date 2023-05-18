Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

describe("Inicio de sesión en la página web de practice.automationtesting", () => {
    it(" Iniciar sesión con un usuario y contraseña incorrectos", () => {

        cy.visit("https://practice.automationtesting.in/my-account/");

        var username = "asfasfasdasdasdasfasfasfas@gmail.com";
        var pass = "asfasfasdasdasdasfasfasfas";

        cy.get('#username').type(username);
        cy.get('#password').type(pass+"{enter}");
                
        cy.get('.woocommerce-error > li').should('contain.text', 'A user could not be found with this email address.');
        

    });
});
