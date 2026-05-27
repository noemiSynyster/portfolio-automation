import { expect, Page } from '@playwright/test';

export class AccountPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private userMenuButton = () => this.page.getByRole('button', { name: /Jane Doe/i });

  private logoutLink = () => this.page.getByLabel('Sign out');

  async assertUserIsLoggedIn(userName: string) {
    await expect(
      this.page.getByRole('button', { name: new RegExp(`^${userName}$`, 'i') })
    ).toBeVisible();
  }

  async logout() {
    await this.userMenuButton().click();
    await this.logoutLink().click();

    await expect(this.page).toHaveURL(/\/login/i);
  }
}
