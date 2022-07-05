class ProductListPage {
    private addToCartBtn: string;
    private proceedToCheckoutBtn: string

    constructor() {
        this.addToCartBtn ="#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
        this.proceedToCheckoutBtn = "a[title='Proceed to checkout']"
    }

    public addToCart(): void {
        cy.get(this.addToCartBtn).click()
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutBtn).click()
    }
}

export { ProductListPage }
