// pages/homePage.ts
import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  granularBannerButton = () => this.page.locator('[data-testid="granular-banner-button-decline-all"]');

  // click decline cookies
  async clickDeclineCookies() {
    await this.granularBannerButton().click();
  }

  // click go to cartes page
  async goToCartesPage() {
    await this.page.getByRole('link', { name: 'Cartes American Express®' }).click();
  }
}
