/// <reference types="cypress" />

Cypress.Commands.add('getDataTest', (dataTestSelector) => {
    return cy.get(`[data-test="${dataTestSelector}"]`)
})

// login as admin
Cypress.Commands.add('loginAsAdmin', (email = 'bkemboi590@gmail.com', password = '123456') => {
    cy.visit('/login')
    cy.getDataTest('login-email-input').type(email)
    cy.getDataTest('login-password-input').type(password)
    cy.getDataTest('login-submit-button').click()
    cy.url().should('include', '/admin/dashboard/todos').as('adminDashboardUrl').as('adminDashboardUrl')

    // Welcome to your Admin dashboard - contains
    cy.get('body').should('contain.text', 'Welcome to your Admin dashboard')
})




/* eslint-disable @typescript-eslint/no-namespace */
export { }
declare global {
    namespace Cypress {
        interface Chainable {
            getDataTest(value: string): Chainable<JQuery<HTMLElement>>;
            loginAsAdmin(email: string, password: string): Chainable<void>;
        }
    }
}
