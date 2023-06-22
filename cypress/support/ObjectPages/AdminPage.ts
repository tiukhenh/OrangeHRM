class AdminPage {
    element = {
        // Admin
        adminloca:()=> cy.xpath("//span[text()='Admin']"),
        //search
        usernameinput: () => cy.xpath('//*[@id="app"]//form[@class="oxd-form"]//input[contains(@class,"oxd-input")]'),
        UserRoleLoca: ()=> cy.xpath("//label[text()='User Role']/ancestor::div[contains(@class,'oxd-input-group oxd-input-field-bottom-space')]//div[contains(@class,'oxd-select-text oxd-select-text--active')]//div[text()='-- Select --']"),
        searchButton: ()=> cy.xpath("//*[@id='app']//form[@class='oxd-form']//button[contains(@class,'orangehrm-left-space')]"),
        expectOneUserSearchbyUsername:()=> cy.xpath("//div[@class='oxd-table-body']"),
        spanNotFound:()=>cy.xpath("//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']//span[@class='oxd-text oxd-text--span']"),

        //add user
        iconAdd: () =>cy.xpath("//*[@id='app']//i[contains(@class,'oxd-icon bi-plus oxd-button-icon')]"),
        AddUserRoleLoca: ()=> cy.xpath("//*[text()='User Role']/ancestor::div[@class='oxd-grid-item oxd-grid-item--gutters']//*[contains(text(),'Select')]"),
        AddUserStatusLoca: ()=> cy.xpath("//*[text()='Status']/ancestor::div[@class='oxd-grid-item oxd-grid-item--gutters']//*[contains(text(),'Select')]"),
        AddEmployeeNameInput: ()=> cy.xpath('//input[@placeholder="Type for hints..."]'),
        AddUsernameInput: ()=> cy.xpath('//input[@autocomplete="off" and @class="oxd-input oxd-input--active"]'),
        AddPasswordInput: ()=> cy.xpath('//*[text()="Password"]/ancestor::div[contains(@class,"input" )]//input[contains(@class,"oxd-input")]'),
        AddConfirmPassword:()=>cy.xpath('//*[text()="Confirm Password"]/ancestor::div[contains(@class,"input" )]//input[contains(@class,"oxd-input")]'),
        AddSaveButton: ()=> cy.xpath("//button[@type='submit']"),

        //Edit user
        iconEdit: () =>cy.xpath("//div[@class='oxd-table-cell-actions']//i[@class='oxd-icon bi-pencil-fill']"),
        EditUserRoleLoca: ()=> cy.xpath("//*[text()='User Role']//ancestor::div[@class='oxd-input-group oxd-input-field-bottom-space']//div[@class='oxd-select-text oxd-select-text--active']"),
        EditUserStatusLoca: ()=> cy.xpath("//*[text()='Status']//ancestor::div[contains(@class,'oxd-input-field-bottom-space')]//*[contains(@class,'oxd-select-text--active')]"),
        EditEmployeeNameInput: ()=> cy.xpath('//input[@placeholder="Type for hints..."]'),
        EditUsernameInput: ()=> cy.xpath('//input[@autocomplete="off" and @class="oxd-input oxd-input--active"]'),
        EditPasswordInput: ()=> cy.xpath('//*[text()="Password"]/ancestor::div[contains(@class,"input" )]//input[contains(@class,"oxd-input")]'),
        EditConfirmPassword:()=>cy.xpath('//*[text()="Confirm Password"]/ancestor::div[contains(@class,"input" )]//input[contains(@class,"oxd-input")]'),
        EditSaveButton: ()=> cy.xpath("//button[@type='submit']"),
        

        //Delete user
        iconDelete: () => cy.xpath("//div[@class='oxd-table-cell-actions']//i[@class='oxd-icon bi-trash']"),
        confirmDelete: ()=> cy.xpath("//i[@class='oxd-icon bi-trash oxd-button-icon']"),

        UserManagementPage:()=> cy.xpath("//h6[contains(@class,'oxd-topbar-header-breadcrumb-level')]"),


    }
    //search action
    typeUsernameInputSearch(username:string){
        this.element.usernameinput().type(username);
        cy.xpath("//div[@class='orangehrm-background-container']").scrollIntoView({timeout:500});
        // cy.get("body").scrollIntoView({ top: 'start', behavior: 'smooth' });
    }
    clickSearchbyUserRole(){
        this.element.UserRoleLoca().click();
    }
    selectUserRoleSearch(userRole:string){
        cy.xpath("//div[@role='option']//*[text()='"+userRole+"']").click();
    }
    clickSearchButton(){
        this.element.searchButton().click(); 
        cy.wait(500);
    }    
    //add action
    clickIconAdd(){
        this.element.iconAdd().click();
    }
    // Click User Role to add
    clickAddUserRole(){
        this.element.AddUserRoleLoca().click();
    }
    selectAddUserRole(UserRole:string){
        cy.xpath("//*[text()='User Role']/ancestor::div[@class='oxd-grid-item oxd-grid-item--gutters']//span[text()='"+UserRole+"']").click();
    }
    //click user status to add
    clickAddUserStatus(){
        this.element.AddUserStatusLoca().click();
    }
    selectAddUserStatus( Status:string){
        cy.xpath("//*[text()='Status']/ancestor::div[@class='oxd-grid-item oxd-grid-item--gutters']//span[text()='"+Status+"']").click();
    }
    //enter Employee Name
    typeAddEmployeeName(EmployeeName:string){
        this.element.AddEmployeeNameInput().type(EmployeeName);
    }
    //enter Username
    typeAddUsername(Username:string){
        this.element.AddUsernameInput().eq(0).type(Username);
    }
    // enter Password
    typeAddPassword(Password:string){
        this.element.AddPasswordInput().type(Password);
    }
    typeAddConfirmPassword(ConfirmPassword:string){
        this.element.AddConfirmPassword().type(ConfirmPassword);
    }
    // save Add
    clickSaveAdd(){
        this.element.AddSaveButton().click();
    }

    //edit action
    clickIconedit(){
        this.element.iconEdit().click();
    }
    clickEditUserRole(){
        this.element.EditUserRoleLoca().click();
    }
    SelectEditUserRole(UserRole:string){
        cy.xpath("//div[contains(@class,'oxd-select-option')]//*[text()='"+UserRole+"']").click();
    }
    clickEditUserStatus(){
        this.element.EditUserStatusLoca().click();
    }
    SelectEditUserStatus(UserStatus:string){
        cy.xpath("//div[contains(@class,'oxd-select-option')]//*[text()='"+UserStatus+"']").click();
    }
    clickSaveEdit(){
        this.element.EditSaveButton().click();
    }
    //Delete action
    clickIconDelete(){
        this.element.iconDelete().click();
    }
    confirmDelete(){
        this.element.confirmDelete().click(); 
    }


}
export {AdminPage};