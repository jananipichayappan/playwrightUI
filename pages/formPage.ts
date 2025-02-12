// pages/formPage.ts
import { expect, Page } from '@playwright/test';

export class FormPage {
  constructor(private page: Page) {}

  // click demande carte
  async clickDemandeCarte() {
    await this.page.locator('#pdp-side-railwrapper').getByRole('link', { name: 'Demandez votre Carte' }).click();
  }

  // fill form data
  async fillForm(fields: { [key: string]: string }) {
    for (const [fieldName, value] of Object.entries(fields)) {
      const inputField = this.page.getByRole('textbox', { name: fieldName, exact: true });
      await inputField.fill(value);
    }
  }

  // click submit form
  async submitForm() {
    await this.page.locator('button').filter({ hasText: 'Sauvegarder et Continuer' }).click({ force: true });
  }

  // verify submit error message 
  async verifySubmitErrorMessage() {
    const errorMessage = this.page.getByText('Veuillez corriger les erreurs ci-dessus pour continuer.' );
    await expect(errorMessage).toBeVisible();
  }
}
