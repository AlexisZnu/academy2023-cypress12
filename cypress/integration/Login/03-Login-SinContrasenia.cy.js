Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

describe("Inicio de sesión en la página web de practice.automationtesting", () => {
    it("Iniciar sesión con nombre de usuario correcto y contraseña vacía", () => {

        cy.visit("https://practice.automationtesting.in/my-account/");

        var pass = "asfasfasdasdasdasfasfasfas";

        cy.get('#password').type(pass+"{enter}");
                
        cy.get('.woocommerce-error > li').should('contain.text','Error: Username is required.');
        

    });
});
