import { test, expect, Page } from '@playwright/test';
import { App } from '../../../utils/pages/app';

test.describe('Login Tests', () => {
  let commercielApp: App; // Use a different variable name to avoid naming conflicts
  // beforeEach setup
  test.beforeEach(async ({ page, baseURL }) => {
    commercielApp = new App(page);
    
  });

  // Actual login test
  test('it should login successfully', async () => {
    await commercielApp.Login.loginIntoTheHomePage({ username: 'admin@yourstore.com', password: 'admin' });

    // Additional steps or assertions if needed
    // await myApp.dashboard._btn_collapse.click();
  });
});
