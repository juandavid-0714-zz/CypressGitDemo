import {UploadPage} from "../page/index";

describe("Upload Files", () => {
  let uploadPage: UploadPage;

  before(() => {
    uploadPage = new UploadPage();
  });

  it("Uploading a file...", () => {
    uploadPage.visitUploadDemoSite();
    uploadPage.uploadFile("fileTest.PNG");
    uploadPage.verifyFileName("fileTest.PNG");
  });
});
