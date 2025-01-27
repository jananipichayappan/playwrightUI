import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { CardPage } from '../pages/cardPage';
import { FormPage } from '../pages/formPage';

test('Verify the french card', async ({ page }) => {
  const homePage = new HomePage(page);
  const cardPage = new CardPage(page);
  const formPage = new FormPage(page);

  await page.goto('https://www.americanexpress.com/fr-fr/?inav=NavLogo');
  await homePage.declineCookies();
  await homePage.goToCartesPage();
  await homePage.declineCookies();
  await cardPage.clickEnSavoirPlus();
  await formPage.clickDemandeCarte();

  const formData = {
    'Prénom': '12',              
    'Nom': '1211',                
    'Adresse e-mail': 'test@gmail.com',
    'Numéro de téléphone portable': '12233232323'
  };
  
  await formPage.fillForm(formData);  
  await formPage.submitForm();
})
