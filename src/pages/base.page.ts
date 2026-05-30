import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navega a una ruta específica combinándola con la baseURL
   * @param path Ruta secundaria (ej. '/auth/login')
   */
  async navigateTo(path: string): Promise<void> {
    await this.page.goto(path);
  }

  /**
   * Método de ayuda para esperar a que la página esté completamente cargada
   */
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }
}
