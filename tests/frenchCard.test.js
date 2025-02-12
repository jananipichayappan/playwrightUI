import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { CardPage } from '../pages/cardPage';
import { FormPage } from '../pages/formPage';

test('Verify the French card', async ({ page }) => {
  // Initialize Page Objects
  const homePage = new HomePage(page);
  const cardPage = new CardPage(page);
  const formPage = new FormPage(page);

  // Navigate to the French American Express homepage
  await page.goto('https://www.americanexpress.com/fr-fr/?inav=NavLogo');

  // Handle cookies popup (Decline Cookies)
  await homePage.clickDeclineCookies();

  // Navigate to "Cartes" (Cards) page
  await homePage.goToCartesPage();

  // Ensure cookies popup is declined again if it appears
  await homePage.clickDeclineCookies();

  // Click "En Savoir Plus" (Learn More) on a specific card
  await cardPage.clickEnSavoirPlus();

  // Click on "Demande Carte" (Apply for a Card)
  await formPage.clickDemandeCarte();

  // Define form data for submission
  const formData = {             
    'Nom': '1211', 
    'Adresse e-mail': 'test@gmail.com',
    'Numéro de téléphone portable': '12233232323'
  };

  // Fill out the form with test data
  await formPage.fillForm(formData);  

  // Submit the form
  await formPage.submitForm();

  // Verify that an error message is displayed (expected due to invalid input)
  await formPage.verifySubmitErrorMessage();
});
