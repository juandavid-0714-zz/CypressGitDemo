import {IframePage} from "../page/index";

describe("Working with Iframe", () => {
  let iframePage: IframePage;
  const htmlText = "HTML Tutorial";
  const cssText = "CSS Tutorial";
  beforeEach(() => {
    iframePage = new IframePage();
    iframePage.visit();
  });

  it("Iframe HTML page", () => {
    iframePage.getFrameTitle().should("have.text", htmlText);
  });

  it("Iframe CSS page", () => {
    iframePage.goToCssPageInFrame();
    iframePage.getFrameTitle().should("have.text", cssText);
  });
});
