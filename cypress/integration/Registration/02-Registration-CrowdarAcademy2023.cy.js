Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
});

describe('Registro y redirección de cuenta', () => {
  it('Registro e inicio de sesión exitoso', () => {

    var username = "aaaaaasdffgqwerfliud@gmail.com";
    var pass = "asdasdasdasdasdasfasflgroekgr123";

    cy.visit('https://practice.automationtesting.in/');

    // Hacer click en el botón de menú de Mi cuenta
    cy.get('#menu-item-50 > a').click();

    // Ingresar el email valido en el campo de email
    cy.get('#reg_email').type(username);

    // Ingresar la contraseña válida en el campo de contraseña
    cy.get('#reg_password').type(pass + "{enter}");

    // Verificar que el usuario fue redirigido a la página de inicio de su cuenta
    cy.get('strong').should('contain.text', 'aaaaaasdffgqwerfliud');
  });
});
