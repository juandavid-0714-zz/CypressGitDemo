
class IframePage {
    private iFrameSite: string;
    
    constructor() {
      this.iFrameSite = "https://www.w3schools.com/html/html_iframe.asp";
    }
  
    public visit(): void {
      cy.visit(this.iFrameSite);
    }
  
    public getFrameTitle(htmlText: string): void {
      cy.get('iframe').then($iframe => {
        const $body = $iframe.contents().find('body') 
        cy.wrap($body) 
          .find('h1')
          .should('have.text',htmlText)
      })
    }
  
    public goToCssPageInFrame(cssText: string): void{
        cy.get('iframe').then($iframe => {
            const $body = $iframe.contents().find('body') 
            cy.wrap($body) 
              .find('a')
              .contains(cssText)
              .click()
          })
    }
  
  }
  
  export { IframePage };
