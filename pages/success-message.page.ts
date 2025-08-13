import { Locator, Page, expect } from '@playwright/test';

export class SuccessMessagePage {

  private successMessageLocator: Locator;


  constructor(private readonly page: Page) {
    this.page= page;

    this.successMessageLocator = page.locator('#messageContainer');
  }

  async validateSuccessMessage(expected: string) {

    // Wait for the message to be visible
    await expect(this.successMessageLocator).toBeVisible({ timeout: 10000 });
    // Retrieve text content
    const actualMessage = await this.successMessageLocator.textContent();
    console.log(actualMessage);
    
    // Partial match validation
    expect(actualMessage).toContain(expected);
  }
}
