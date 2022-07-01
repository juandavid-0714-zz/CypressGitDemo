class PaymentStepPage {
    private bankWire: string;
    private confirOrder: string;
    private storeIsCompleted: string;

    constructor() {
        this.bankWire = ".bankwire";
        this.confirOrder = "#cart_navigation > button > span"
        this.storeIsCompleted = "#center_column > div > p > strong"
    }

    public clickBanWire(): void {
        cy.get(this.bankWire).click()
    }

    public clickConfirmOrder(): void {
        cy.get(this.confirOrder).click()
    }

    public checkResult(): void {
        cy.get(this.storeIsCompleted)
          .should("have.text", "Your order on My Store is complete.");
    }

}

export { PaymentStepPage }
