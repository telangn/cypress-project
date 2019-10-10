// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// GlobalMeet
Cypress.Commands.add ("modals", () => {
    cy.log('Continue In Browser')
    cy.get('#continueInBrowserBtn').click()
    
    // cy.log('Get past user agent')
    // cy.get('button.transparent-continue-btn').dblclick()

    cy.log('Agree to Cookie Policy')
    cy.get('#cpp-agree-btn > .pgi-btn-layout > .pgi-button-wrapper').click()

})

Cypress.Commands.add ("login", () => {
    cy.log('Enter Email')
    cy.get('#input_email-info').type('DarthVadarOne@TheForce.com')
    cy.get('.pgi-button-wrapper').click()

    cy.log('Agree to Cookie Policy')
    cy.get('#cpp-agree-btn > .pgi-btn-layout > .pgi-button-wrapper').click()

    cy.log('Enter Email')
    cy.get('#input_email-info').type('DarthVaderTwo@TheForce.com')
    cy.get('.pgi-button-wrapper').click()

    cy.log('Enter Full Name')
    cy.get('pgi-label-input.guest-input.first-name.web-input-area.ng-untouched.ng-pristine.ng-invalid > div > input').type('Anikan')
    cy.get('pgi-label-input.guest-input.last-name.web-input-area.ng-untouched.ng-pristine.ng-invalid > div > input').type('Skywalker')

    cy.get('div.guest-continue-button.continue-button > pgi-text-button > button > span').click()

})

Cypress.Commands.add ("logout", () => {

    cy.get('mat-icon[arialabel="Exit/end meeting"]').click()
    cy.get('feedback-panel').should('be.visible')
})