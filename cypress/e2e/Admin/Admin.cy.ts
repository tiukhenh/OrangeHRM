/// <reference types="cypress-xpath" />
import { afterEach } from "mocha";
import { LoginPage } from "../../support/ObjectPages/loginPage";
import { LogoutPage } from "../../support/ObjectPages/logout";
import { AdminPage } from "../../support/ObjectPages/AdminPage";



describe("Employee Management", ()=> {
  beforeEach(()=> {
    cy.visit('/auth/login');
    cy.fixture("userAdmin")
      .then(function (data:object) {
      cy.login(data.user.username,data.user.password);
    })
    var login = new LoginPage();
    login.element.dashboardSpan().should('have.text','Dashboard');
    
  });

  afterEach(()=>{
    cy.wait(600);
    cy.logout();
    var logout = new LogoutPage();
    logout.element.buttonLogin().should("have.text"," Login ")
    cy.wait(600);
  })
  it("Search user by username into the application",() => {
    let search = new AdminPage();
    search.element.adminloca().click();
    cy.fixture("user")
      .then(function (data:object) {
        search.typeUsernameInputSearch(data.findUser.username);
      })
    cy.wait(500)
    search.clickSearchButton();
    
    search.element.expectOneUserSearchbyUsername().find('i').should('have.length',3);
    cy.Snapshot();
  }); 
  it("Search user by userRole into the application",() => {
    let search = new AdminPage();
    search.element.adminloca().click();
    search.clickSearchbyUserRole();
    cy.wait(500)
    cy.fixture("user")
      .then(function (data:object) {
        search.selectUserRoleSearch(data.findUser.UserRole);
      })
    cy.wait(1000)
    search.clickSearchButton();
    cy.wait(500)
    search.element.spanNotFound().should('not.have.text','No Records Found');
    cy.Snapshot();
  }); 
  it("Add user into the application",() => {
    let add = new AdminPage();
    add.element.adminloca().click();
    add.clickIconAdd();
    
    cy.fixture("user")
      .then(function (data:object) {
        //add userRole
        add.clickAddUserRole();
        add.selectAddUserRole(data.newUser.UserRole);
        //add user status
        add.clickAddUserStatus();
        add.selectAddUserStatus(data.newUser.Status);
        //add Employee name
        add.typeAddEmployeeName(data.newUser.EmployeeName);
        //add Username
        add.typeAddUsername(data.newUser.username);
        //add password
        add.typeAddPassword(data.newUser.password);
        //add confirm pass
        add.typeAddConfirmPassword(data.newUser.password);
        cy.Snapshot("fill form add user");
        add.clickSaveAdd();
        cy.Snapshot();
     })
     
  }); 
  it("Edit user into the application",() => {
    let edit = new AdminPage();
    edit.element.adminloca().click();
    cy.fixture("user")
      .then(function (data:object) {
        //search user
        edit.typeUsernameInputSearch(data.editUser.username);
        cy.wait(500)
        edit.clickSearchButton();
        //verify search success
        edit.element.expectOneUserSearchbyUsername().find('i').should('have.length',3);
        //edit user
        edit.clickIconedit();

        //edit UserRole
        edit.clickEditUserRole();
        edit.SelectEditUserRole(data.editUser.UserRole);
        
        //deit user status
        edit.clickEditUserStatus();
        edit.SelectEditUserStatus(data.editUser.Status);
        cy.Snapshot("fill form edit user");
        edit.clickSaveEdit();
        cy.wait(500);
        //verify save success
        edit.element.UserManagementPage().should('have.text','User Management');
        cy.Snapshot();
    })  
   
  });
  it("Delete user into the application",() => {
    let deleteuser = new AdminPage();
    deleteuser.element.adminloca().click();
    //search user
    cy.fixture("user")
      .then(function (data:object) {
        deleteuser.typeUsernameInputSearch(data.userNameDeleted);
      })
    cy.wait(500)
    deleteuser.clickSearchButton();
    cy.wait(500);
    //verify search success
    deleteuser.element.expectOneUserSearchbyUsername().find('i').should('have.length',3);
    //delete user
    deleteuser.clickIconDelete();
    deleteuser.confirmDelete();
    cy.wait(500);
    //verify delete success
    deleteuser.element.UserManagementPage().should('have.text','User Management');
    cy.Snapshot();
    //
  });
})


