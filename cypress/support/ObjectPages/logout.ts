class LogoutPage {
    element = {
        userdropdown: () => cy.xpath("//li[contains(@class,'userdropdown')]"),
        logoutLoca: ()=> cy.xpath("//ul[@class='oxd-dropdown-menu']//*[text()='Logout']"),
        buttonLogin:()=> cy.xpath("//button[@type='submit']")
    }
    clickUserdropdown() {
         this.element.userdropdown().click();
         cy.wait(1000);
    }
    clickLogout() {
        this.element.logoutLoca().click();        
    }
}
export {LogoutPage};