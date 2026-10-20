import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './practice/playwright',
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: 'https://www.saucedemo.com',
    testIdAttribute: 'data-test',
  },
});

