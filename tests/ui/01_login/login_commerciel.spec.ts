import { test, expect, Page } from '@playwright/test';
import { App } from '../../../utils/app';
import dotenv from 'dotenv';
dotenv.config({ path: "../../.env" });

test.describe('Login Tests', () => {
  let commercielApp: App; 
  test.beforeEach(async ({ page }, testInfo) => {
    commercielApp = new App(page, testInfo);
    await page.setViewportSize({ width: 1336, height: 768 });
    await page.goto('/');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  })

  test('Login_TC_001: It should login successfully', async ({ page }) => {
    await commercielApp.Login.loginIntoTheHomePage("admin","123456" );
    await commercielApp.Screenshot.takeScreenshot()
    
  });

  test('Login_TC_002: It should login successfully', async ({ page }) => {
    await commercielApp.Login.loginIntoTheHomePage("admin","123456" );
    await commercielApp.Screenshot.takeScreenshot()
    
  });

});
