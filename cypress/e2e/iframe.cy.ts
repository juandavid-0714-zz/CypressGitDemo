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
    iframePage.getFrameTitleHTML().should("have.text", htmlText);
  });

  it.only("Iframe CSS page", () => {
    iframePage.goToCssPageInFrame();
    // cy.wait(1000);
    iframePage.getFrameTitleCSS().should("have.text", cssText);
  });
});
