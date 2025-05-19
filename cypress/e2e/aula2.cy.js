///<reference = cypress>

describe('User Auth', () => {
  it('User creation success', () => {
      cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login');
      cy.get('.btn-link').click();
      cy.get('#firstName').type('Felipe');
      cy.get('#Text1').type('Zeferino');
      cy.get('#username').type('felipemsz');
      cy.get('#password').type('teste123');
      cy.get('.btn-primary').click();
      cy.get('.ng-binding').should('contain.text', 'Registration successful');
  })
  it('User creation fail', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login');
    cy.get('.btn-link').click();
    cy.get('#firstName').type('Felipe');
    cy.get('#Text1').type('Zeferino');
    cy.get('#username').type('felipemsz');
    cy.get('.btn-primary').should('be.disabled');
})
it('login success', () => {
  let { id, password } = createUser();

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login');
  cy.get('#username').type(id);
  cy.get('#password').type(password);
  cy.get('.btn-primary').click();
  cy.get('h1.ng-binding').should('contain.text', id);
})
it('login and delete user and login again fail', () => {
  let { id, password } = createUser();

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login');
  cy.get('#username').type(id);
  cy.get('#password').type(password);
  cy.get('.btn-primary').click();
  cy.get('h1.ng-binding').should('contain.text', id);
  cy.get('.ng-binding > a').click();
  cy.get('.btn').click();
  cy.get('#username').type(id);
  cy.get('#password').type(password);
  cy.get('.btn-primary').click();
  cy.get('.ng-binding').should('contain.text', 'Username or password is incorrect')
})

})

function createUser() {
  let hour = new Date().getHours().toString();
  let minutes = new Date().getMinutes().toString();
  let seconds = new Date().getSeconds().toString();
  let id = hour + minutes + seconds + 'id';
  let password = hour + minutes + seconds + 'senha';

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login');
  cy.get('.btn-link').click();
  cy.get('#firstName').type(id);
  cy.get('#Text1').type(id);
  cy.get('#username').type(id);
  cy.get('#password').type(password);
  cy.get('.btn-primary').click();
  cy.get('.ng-binding').should('contain.text', 'Registration successful');
  return { id, password };
}
