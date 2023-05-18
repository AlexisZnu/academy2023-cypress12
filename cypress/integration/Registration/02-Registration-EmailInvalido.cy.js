Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

describe('Registro y redirección de cuenta', () => {
    it('El usuario desea registrarse en el sitio web de práctica de automatización de pruebas', () => {
      
      var username = "asddasdasdasd@12111321321 ";
      var pass = "sdfsdfsdfasdasdsdf1233";

      cy.visit('https://practice.automationtesting.in/');

      // Hacer click en el botón de menú de Mi cuenta
      cy.get('#menu-item-50 > a').click();
  
      // ingresa un email inválida en el campo Email
      cy.get('#reg_email').type(username);
  
      // Ingresar la contraseña válida en el campo de contraseña
      cy.get('#reg_password').type(pass+ "{enter}");
  
      // El sistema muestra un mensaje de advertencia
      cy.get('.woocommerce-error > li').should('contain.text', ' Please provide a valid email address.');
    });
  });