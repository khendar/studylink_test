context('Navigation', () => {
  beforeEach(() => {
    cy.visit(Cypress.config("baseUrl"))
  })

  it('cy.reload() the page', () => {
    cy.reload()
    cy.reload(true)
  })

  it('tests the primary navigation', () => {
    cy.get('.mega-menu-link').contains("Solutions").click().click()
    cy.url().should('eq', `${Cypress.config("baseUrl")}/solutions/`)

    cy.get('.mega-menu-link').contains('Recruitment Partners').click().click()
    cy.url().should('eq', `${Cypress.config("baseUrl")}/partners/`)

    cy.get('.mega-menu-link').contains('Education Providers').click().click()
    cy.url().should('eq', `${Cypress.config("baseUrl")}/clients/`)

    cy.get('.mega-menu-link').contains('Why Us').click().click()
    cy.url().should('eq', `${Cypress.config("baseUrl")}/about-us/`)

    cy.get('.mega-menu-link').contains('Resources').click().click()
    cy.url().should('eq', `${Cypress.config("baseUrl")}/the-hub/`)

  })
})