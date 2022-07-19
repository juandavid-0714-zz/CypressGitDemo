import {DownloadPage, UploadPage} from "../page/index";

describe("Uploading and downloading Files", () => {
  let uploadPage: UploadPage;
  let downloadPage: DownloadPage;

  beforeEach(() => {
    uploadPage = new UploadPage();
    downloadPage = new DownloadPage();
  });

  it("Uploading a file...", () => {
    uploadPage.visitUploadDemoSite();
    uploadPage.uploadFile("fileTest.PNG");
    uploadPage.verifyFileName("fileTest.PNG");
  });

  it("Downloading file...", () => {
    downloadPage.visitDownloadDemoSite();
    const content = "123456789";
    const filePath = "cypress/downloads/info.txt";
    downloadPage.generateFile(content);
    downloadPage.downloadFile();
    downloadPage.verifyContent(content, filePath);
  });
});