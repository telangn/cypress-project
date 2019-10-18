// GlobalMeet
Cypress.Commands.add("modals", () => {
    cy.log('Continue In Browser')
    cy.get('#continueInBrowserBtn').should('be.visible').click()

    // cy.log('Get past user agent')
    // cy.get('button.transparent-continue-btn').dblclick()

    cy.log('Agree to Cookie Policy')
    cy.get('#cpp-agree-btn').should('be.visible').click()

})

Cypress.Commands.add("loginGuest", () => {
    cy.log('Enter Email')
    cy.get('#input_email-info').should('be.visible').type('eric+test@centraldesktop.com')
    cy.get('.pgi-button-wrapper').should('be.visible').click()

    cy.log('Enter Full Name')
    cy.get('pgi-label-input.guest-input.first-name.web-input-area.ng-untouched.ng-pristine').should('be.visible')
    cy.get('pgi-label-input.guest-input.first-name.web-input-area.ng-untouched.ng-pristine > div > input').type('Eric')
    cy.get('pgi-label-input.guest-input.last-name.web-input-area.ng-untouched.ng-pristine > div > input').type('Test')

    cy.log('Click Continue')
    cy.get('div.guest-continue-button.continue-button > pgi-text-button > button').click()

    cy.get('pgi-text-button.ng-tns-c8-0.ng-star-inserted > button > span').should('be.visible').click()
    cy.wait(3000)

})

Cypress.Commands.add("loginHost", () => {
    cy.log('Enter Email')
    cy.get('#input_email-info').should('be.visible').type('6597076')
    cy.get('.pgi-button-wrapper').click()

    cy.log('Enter Password')
    cy.get('#input_password-info').should('be.visible').type('r44XkP33')

    cy.log('Click Sign in')
    cy.get('#password-signin-btn > button > span').click()

    cy.get('pgi-text-button.ng-tns-c8-0.ng-star-inserted > button > span').should('be.visible').click()
    cy.wait(3000)
})

Cypress.Commands.add("logout", () => {
    cy.get('bottom-container-right > div > div > div').should('be.visible').click()
    cy.get('pgi-text-button.yes-button > button > span').should('be.visible').click()
    cy.wait(2000)
    cy.get('feedback-panel > pgi-panel > h2').should('be.visible')
})