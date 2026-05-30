import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// 1. Definimos los tipos de los Page Objects que estarán disponibles
type MyPageObjects = {
  loginPage: LoginPage;
};

// 2. Extendemos el test base de Playwright para incluir nuestros POs
export const test = base.extend<MyPageObjects>({
  loginPage: async ({ page }, use) => {
    // Se ejecuta antes de cada test que use 'loginPage'
    const loginPage = new LoginPage(page);
    await use(loginPage);
    // Aquí podrías agregar lógica de limpieza (teardown) si fuera necesario
  },
});

// Exportamos también el 'expect' nativo para tenerlo todo en un solo lugar
export { expect } from '@playwright/test';
