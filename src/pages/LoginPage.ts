import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(email: string, password: string) {
    await this.page.getByLabel('Email address *').fill(email);
    await this.page.getByLabel('Password *').fill(password);
    await this.page.getByRole('button', { name: /login/i }).click();
  }
}
