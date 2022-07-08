import {UploadPage} from "../page/index";

describe("Fill the form", () => {
  let uploadPage: UploadPage;

  before(() => {
    uploadPage = new UploadPage();
  });

  it("Fill the form in tools QA Page", () => {
    uploadPage.visitUploadDemoSite();
    uploadPage.uploadFile("fileTest.PNG");
    uploadPage.verifyFileName("fileTest.PNG");
  });
});
