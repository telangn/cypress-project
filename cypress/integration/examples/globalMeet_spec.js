/// <reference types="Cypress" />

describe('Log into Global Meet', () => {

     before(() => {
         cy.log ('\nbeforeEach is now executing\n')
         Cypress.config('userAgent', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36')
    })

    it ('Navigates to Webpage', () => {
        cy.visit('http://regression.pgilab.com/web/ninadtelang')
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