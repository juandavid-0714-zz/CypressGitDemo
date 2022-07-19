import {IframePage} from "../page/index";

describe("Working with Iframe", () => {
  let iframePage: IframePage;
  const htmlText = "HTML Tutorial";
  beforeEach(() => {
    iframePage = new IframePage();
  });

  it("Iframe page", () => {
    iframePage.visit();
    iframePage.getFrameTitle(htmlText);
    iframePage.goToCssPageInFrame();
  });
});
