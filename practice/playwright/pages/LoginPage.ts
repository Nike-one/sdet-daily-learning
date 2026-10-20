import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async login(user: string, pass: string) {
    await this.page.getByTestId('username').fill(user);
    await this.page.getByTestId('password').fill(pass);
    await this.page.getByTestId('login-button').click();
  }
}
