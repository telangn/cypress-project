/// <reference types="Cypress" />

describe('Log into Global Meet', () => {

     before(() => {
         cy.log ('\nbeforeEach is now executing\n')
         Cypress.config('userAgent')
    })

    it ('Navigates to Webpage', () => {
        cy.visit('https://regression.pgilab.com/web/ninadtelang')
    })

    it ('Choose modal options', () => {
        cy.modals()
    })

    it ('Validate Credentials', () => {
        cy.login()
    })

    it ('Logout', () => {
        cy.logout()

    })

})
