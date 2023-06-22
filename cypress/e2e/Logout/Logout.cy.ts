/// <reference types="cypress-xpath" />
import { beforeEach } from "mocha";
import { LoginPage } from "../../support/ObjectPages/loginPage";
import { LogoutPage } from "../../support/ObjectPages/logout";

describe("Logout", () => {
    beforeEach(() => {
      cy.visit('/auth/login');
      cy.login("Admin", "admin123");
      var login = new LoginPage();
      login.element.dashboardSpan().should('have.text', 'Dashboard');
    });
  
    it("logout", () => {
      cy.wait(600);
       cy.logout();
      
      var logout = new LogoutPage();
      logout.element.buttonLogin().should("have.text", " Login ");
      cy.Snapshot();
    });
  });


