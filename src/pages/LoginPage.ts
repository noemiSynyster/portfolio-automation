import { expect } from '@playwright/test';
import { ROUTES } from '../config/routes';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  async open() {
    await this.page.goto(ROUTES.LOGIN);
  }

  async login(email: string, password: string) {
    await this.page.getByLabel('Email address *').fill(email);
    await this.page.getByLabel('Password *').fill(password);
    await this.page.getByRole('button', { name: /login/i }).click();
  }

  async assertLoginSuccess() {
    await expect(this.page).toHaveURL(new RegExp(`${ROUTES.ACCOUNT}$`));
  }

  async assertUserNameIsDisplayed(expectedName: string) {
    const userName = this.page.getByRole('button', {
      name: new RegExp(expectedName, 'i'),
    });

    await expect(userName).toBeVisible();
  }
}
