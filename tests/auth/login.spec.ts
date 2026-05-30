// NOTA: Importamos 'test' y 'expect' desde nuestro FIXTURE, no de @playwright/test
import { test, expect } from '../../src/fixtures/page-objects.fixture';

test.describe('Flujo de Autenticación - Practice Software Testing', () => {
  test('No debería permitir el ingreso con credenciales inválidas', async ({ loginPage }) => {
    // 1. Navegamos a la sección de login (asumiendo que la ruta es /auth/login)
    await loginPage.navigateTo('/auth/login');

    // 2. Intentamos iniciar sesión con datos erróneos
    await loginPage.login('customer@practicesoftaretesting.com', 'welcome01');

    // 3. Validamos el comportamiento esperado
    // Nota: Ajusta el selector/texto según las aserciones reales de la app
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Invalid email or password');
  });
});
