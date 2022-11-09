/// <reference types="cypress" />

describe('Router', () => {
  it('not found', () => {
    cy.visit('http://127.0.0.1:5173/not/page');
    cy.get('h1').should('have.text', 'not found..');
  });

  it('characters', () => {
    cy.visit('http://127.0.0.1:5173/');
  });

  it('favorites', () => {
    cy.visit('http://127.0.0.1:5173/favorites');
    cy.get('h1').should('have.text', 'favorites');
  });
});
