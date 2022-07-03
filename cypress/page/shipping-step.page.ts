class ShippingStepPage {
    private acceptTerms: string;
    private proceedToCheckoutButton: string

    constructor() {
        this.acceptTerms = "#cgv";
        this.proceedToCheckoutButton = "[name=\"processCarrier\"]"
    }

    public acceptTheTerms(): void {
        cy.get(this.acceptTerms).check()
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutButton).click()
    }
}

export { ShippingStepPage }
