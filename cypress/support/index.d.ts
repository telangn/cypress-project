/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Create several Todo items via UI
       * @example
       * cy.createDefaultTodos()
       */
      createDefaultTodos(): Chainable<any>
      /**
       * Creates one Todo using UI
       * @example
       * cy.createTodo('new item')
       */
      createTodo(title: string): Chainable<any>

      // Exposes page object models from commands.js
      modals(): Chainable<any>
      login(): Chainable<any>
      logout(): Chainable<any>

    }
  }