import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async goto(path: string) {
    await this.page.goto(path);
  }

  async expectUrlContains(path: string) {
    await this.page.waitForURL(`**${path}`);
  }
}
