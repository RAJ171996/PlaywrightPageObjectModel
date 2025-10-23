import { test } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { RegistrationFormPage } from '../pages/registration-form.page';
import { SuccessMessagePage } from '../pages/success-message.page';

test('User can submit the registration form successfully', async ({ page }) => {
  const homePage = new HomePage(page);
  const registrationForm = new RegistrationFormPage(page);
  const successPage = new SuccessMessagePage(page);

  await homePage.navigateToHome();
  await homePage.navigateToRegistrationForm();
  await registrationForm.verifyOnRegistrationFormPage();
    await registrationForm.enterFirstName('Raj');
    await registrationForm.enterLastName('Kumar');
    await registrationForm.selectGenderMale();
    await registrationForm.selectSeleniumWebDriverCheckbox();
    await registrationForm.unCheckDevOpsCheckbox();
    await registrationForm.enterStreetAddress('Sector-15');
    await registrationForm.enterApartment('A-117');
    await registrationForm.enterCity('Noida');
    await registrationForm.enterState('Uttar Pradesh');
    await registrationForm.enterZipCode('201301');
    await registrationForm.selectYourCountry('India');
    await registrationForm.enterEmail('raj.kumar@gmail.com');
    await registrationForm.enterDateOfDemo('07/24/1996');
    await registrationForm.enterConvenientTimeHH('05');
    await registrationForm.enterConvenientTimeMM('10');
    await registrationForm.enterMobileNumber('9876543210');
    await registrationForm.enterQuery('What is your course fees?');
    await registrationForm.enterExample('33');
    await registrationForm.submitForm();
    await page.waitForTimeout(2000);
    await successPage.validateSuccessMessage('Registration Form is Successfully Submitted.');
});
