
class IframePage {
    private iFrameSite: string;
    private iFrameSelector: string;
    private cssSelector: string;
    private cssFrameUrl: string;
    
    constructor() {
      this.iFrameSite = "https://www.w3schools.com/html/html_iframe.asp";
      this.iFrameSelector = "[title='W3Schools HTML Tutorial']";
      this.cssSelector = "[title='CSS Tutorial']";
      this.cssFrameUrl = "https://www.w3schools.com/css/"
    }
  
    public visit(): void {
      cy.visit(this.iFrameSite);
    }
  
    public getFrameTitle() {
      return cy.iframe(this.iFrameSelector).find('h1');
    }
  
    public goToCssPageInFrame(): void{
      cy.iframe(this.iFrameSelector).find(this.cssSelector).click();
      cy.frameLoaded(this.iFrameSelector, {url:this.cssFrameUrl})
    }
  
  }
  
  export { IframePage };
