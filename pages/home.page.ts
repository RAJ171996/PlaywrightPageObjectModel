import { Page, Locator } from '@playwright/test';

export class HomePage {
  private demoSitesMenu: Locator;
  private practiceAutomationMenu: Locator;
  private registrationFormLink: Locator;

  constructor(private readonly page: Page) {
    this.demoSitesMenu = page.locator('(//a[contains(text(),"Demo Sites")])[2]');
    this.practiceAutomationMenu = page.locator('(//a[contains(text(),"Practice Automation")])[2]');
    this.registrationFormLink = page.locator('(//a[normalize-space()="Registration Form"])[2]');
  }

  async navigateToHome() {
    await this.page.goto('https://vinothqaacademy.com/');
  }

  async navigateToRegistrationForm() {
    await this.demoSitesMenu.waitFor({ state: 'visible' });
    await this.demoSitesMenu.hover();

    await this.practiceAutomationMenu.waitFor({ state: 'visible' });
    await this.practiceAutomationMenu.hover();

    await this.registrationFormLink.waitFor({ state: 'visible' });
    await this.registrationFormLink.click({ timeout: 10000 }); // CI safety
  }
}
