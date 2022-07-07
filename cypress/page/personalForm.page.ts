class PersonalFormPage {
    private toolsQaPageURL: string;
    private name: string;
    private lastName: string;
    private email: string;
    private gender: string;
    private mobileNumber: string;
    private currentAddress: string;
    private state: string;
    private city: string;
    private submitBtn: string;
    private modalBody: string;

    constructor() {
        this.toolsQaPageURL = "https://demoqa.com/automation-practice-form"
        this.name = "#firstName"
        this.lastName = "#lastName"
        this.email = "#userEmail"
        this.gender = "#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label"
        this.mobileNumber = "#userNumber"
        this.currentAddress = "#currentAddress";
        this.state = "input#react-select-3-input";
        this.city = "input#react-select-4-input";
        this.submitBtn = "#userForm";
        this.modalBody = ".modal"

    }

    public visitToolsQaPage(): void {
        cy.visit(this.toolsQaPageURL)
    }

    public fillForm(userInformation: any): void{
       cy.get(this.name).type(userInformation.name)
       cy.get(this.lastName).type(userInformation.lastName)
       cy.get(this.email).type(userInformation.email)
       cy.get(this.gender).click()
       cy.get(this.mobileNumber).type(userInformation.mobileNumber)
       this.selectHobbies(userInformation.hobbies)
       cy.get(this.currentAddress).type(userInformation.currentAddress)
       cy.get(this.state).focus().type(`${userInformation.state}{enter}`)
       cy.get(this.city).focus().type(`${userInformation.city}{enter}`)
    }

    public selectHobbies(hobbies: string[]){
        hobbies.forEach(element => {
         cy.contains(element).click();
        });
    }

    public submit(): void{
        cy.get(this.submitBtn).submit()
    }

    public verifyModal(userInformation: any): void{
       cy.get(this.modalBody).then(($modal) => {
        const modalText = $modal.text();
        expect(modalText).contains(userInformation.name)
        expect(modalText).contains(userInformation.lastName)
        expect(modalText).contains(userInformation.email)
        expect(modalText).contains(userInformation.gender)
        expect(modalText).contains(userInformation.mobileNumber)
        expect(modalText).contains(userInformation.hobbies[0])
        expect(modalText).contains(userInformation.hobbies[1])
        expect(modalText).contains(userInformation.currentAddress)
        expect(modalText).contains(userInformation.state)
        expect(modalText).contains(userInformation.city)
       })
     }

}

export { PersonalFormPage }
