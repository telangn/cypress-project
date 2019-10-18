/// <reference types="Cypress" />

describe('Log into Global Meet', () => {

    before(() => {
        Cypress.config('userAgent')
    })

    it('Navigates to Webpage', () => {
        cy.request('GET', 'eric1').then((resp) => {
            expect(resp.status).to.eq(200)
        })
        cy.visit('eric1')

        cy.modals()

        cy.loginGuest()
        // cy.loginHost()

        cy.logout()
    })
})