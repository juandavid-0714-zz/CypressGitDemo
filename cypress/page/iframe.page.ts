
class IframePage {
    private iFrameSite: string;
    private iFrameSelector: string;
    private cssSelector: string;

    
    constructor() {
      this.iFrameSite = "https://www.w3schools.com/html/html_iframe.asp";
      this.iFrameSelector = "iframe[title*='Schools']";
      this.cssSelector = "a[title^='CSS']"
    }
  
    public visit(): void {
      cy.visit(this.iFrameSite);
    }
  
    public getFrameTitle(htmlText: string): void {
      cy.iframe(this.iFrameSelector).find('h1').should("have.text", htmlText);
    }
  
    public goToCssPageInFrame(): void{
      cy.iframe(this.iFrameSelector).find(this.cssSelector).click();  
    }
  
  }
  
  export { IframePage };
