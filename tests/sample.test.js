const { test, expect } = require('@playwright/test');
const allure = require('allure-playwright');
//https://stackoverflow.com/questions/43322607/allure-createstep-is-not-a-function
test('basic test', async ({ page }) => {
    await test.step("step1-----", async () => {
        await page.goto('https://playwright.dev/');
        const title = page.locator('.navbar__inner .navbar__title');
        await expect(title).toHaveText('Playwright');
    });
    await test.step("step2----", async () => {
        await page.goto('https://playwright.dev/');
        const title = page.locator('.navbar__inner .navbar__title');
        await expect(title).toHaveText('Playwright1');
    });
    await test.step("step3----", async () => {
        await page.goto('https://playwright.dev/');
        const title = page.locator('.navbar__inner .navbar__title');
        await expect(title).toHaveText('Playwright');
    });
});
