class ShippingStepPage {
    private acceptTerms: string;
    private clickToProceed: string

    constructor() {
        this.acceptTerms = "div > span > input#cgv";
        this.clickToProceed = "[name=\"processCarrier\"]"
    }

    public acceptTheTerms(): void {
        cy.get(this.acceptTerms).check()
    }

    public clickProceed(): void {
        cy.get(this.clickToProceed).click()
    }
}

export { ShippingStepPage }
