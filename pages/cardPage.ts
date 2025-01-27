// pages/cardPage.ts
import { Page } from '@playwright/test';

export class CardPage {
  constructor(private page: Page) {}

  async clickEnSavoirPlus() {
    await this.page.locator('a[alt="En savoir plus"]').nth(1).click();
  }
}
