class ShoppingCartPage {
    private proceedToCheckout: string

    constructor() {
        this.proceedToCheckout = ".cart_navigation span"
    }

    public clickProceedToCheckout(): void {
        cy.get(this.proceedToCheckout).click()
    }
}

export { ShoppingCartPage }

