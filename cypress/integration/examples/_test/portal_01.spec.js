/// <reference types="Cypress" />

describe('GlobalMeet Customer Portal - FIRST RUN', () => {

    it('Logs in as a Corporate Customer Admin and land on Company Page', () => {

        cy.visit('https://admin.qab.globalmeet.net')

        cy.contains('Click here to login').click({force: true})

        cy.get('#cpp-agree-btn').should('be.visible').click()

        cy.get('#input_email-info').should('be.visible').type('2736236')
        cy.get('.pgi-button-wrapper').click()

        cy.get('#input_password-info').should('be.visible').type('6qZzHFtu')

        cy.get('#password-signin-btn').click()

        cy.get('pgi-nav-header > div.labels-container > div.subtitle-container > span')
            .contains('Corporate Customer Admin')

        // cy.get('.control-bar__title')
        //     .should('contain', 'Company')

        cy.get('.company-profile-content')
            .should('contain', 'Information')
            .and('contain', 'Profile')
            .and('contain', 'Location')
            .and('contain', 'Corporate customer')
            .and('contain', 'Provider')
            .and('contain', 'Products')
            .and('contain', 'Preferences')
    })

    it('Navigate the UI frame', () => {

        cy.server()
            .route('GET', '/clients/bycompany*').as('usersTable')

        cy.get('pgi-tree-nav > div > pgi-tree-nav-item.ng-tns-c7-3')
            .click()
            .wait('@usersTable')
            .url()
            .should('include', '/users')

        cy.get('pgi-tree-nav > div > pgi-tree-nav-item.ng-tns-c7-4')
            .click()
            .within(() => {
                cy.get('pgi-tree-nav-item.ng-tns-c7-7').click()
                    .url().should('include', '/products/subscriptions')
                cy.get('pgi-tree-nav-item.ng-tns-c7-8').click()
                    .url().should('include', '/products/phone')
                cy.get('pgi-tree-nav-item.ng-tns-c7-9').click()
                    .url().should('include', '/products/messaging')
                cy.get('pgi-tree-nav-item.ng-tns-c7-10').click()
                    .url().should('include', '/products/collaboration')
            })

        cy.get('pgi-tree-nav > div > pgi-tree-nav-item.ng-tns-c7-5')
            .click()
            .url()
            .should('include', '/analytics')

        cy.get('pgi-tree-nav > div > pgi-tree-nav-item.ng-tns-c7-6')
            .click()
            .url()
            .should('include', '/billing')
    })

    it('Should logout', () => {

        cy.server()
            .route('POST', '/auth/logout').as('logout')

        cy.get('pgi-nav-header > div.labels-container > div.subtitle-container > pgi-icon')
            .click()

        cy.contains('Sign out')
            .click()
            .wait('@logout')

        cy.contains('Click here to login')
    })
})
