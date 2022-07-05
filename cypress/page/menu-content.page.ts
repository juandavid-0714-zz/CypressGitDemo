class MenuContentPage {
    private tShirtMenu: string;
    private menuContentPageURL: string;
    private dresses: string

    constructor() {
        this.tShirtMenu = "#block_top_menu > ul > li > [title='T-shirts']";
        this.dresses = "#block_top_menu > ul > li > [title='Dresses']";
        this.menuContentPageURL = "http://automationpractice.com/"
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

    public goToTShirtMenu(): void {
        cy.get(this.tShirtMenu).click()
    }

    public gotToDressesMenu(): void {
        cy.get(this.dresses).click()
    }
}

export { MenuContentPage }
