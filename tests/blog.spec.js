import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Projects' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Blog' }).click();
  await page.locator('#taglist').getByText('Automation').click();
  await page.getByText('Cyber Threats').click();
  await page.locator('a').filter({ hasText: 'Introduction To Security' }).click();
  await page.getByRole('link', { name: 'Blog' }).click();
  await page.locator('#taglist').getByText('Testing').click();
  await page.locator('a').filter({ hasText: 'Introduction To Security' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page .getByAltText('Photo of soundharya').click();
  await expect(page).toHaveURL('http://127.0.0.1:8080/index.html');
  await expect(page.locator('.logo-text')).toHaveText('Soundharya P');
  await page.getByRole('link', { name: 'Blog' }).click();

  // Wait for the tags to be visible
  //await page.waitForSelector('#taglist .tags');

  const tagsArray = await page.evaluate(() => {
    // Select all elements with class 'tags'
    const tagsElements = document.querySelectorAll('#taglist .tags');
    // Map the NodeList to an array of text contents
    return Array.from(tagsElements).map(tag => tag.textContent.trim());
  });
  // Log the array (optional)
  console.log(typeof tagsArray);
  console.log(tagsArray);

  // Example assertion to verify the array contains expected tags
  expect(tagsArray).toEqual(expect.arrayContaining([
    'All',
    'Automation',
    'Productivity',
    'RPA',
    'Security',
    'Testing',
    'Cyber Threats',
    'GitHub',
    'git'
  ]));
});