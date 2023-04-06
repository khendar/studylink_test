/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit(Cypress.config("baseUrl"))
  })

  it('Reloads the page', () => {
    cy.reload()
    cy.reload(true)
  })

  it('Tests the primary navigation', () => {

    const nav = [
      ['Solutions', 'solutions'],
      ['Recruitment Partners', 'partners'],
      ['Education Providers', 'clients'],
      ['Why Us', 'about-us'],
      ['Resources', 'the-hub'],
    ]
    nav.forEach(mainNav => {
      let title = mainNav[0]
      let link = mainNav[1]

      // There's a slight bug in the mega-menu navigation - sometimes requires 2 clicks to activate the link
      cy.get('.mega-menu-link').contains(title).click().click()
      cy.url().should('eq', `${Cypress.config("baseUrl")}/${link}/`)
    })
  })

  it('Test the Mega-Menu Navigation', () => {
    const nav = [
      ['Solutions', [
        ['Partner Portal', 'for-agents'],
        ['Capture', 'capture'],
        ['Admit', 'admit']
      ]],
      ['Recruitment Partners', [
        ['Partner Portal', 'for-agents'],
      ]],
      ['Education Providers', [
        ['Capture', 'capture'],
        ['Admit', 'admit']
      ]],
      ['Why Us', [
        ['About us and our 30 year journey', 'about-us'],
      ]],
      ['Resources', [
        ['The Hub', 'the-hub-copy'],
        ['Case Studies', 'case-studies'],
      ]],
    ]

    nav.forEach((mainNav) => {
      let title = mainNav[0]
      let subs = mainNav[1]
      subs.forEach((subPage) => {
        let subTitle = subPage[0]
        let subLink = subPage[1]

        // Getting Cypress to activate the mega-sub-menu is problematic.
        // Triggering mouseover, onmouseenter etc didn't seem to work. 
        // I found that rightclick() worked to show the sub-menu.
        cy.get('.mega-menu-link').contains(title).rightclick();
        cy.get('.mega-menu-link').contains(title).siblings('.mega-sub-menu').then($menu => {
          cy.wrap($menu).should('be.visible')
          cy.wrap($menu).find("a.mega-menu-link").contains(subTitle).click()
          cy.url().should('eq', `${Cypress.config("baseUrl")}/${subLink}/`)
        })
      })
    })
  })
})