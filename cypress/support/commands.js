
// GlobalMeet
Cypress.Commands.add ("modals", () => {
    cy.log('Continue In Browser')
    cy.get('#continueInBrowserBtn').should('be.visible')
    cy.get('#continueInBrowserBtn').click()
    
    // cy.log('Get past user agent')
    // cy.get('button.transparent-continue-btn').dblclick()

    cy.log('Agree to Cookie Policy')
    cy.get('#cpp-agree-btn > .pgi-btn-layout > .pgi-button-wrapper').should('be.visible')
    cy.get('#cpp-agree-btn > .pgi-btn-layout > .pgi-button-wrapper').click()

})

Cypress.Commands.add ("loginGuest", () => {
    cy.log('Enter Email')
    cy.get('#input_email-info').should('be.visible')
    cy.get('#input_email-info').type('Yoda@TheForce.com')
    cy.get('.pgi-button-wrapper').click()

    cy.log('Enter Full Name')
    cy.get('pgi-label-input.guest-input.first-name.web-input-area.ng-untouched.ng-pristine.ng-invalid > div > input').should('be.visible')
    cy.get('pgi-label-input.guest-input.first-name.web-input-area.ng-untouched.ng-pristine.ng-invalid > div > input').type('Yoda')
    cy.get('pgi-label-input.guest-input.last-name.web-input-area.ng-untouched.ng-pristine.ng-invalid > div > input').type('Boda')

    cy.get('div.guest-continue-button.continue-button > pgi-text-button > button > span').click()

})

Cypress.Commands.add ("loginHost", () => {
    cy.log('Enter Email')
    cy.get('#input_email-info').should('be.visible')
    cy.get('#input_email-info').type('6597076')
    cy.get('.pgi-button-wrapper').click()

    cy.log('Enter Password')
    cy.get('#input_password-info').should('be.visible')
    cy.get('#input_password-info').type('r44XkP33')

    cy.get('#password-signin-btn > button > span').click()
})

Cypress.Commands.add ("logout", () => {
    cy.get('mat-icon[arialabel="Exit/end meeting"]').should('be.visible')
    cy.get('mat-icon[arialabel="Exit/end meeting"]').click()
    cy.get('feedback-panel').should('be.visible')
})
