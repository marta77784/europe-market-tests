import { test, expect } from '@playwright/test';

test('главная страница открывается', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Europe Market/);
});

test('навигация содержит все разделы', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('text=Главная')).toBeVisible();
  await expect(page.locator('text=Продукты')).toBeVisible();
  await expect(page.locator('text=О нас')).toBeVisible();
});

test('кнопка купона открывает форму', async ({ page }) => {
  await page.goto('/');
  await page.locator('text=Получить купон').click();
  await expect(page.locator('text=5% OFF')).toBeVisible();
});

test('адрес магазина виден на странице', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('text=Fort Myers')).toBeVisible();
});

test('кнопка чата видна', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('text=Чат')).toBeVisible();
});
