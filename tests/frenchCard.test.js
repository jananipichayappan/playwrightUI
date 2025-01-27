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
  await cardPage.clickEnSavoirPlus();
  await formPage.clickDemandeCarte();
  await homePage.declineCookies();
  
  const formData = {
    'Prénom': '12',              
    'Nom': '1211',                
    'Adresse e-mail': 'test@gmail.com',
    'Numéro de téléphone portable': '12233232323'
  };
  
  await formPage.fillForm(formData);  
  await formPage.submitForm();
  await formPage.verifyErrorMessage('Prénom obligatoire.');
  await formPage.verifySubmitErrorMessage();
  await formPage.verifyErrorMessage("Téléphone mobile obligatoire en chiffres uniquement et sans espaces. Exemple France, Guadeloupe, Martinique, Guyane, La Réunion, Saint- Barthélemy, Saint Martin, Mayotte: - 0612345678 - 0712345678 IMPORTANT : Pour tout autre pays ou région, dont Polynésie Française et Nouvelle Calédonie, merci de sélectionner l’indicatif du territoire correspondant et saisir le numéro de mobile sans le préfixe « 0 » au début.");
})
