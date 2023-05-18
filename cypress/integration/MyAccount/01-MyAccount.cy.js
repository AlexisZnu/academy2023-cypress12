Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

describe("Inicio de sesión en la página web de practice.automationtesting", () => {
    it("Inicio de sesión exitoso y acceso al Dashboard", () => {

        cy.visit("https://practice.automationtesting.in/my-account/");

        var username = "sdaaaaammlerhlklsd@gmail.com";
        var pass = "asdasdasdasdasdasfasflgroekgr123";

        cy.get('#username').type(username);
        cy.get('#password').type(pass+"{enter}");
                
        cy.get('strong').should('contain.text', 'sdaaaaammlerhlklsd');
        

    });
});