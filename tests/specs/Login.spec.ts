import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { users } from '../test-data/users';

test('should login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login(users.validUser.email, users.validUser.password);
  await loginPage.assertLoginSuccess();
  await loginPage.assertUserNameIsDisplayed(users.validUser.name);
});
