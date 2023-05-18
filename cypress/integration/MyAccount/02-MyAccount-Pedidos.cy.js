Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

describe("Inicio de sesión en la página web de practice.automationtesting", () => {
    it("El usuario ve sus pedidos en Mi Cuenta", () => {

        cy.visit("https://practice.automationtesting.in/my-account/");

        var username = "sdaaaaammlerhlklsd@gmail.com";
        var pass = "asdasdasdasdasdasfasflgroekgr123";

        cy.get('#username').type(username);
        cy.get('#password').type(pass+"{enter}");

        cy.get('.woocommerce-MyAccount-navigation-link--orders > a').click();
                
        cy.get('.button').should('contain.text', 'View');
        

    });
});