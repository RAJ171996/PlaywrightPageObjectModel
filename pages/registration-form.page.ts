import { Page, Locator } from '@playwright/test';

export class RegistrationFormPage {
  
  private firstNameInput: Locator;
  private lastNameInput: Locator;
  private genderMaleOption: Locator;
  private seleniumWebDriverCheckbox: Locator;
  private devOpsCheckbox: Locator;
  private streetAddressInput: Locator;
  private apartmentInput: Locator;
  private cityInput: Locator;
  private stateInput: Locator;
  private zipCodeInput: Locator;
  private selectCountry: Locator;
  private emailInput: Locator;
  private dateOfDemoInput: Locator;
  private convinientTimeHHInput: Locator;
  private convinientTimeMMInput: Locator
  private mobileNumberInput: Locator;
  private enterYourQueryTextArea: Locator;
  private exampleInput: Locator;
  private submitButton: Locator;

  constructor(private readonly page: Page) {
    this.page = page;

    this.firstNameInput = page.locator('#vfb-5');
    this.lastNameInput = page.locator('#vfb-7');
    this.genderMaleOption = page.locator('#vfb-31-1');
    this.seleniumWebDriverCheckbox = page.locator('#vfb-20-0');
    this.devOpsCheckbox = page.locator('#vfb-20-3');
    this.streetAddressInput = page.locator('#vfb-13-address');
    this.apartmentInput = page.locator('#vfb-13-address-2');
    this.cityInput = page.locator('#vfb-13-city');
    this.stateInput = page.locator('#vfb-13-state');
    this.zipCodeInput = page.locator('#vfb-13-zip');
    this.selectCountry = page.locator("#vfb-13-country")
    this.emailInput = page.locator('#vfb-14');
    this.dateOfDemoInput = page.locator('#vfb-18');
    this.convinientTimeHHInput = page.locator('#vfb-16-hour');
    this.convinientTimeMMInput = page.locator('#vfb-16-min');
    this.mobileNumberInput = page.locator('#vfb-19');
    this.enterYourQueryTextArea = page.locator('#vfb-23');
    this.exampleInput = page.locator('#vfb-3');
    this.submitButton = page.locator('#vfb-4');
  }

  async enterFirstName(name: string) {
    await this.firstNameInput.fill(name);
  }

  async enterLastName(name: string) {
    await this.lastNameInput.fill(name);
  }

  async selectGenderMale() {
    await this.genderMaleOption.check();
  }

  async selectSeleniumWebDriverCheckbox(){
    await this.seleniumWebDriverCheckbox.check();
  }

  async unCheckDevOpsCheckbox(){
    await this.devOpsCheckbox.check();
  }

  async enterStreetAddress(street: string) {
    await this.streetAddressInput.fill(street);
  }

  async enterApartment(apartment: string) {
    await this.apartmentInput.fill(apartment);
  }   

  async enterCity(city: string) {
    await this.cityInput.fill(city);
  }

  async enterState(state: string) {
    await this.stateInput.fill(state);
  }

  async enterZipCode(zip: string) {
    await this.zipCodeInput.fill(zip);
  }

  async selectYourCountry(country: string) {
    await this.selectCountry.selectOption(country);
  }
  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async enterDateOfDemo(date: string) {
    await this.dateOfDemoInput.fill(date);
  }

  async enterConvenientTimeHH(hour: string) {
    await this.convinientTimeHHInput.selectOption(hour);
  }

  async enterConvenientTimeMM(minute: string) {
    await this.convinientTimeMMInput.selectOption(minute);
  }

  async enterMobileNumber(number: string) {
    await this.mobileNumberInput.fill(number);
  }

  async enterQuery(query: string) {
    await this.enterYourQueryTextArea.fill(query);
  }

  async enterExample(example: string) {
    await this.exampleInput.fill(example);
  }

  async submitForm() {
    await this.submitButton.click();  
  }




  

  
  

 
}
