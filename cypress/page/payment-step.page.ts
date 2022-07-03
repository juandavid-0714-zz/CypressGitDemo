class PaymentStepPage {
    private bankWire: string;
    private confirmOrderButton: string;
    private storeIsCompleted: string;
    private testToCheck: string;

    constructor() {
        this.bankWire = ".bankwire";
        this.confirmOrderButton = "#cart_navigation span";
        this.storeIsCompleted = ".cheque-indent > .dark";
        this.testToCheck = "Your order on My Store is complete."
    }

    public selectBanWire(): void {
        cy.get(this.bankWire).click()
    }

    public confirmOrder(): void {
        cy.get(this.confirmOrderButton).click()
    }

    public checkResult(): void {
        cy.get(this.storeIsCompleted)
          .should("have.text", this.testToCheck);
    }

}

export { PaymentStepPage }
