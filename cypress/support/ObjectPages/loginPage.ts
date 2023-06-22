class LoginPage {
    element = {
        usernameinput: () => cy.get("input[placeholder='Username']"),
        passwordinput: ()=> cy.get("[name='password']"),
        loginButton: () =>  cy.get('[type="submit"]'),
        errorMsg:() => cy.xpath("//p[contains(@class,'oxd-alert-content-text')]"),
        dashboardSpan: ()=> cy.xpath("//span[@class='oxd-topbar-header-breadcrumb']")
    }
    typeUsernameInput(username:string){
        this.element.usernameinput().type(username);
    }
    typePasswordInput(password:string){
        this.element.passwordinput().type(password);
    }
    clickLogin() {       
        this.element.loginButton().click();             
    }
}
export {LoginPage};