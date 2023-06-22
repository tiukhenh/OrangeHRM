/// <reference types="cypress" />
///<reference types="cypress-xpath" />
// ***********************************************
// This example commands.ts shows you how to
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
Cypress.Commands.add('login', (username, password) => { 
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(Cypress.config('baseUrl'));
    cy.get("input[placeholder='Username']").type(username);
    cy.get("input[placeholder='Username']").clear();
    cy.get("input[placeholder='Username']").type(username);
    cy.get("[name='password']").type(password);
    cy.get('[type="submit"]').click();    
    cy.wait(500);
})
Cypress.Commands.add('logout', () => { 
    cy.xpath("//li[contains(@class,'userdropdown')]").click();
    cy.xpath("//ul[@class='oxd-dropdown-menu']//*[text()='Logout']").click(); 
    cy.wait(500);
})
Cypress.Commands.add("Snapshot", (Name) => {
    // @ts-ignore
    let snapshotTitle = cy.state("runnable").fullTitle();
    if (Name) {
      snapshotTitle = snapshotTitle + " - " + Name;
    }
    cy.screenshot(snapshotTitle, {
      // @ts-ignore
      widths: [cy.state("viewportWidth")],
      // @ts-ignore
      minHeight: cy.state("viewportHeight"),
    });
  });
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }