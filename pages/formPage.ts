// pages/formPage.ts
import { expect, Page } from '@playwright/test';

export class FormPage {
  constructor(private page: Page) {}

  async clickDemandeCarte() {
    await this.page.locator('#pdp-side-railwrapper').getByRole('link', { name: 'Demandez votre Carte' }).click();
  }

  async fillForm(fields: { [key: string]: string }) {
    for (const [fieldName, value] of Object.entries(fields)) {
      const inputField = this.page.getByRole('textbox', { name: fieldName, exact: true });
      await inputField.fill(value);
    }
  }

  async submitForm() {
    await this.page.locator('button').filter({ hasText: 'Sauvegarder et Continuer' }).click({ force: true });
  }

  async verifySubmitErrorMessage() {
    const errorMessage = this.page.locator('span', { hasText: 'Veuillez corriger les erreurs ci-dessus pour continuer.' }).first();
    await expect(errorMessage).toBeVisible();
  }

  async verifyErrorMessage(errorText: string) {
    const errorMessageLocator = this.page.getByText(errorText);
    await expect(errorMessageLocator).toBeVisible(); 
    await expect(errorMessageLocator).toHaveText(errorText); 
  }  
  
}
