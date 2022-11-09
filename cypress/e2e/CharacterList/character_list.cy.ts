/// <reference types="cypress" />

describe('character list', () => {
  it('Pass', () => {
    cy.visit('http://127.0.0.1:5173/');
    cy.intercept('GET', 'https://swapi.dev/api/people', {
      fixture: 'characters.json'
    });
    cy.intercept('GET', 'https://swapi.dev/api/planet/*', {
      fixture: 'planet.json'
    });

    cy.get('#Luke').should('exist');
  });

  it('fail', () => {
    cy.visit('http://127.0.0.1:5173/');
    cy.intercept('GET', 'https://swapi.dev/api/people', {
      fixture: 'empty.json'
    });
    cy.intercept('GET', 'https://swapi.dev/api/planet/*', {
      fixture: 'empty.json'
    });

    cy.get('#Luke').should('not.exist');
  });
});
