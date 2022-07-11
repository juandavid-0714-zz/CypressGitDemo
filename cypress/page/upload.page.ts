
class UploadPage {
  private uploadDemoSite: string;
  private selectFile: string;
  private titleFileName: string;
  
  constructor() {
    this.uploadDemoSite = "http://demo.automationtesting.in/FileUpload.html";
    this.selectFile = "input#input-4";
    this.titleFileName = ".file-footer-caption"
  }

  public visitUploadDemoSite(): void {
    cy.visit(this.uploadDemoSite);
  }

  public uploadFile(fileName: string): void {
    cy.get(this.selectFile).attachFile(fileName);
  }

  public verifyFileName(fileName: string): void{
    cy.get(this.titleFileName).should('have.attr', 'title', fileName)
  }

}

export { UploadPage };
