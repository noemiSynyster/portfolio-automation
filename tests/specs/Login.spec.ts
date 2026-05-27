import { users } from '../test-data/users';
import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { AccountPage } from '../../src/pages/AccountPage';
import { ROUTES } from '../../src/config/routes';

test.describe('Login flow', () => {
  test('User can login and logout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const accountPage = new AccountPage(page);

    await page.goto(ROUTES.LOGIN);

    await loginPage.login(users.validUser.email, users.validUser.password);

    await accountPage.assertUserIsLoggedIn(users.validUser.name);
    await accountPage.logout();
  });
});
