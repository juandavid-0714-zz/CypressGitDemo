class LoginPage {
    private email: string;
    private password: string;
    private submit: string

    constructor() {
        this.email = "#email";
        this.password = "#passwd";
        this.submit = "#SubmitLogin"
    }

    public fillFieldsAndSubmit(): void {
        cy.get(this.email).type("aperdomobo@gmail.com");
        cy.get(this.password).type("WorkshopProtractor");
        cy.get(this.submit).click();
    }

}

export { LoginPage }
