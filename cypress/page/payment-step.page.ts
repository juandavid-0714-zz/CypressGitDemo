class PaymentStepPage {
    private bankWire: string;
    private confirmOrderButton: string;
    private storeIsCompleted: string;

    constructor() {
        this.bankWire = ".bankwire";
        this.confirmOrderButton = "#cart_navigation span";
        this.storeIsCompleted = ".cheque-indent > .dark";
    }

    public selectBanWire(): void {
        cy.get(this.bankWire).click()
    }

    public confirmOrder(): void {
        cy.get(this.confirmOrderButton).click()
    }

    public getConfirmationMessage(message: string): void {
        cy.get(this.storeIsCompleted).should(($mess) => {
           expect($mess).to.have.text(message)
        })
          
    }

}

export { PaymentStepPage }
