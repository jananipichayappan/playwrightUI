// pages/homePage.ts
import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  granularBannerButton = () => this.page.locator('[data-testid="granular-banner-button-decline-all"]');


  async declineCookies() {
    // await this.granularBannerButton().click({ button: 'right' });
    await this.granularBannerButton().click();
  }

  async goToCartesPage() {
    await this.page.getByRole('link', { name: 'Cartes American Express®' }).click();
  }
}
