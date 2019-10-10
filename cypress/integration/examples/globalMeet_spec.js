/// <reference types="Cypress" />

describe('Log into Global Meet', () => {

     before(() => {
         cy.log ('\nbeforeEach is now executing\n')
         Cypress.config('userAgent')
    })

    it ('Navigates to Webpage', () => {
        cy.request('GET','ninadtelang').then((resp) => {
            expect(resp.status).to.eq(200)
        })
        cy.visit('ninadtelang')
    })

    it ('Choose modal options', () => {
        cy.modals()
    })

    it ('Validate Credentials', () => {
        // cy.loginGuest()
        cy.loginHost()
    })

    it ('Logout', () => {
        cy.logout()
    })

})
