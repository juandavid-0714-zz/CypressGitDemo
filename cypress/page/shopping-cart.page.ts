class ShoppingCartPage {
    private proceedToCheckoutBtn: string

    constructor() {
        this.proceedToCheckoutBtn = ".cart_navigation span"
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutBtn).click()
    }
}

export { ShoppingCartPage }

