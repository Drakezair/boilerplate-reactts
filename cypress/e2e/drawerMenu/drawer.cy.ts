/// <reference types="cypress" />

describe('Drawer', () => {
  it('go to characters', () => {
    cy.visit('http://127.0.0.1:5173/');
    cy.get('#drawer_button').click();
    cy.get('#Characters').click();
    cy.get('h1').should('have.text', 'characters');
  });

  it('go to favorites', () => {
    cy.visit('http://127.0.0.1:5173/favorites');
    cy.get('#drawer_button').click();
    cy.get('#Favorites').click();
    cy.get('h1').should('have.text', 'favorites');
  });
});
