class AddressStepPage {
    private proceedToCheckout: string

    constructor() {
        this.proceedToCheckout = "[name=\"processAddress\"]"
    }

    public clickProceedToCheckout(): void {
        cy.get(this.proceedToCheckout).click()
    }
}

export { AddressStepPage }
