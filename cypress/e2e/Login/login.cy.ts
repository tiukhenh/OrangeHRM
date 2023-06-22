/// <reference types="cypress-xpath" />
import { beforeEach } from "mocha";
import { LoginPage } from "../../support/ObjectPages/loginPage";


describe("Login", ()=> {
  beforeEach(()=>{
    cy.visit('/auth/login');
  })
  it("Login successfully",() => {
    cy.login("Admin","admin123");
    var login = new LoginPage();
    login.element.dashboardSpan().should('have.text','Dashboard');
    cy.Snapshot();
  }); 
  it("Login with incorrect username",()=>{
    cy.login("asdfgh","admin123")
    var login = new LoginPage();
    login.element.errorMsg().should("have.text", "Invalid credentials")
    cy.Snapshot();
  })
  it("Login with incorrect password",()=>{
    cy.login("Admin","asdfgghuuj")
    var login = new LoginPage();
    login.element.errorMsg().should("have.text", "Invalid credentials")
    cy.Snapshot();
  })

})


