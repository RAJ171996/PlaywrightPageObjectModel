import { Page, Locator } from '@playwright/test';

export class HomePage {

    private demoSitesMenu: Locator;
    private practiceAutomationMenu: Locator;
    private registrationFormLink: Locator;

  constructor(private readonly page: Page) {
    this.page = page;
    this.demoSitesMenu = page.locator('(//a[contains(text(),"Demo Sites")])[2]');
    this.practiceAutomationMenu = page.locator('(//a[contains(text(),"Practice Automation")])[2]');
    this.registrationFormLink = page.locator('(//a[normalize-space()="Registration Form"])[2]');
    

  }

  async navigateToHome() {
    await this.page.goto('https://vinothqaacademy.com/');
  }

  async navigateToRegistrationForm() {
    await this.demoSitesMenu.hover();
    await this.practiceAutomationMenu.hover();
    await this.registrationFormLink.click();



   
  }
}
