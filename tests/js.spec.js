import { test, expect } from '@playwright/test';

test('verify Instagram URL', async ({ page }) => {
  await page.goto('https://www.instagram.com/');

  const title = await page.title();
  console.log('Page title is: ' + title);

  const url = page.url();
  console.log('Page URL is: ' + url);

  await expect(page).toHaveURL('https://www.instagram.com/');
  await expect(page).toHaveTitle('Instagram');
  await page.waitForTimeout(3000);

  console.log('Instagram URL and title verified');

}); 