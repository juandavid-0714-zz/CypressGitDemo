import {PersonalFormPage} from "../page/index";

describe("Fill the form", () => {
  let personalFormPage: PersonalFormPage;

  before(() => {
    personalFormPage = new PersonalFormPage();
  });

  it("Fill the form in tools QA Page", () => {
    const personalInformation = {
      name: "Holmes",
      lastName: "Salazar",
      email: "hibarras@email.com",
      gender: "Male",
      mobileNumber: "3656589156",
      hobbies: ["Music", "Reading"],
      currentAddress: "Av siempreViva # 123",
      state: "NCR",
      city: "Delhi",
    };
    personalFormPage.visitToolsQaPage();
    personalFormPage.fillForm(personalInformation);
    personalFormPage.submit();
    personalFormPage.verifyModal(personalInformation);
  });
});
