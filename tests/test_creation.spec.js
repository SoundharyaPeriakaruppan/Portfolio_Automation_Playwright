import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.vccgenerator.org/');
  await page.getByLabel('BRAND').selectOption('VISA');
  await page.getByLabel('Country').selectOption('INDIA');
  await page.getByLabel('BANK').selectOption('CANARA BANK');
  await page.getByRole('textbox', { name: 'CVV/CVC' }).click();
  await page.getByRole('textbox', { name: 'CVV/CVC' }).fill('253');
  await page.getByRole('link', { name: ' GENERATE' }).click();
  await page.getByLabel('result').click();
 // await page.frameLocator('iframe[name="aswift_4"]').getByLabel('Close ad').click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'DOWNLOAD' }).click();
  const download = await downloadPromise;
});