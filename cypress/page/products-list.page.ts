class ProductListPage {
    private addToCart: string;
    private proceedToCheckout: string

    constructor() {
        this.addToCart ="#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
        this.proceedToCheckout = ".button-container > a.btn.btn-default.button.button-medium"
    }

    public addCart(): void {
        cy.get(this.addToCart).click()
    }

    public clickProceedToCheckout(): void {
        cy.get(this.proceedToCheckout).click()
    }
}

export { ProductListPage }

