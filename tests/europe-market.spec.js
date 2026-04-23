import { test, expect } from '@playwright/test';

test('главная страница открывается', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Europe Market/);
});

test('навигация содержит все разделы', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('nav a[data-ru="Главная"]')).toBeVisible();
  await expect(page.locator('nav a[data-ru="Продукты"]')).toBeVisible();
  await expect(page.locator('nav a[data-ru="О нас"]')).toBeVisible();
});
test('кнопка купона открывает форму', async ({ page }) => {
  await page.goto('/');
  await page.locator('text=Получить купон').first().click();
  await expect(page.locator('text=Получите купон 5% OFF').first()).toBeVisible();
});
test('адрес магазина виден на странице', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('text=9131 College Pkwy').first()).toBeVisible();
});

test('кнопка чата видна', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.chat-toggle, .chat-icon, [onclick*="chat"], [onclick*="Chat"]').first()).toBeVisible();
});
