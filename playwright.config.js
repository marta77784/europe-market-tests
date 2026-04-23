import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://europemarket.site',
    headless: true,
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]],
});
