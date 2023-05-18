Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

describe("Inicio de sesión en la página web de practice.automationtesting", () => {
    it(" Iniciar sesión con un usuario y contraseña válidos", () => {

        cy.visit("https://practice.automationtesting.in/my-account/");

        var username = "academyCypress_usuarioNormal@crowdaronline.com";
        var pass = "Crowdar.2023!";

        cy.get('#username').type(username);
        cy.get('#password').type(pass+"{enter}");
                
        cy.get('strong').should('contain.text', 'academyCypress_');
        

    });
});
