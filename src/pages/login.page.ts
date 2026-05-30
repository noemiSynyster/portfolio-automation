import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  // Definición de Locators con modificador 'readonly' por seguridad
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page); // Inicializa la clase padre (BasePage)

    // Localizadores usando buenas prácticas (Accesibilidad y Atributos de Test)
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('.btnSubmit');
    this.errorMessage = page.locator('.alert-danger');
  }

  /**
   * Realiza el flujo completo de inicio de sesión
   */
  async login(email: string, pass: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}
