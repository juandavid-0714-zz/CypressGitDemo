
class UploadPage {
  private uploadDemoSite: string;
  private selectFile: string;
  private uploadBtn: string;
  private titleFileName: string;
  
  constructor() {
    this.uploadDemoSite = "https://the-internet.herokuapp.com/upload";
    this.selectFile = "input#file-upload";
    this.uploadBtn = "input#file-submit"
    this.titleFileName = "div#uploaded-files"
  }

  public visitUploadDemoSite(): void {
    cy.visit(this.uploadDemoSite);
  }

  public chooseFile(fileName: string): void {
    cy.get(this.selectFile).attachFile(fileName);
  }

  public uploadFile(): void {
    cy.get(this.uploadBtn).click();
  }

  public verifyFileName(fileName: string): void{
    cy.get(this.titleFileName).should('contain',fileName)
  }

}

export { UploadPage };
