/// <reference types="cypress" />

describe('favorite list', () => {
  it('Pass', () => {
    cy.visit('http://127.0.0.1:5173/');
    cy.intercept('GET', 'https://swapi.dev/api/people', {
      fixture: 'characters.json'
    });
    cy.intercept('GET', 'https://swapi.dev/api/planet/*', {
      fixture: 'planet.json'
    });

    cy.get('#unfav').click();
    cy.get('#drawer_button').click();
    cy.get('#Favorites').click();
    cy.get('#Luke').should('exist');
    cy.get('#fav').click();
    cy.get('#Luke').should('not.exist');
  });

  it('search result', () => {
    cy.visit('http://127.0.0.1:5173/');
    cy.intercept('GET', 'https://swapi.dev/api/people', {
      fixture: 'characters.json'
    });
    cy.intercept('GET', 'https://swapi.dev/api/planet/*', {
      fixture: 'planet.json'
    });

    cy.get('#unfav').click();
    cy.get('#drawer_button').click();
    cy.get('#Favorites').click();
    cy.get('#searchInput').type('luke');
    cy.get('#Luke', { timeout: 20000 }).should('exist');
    cy.get('#fav', { timeout: 20000 }).click();
    cy.get('#Luke', { timeout: 20000 }).should('exist');
  });

  it('search not result', () => {
    cy.visit('http://127.0.0.1:5173/');
    cy.intercept('GET', 'https://swapi.dev/api/people', {
      fixture: 'characters.json'
    });
    cy.intercept('GET', 'https://swapi.dev/api/planet/*', {
      fixture: 'planet.json'
    });

    cy.get('#unfav').click();
    cy.get('#drawer_button').click();
    cy.get('#Favorites').click();
    cy.get('#searchInput').type('luke');
    cy.get('#Luke', { timeout: 20000 }).should('exist');
    cy.get('#fav', { timeout: 20000 }).click();
    cy.get('#Luke', { timeout: 20000 }).should('exist');
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
