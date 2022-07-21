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
    uploadPage.chooseFile("fileTest.PNG");
    uploadPage.uploadFile();
    uploadPage.verifyFileName("fileTest.PNG");
  });

  it("Downloading file...", () => {
    downloadPage.visitDownloadDemoSite();
    const fileName = "sampleFile.jpeg";
    downloadPage.downloadFile();
    const filePath = `cypress/downloads/${fileName}`;
    downloadPage.verifyContent(filePath);
  });
});
