class DownloadPage {
    private downloadDemoSite: string;
    private textArea: string;
    private generateFileBtn: string;
    private downloadBtn: string;
    private pathDownload: string;
    
    constructor() {
      this.downloadDemoSite = "http://demo.automationtesting.in/FileDownload.html";
      this.textArea = "#textbox";
      this.generateFileBtn = "#createTxt";
      this.downloadBtn = "#link-to-download";
      this.pathDownload = "cypress/downloads/info.txt"
    }
  
    public visitDownloadDemoSite(): void {
      cy.visit(this.downloadDemoSite);
    }

    public generateFile(data: string): void {
      cy.get(this.textArea).type(data);
      cy.get(this.generateFileBtn).click();
    }

    public downloadFile(): void {
      cy.get(this.downloadBtn).click();
    }

    public verifyContent(content: string): void {
      cy.readFile(this.pathDownload).should('eq', content)
    }
  
  }
  
  export { DownloadPage };
