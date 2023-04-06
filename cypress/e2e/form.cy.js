/// <reference types="cypress" />


context('More information form', () => {
    beforeEach(() => {
        cy.visit(Cypress.config("baseUrl"))
    })

    it('Complete a more information form', () => {

        // Find the More Information button and click
        cy.get('a.fl-button').contains('MORE INFORMATION').scrollIntoView().click()
        cy.get('div.wpforms-container').first().as('form').should('be.visible')

        // Locate the form fields and populate
        cy.get('@form').find('input#wpforms-606-field_0').type('Test')
        cy.get('@form').find('input#wpforms-606-field_0-last').type('Developer')
        cy.get('@form').find('input#wpforms-606-field_3').type('Test Developer')
        cy.get('@form').find('input#wpforms-606-field_1').type('testing@example.com')
        cy.get('@form').find('input#wpforms-606-field_4').type('Title')
        cy.get('@form').find('input#wpforms-606-field_5').type('Australia')
        cy.get('@form').find('textarea#wpforms-606-field_2').type('These are some comments and notes')

        // Submit the form
        cy.get('button').contains('Submit').click()
        cy.get('div.wpforms-container').first().as('form').should('not.be.visible')


    })
    it('Attempt to submit a more information form with missing required fields.', () => {

        cy.get('a.fl-button').contains('MORE INFORMATION').scrollIntoView().click()
        cy.get('div.wpforms-container').first().as('form').should('be.visible')

        // Submit the form
        cy.get('button').contains('Submit').click()
        cy.get('@form').find('label#wpforms-606-field_0-error').should('be.visible')
        cy.get('@form').find('label#wpforms-606-field_0-last-error').should('be.visible')
        cy.get('@form').find('label#wpforms-606-field_3-error').should('be.visible')
        cy.get('@form').find('label#wpforms-606-field_1-error').should('be.visible')
        cy.get('@form').find('label#wpforms-606-field_2-error').should('be.visible')
        cy.get('@form').should('be.visible')
    })
})
