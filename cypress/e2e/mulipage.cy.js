describe("navigating the navigation bar", () => {
    beforeEach(() => {
        cy.visit('/')
        cy.viewport(1280, 720)
    })

    it("should visit multiple pages", () => {
        // verify that we are on the home page
        cy.location("pathname").should("equal", "/")
        cy.getDataTest('todo-welcome-header').should('contain.text', 'Welcome to TodoPro!')

        cy.getDataTest("desktop-nav-about").as("aboutLink")

        cy.get('@aboutLink').click()
        cy.location("pathname").should("equal", "/about")
        cy.contains("About TodoPro").should("be.visible")

        cy.getDataTest("desktop-nav-register").as("registerLink");
        cy.get("@registerLink").click();
        cy.location("pathname").should("equal", "/register");

        cy.visit('/');
        cy.getDataTest("desktop-nav-login").click();
        cy.location("pathname").should("equal", "/login");

    })
})