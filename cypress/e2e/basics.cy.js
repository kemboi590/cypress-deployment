

describe('Fundamentals Tests', () => {
    beforeEach(() => {
        cy.visit('/')
    })


    it("contains correct header text", () => {
        // cy.get('h1').contains(/welcome to todoPro!/i)
        // cy.get('[data-test="todo-welcome-header"]').contains(/welcome to todoPro!/i)
        // cy.get('[data-test="todo-welcome-header"]').should('contain.text', 'Welcome to TodoPro!')

        cy.getDataTest('todo-welcome-header').should('contain.text', 'Welcome to TodoPro!')
    })

    it("Menu works Correctly", () => {
        cy.visit('/')
        // click on the mobile menu bars
        cy.getDataTest("todo-mobile-menu-bars").click()

        cy.getDataTest("todo-ul-menu").should('be.visible')

        // Verify all menu items are present and visible
        cy.get('[data-test="todo-ul-menu"]').within(() => {
            // Check Home link
            cy.contains('Home')
            cy.get('a[href="/"]').should('contain.text', 'Home')

            cy.contains('About')
            cy.get('a[href="/about"]').should('contain.text', 'About')

            // Check Register and Login links (these appear when user is not logged in)
            cy.contains('Register').should('be.visible')
            cy.get('a[href="/register"]').should('contain.text', 'Register')

            cy.contains('Login').should('be.visible')
            cy.get('a[href="/login"]').should('contain.text', 'Login')

        })
    })

})
