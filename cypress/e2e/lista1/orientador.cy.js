///<reference = cypress>

describe('Orientador', () => {
    let orientadorData;
    before(() => {
        orientadorData = createOrientador();
    });
  it('Orientador creation success', () => {
    const { id, password, email } = orientadorData;
      cy.visit('https://confianopai.com/login');
      cy.get(':nth-child(2) > .sc-ktwOfi').type('torres@');
      cy.get(':nth-child(3) > .sc-ktwOfi').type('123');
      cy.get('.sc-csKJxZ').click();
      cy.get('[href="/adm/novo-usuario"]').click();
      cy.get('.sc-dsAqUS').select('Orientador');
      cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(id);
      cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email);
      cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(password);
      cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();
      cy.get('.Toastify__toast-body > :nth-child(2)').should('contain.text', 'Usuário criado com sucesso!');
  });
    it('orientador creation fail', () => {
    const { id, password, email } = orientadorData;
      cy.visit('https://confianopai.com/login');
      cy.get(':nth-child(2) > .sc-ktwOfi').type('torres@');
      cy.get(':nth-child(3) > .sc-ktwOfi').type('123');
      cy.get('.sc-csKJxZ').click();
      cy.get('[href="/adm/novo-usuario"]').click();
      cy.get('.sc-dsAqUS').select('Orientador');
      cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(id);
      cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email);
      cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(password);
      cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();
      cy.get('.Toastify__toast-body > :nth-child(2)').should('contain.text', 'Falha ao criar usuário.');
  })
})

function createOrientador() {
    let hour = new Date().getHours().toString();
    let minutes = new Date().getMinutes().toString();
    let seconds = new Date().getSeconds().toString();
    let id = hour + minutes + seconds + 'id';
    let password = hour + minutes + seconds + 'senha';
    let email = hour + minutes + seconds + '@teste.com';

    return { id, password, email };
}
