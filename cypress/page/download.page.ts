class DownloadPage {
    private downloadDemoSite: string;
    private downloadBtn: string;
   
    constructor() {
      this.downloadDemoSite = "https://demoqa.com/upload-download";
      this.downloadBtn = "#downloadButton";
    }
  
    public visitDownloadDemoSite(): void {
      cy.visit(this.downloadDemoSite);
    }

    public downloadFile(): void {
      cy.get(this.downloadBtn).click();
    }

    public verifyContent(path: string): void {
      cy.readFile(path).should('exist');
    }
  
  }
  
  export { DownloadPage };
