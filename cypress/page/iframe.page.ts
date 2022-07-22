
class IframePage {
    private iFrameSite: string;
    private iFrameSelector: string;
    private cssSelector: string;
    
    constructor() {
      this.iFrameSite = "https://www.w3schools.com/html/html_iframe.asp";
      this.iFrameSelector = "[title='W3Schools HTML Tutorial']";
      this.cssSelector = "[title='CSS Tutorial']"
    }
  
    public visit(): void {
      cy.visit(this.iFrameSite);
    }
  
    public getFrameTitleHTML() {
      return cy.iframe(this.iFrameSelector).find('h1');
    }
  
    public goToCssPageInFrame(): void{
      cy.iframe(this.iFrameSelector).find(this.cssSelector).click();  
    }

    public getFrameTitleCSS() {
     cy.wait(1000);
     return cy.iframe(this.iFrameSelector).find('h1');
    }
  
  }
  
  export { IframePage };
