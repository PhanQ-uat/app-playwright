import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config({ path: ".env" });

export default defineConfig({
  testDir: './tests/ui/01_login',
  fullyParallel: false,
   forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html',{open:"no"}]],
  globalSetup: require.resolve('./test-setup/global-setup'),
  use: {
    launchOptions: {
      args: ["--start-fullscreen"]
    },
    baseURL: process.env.LOCALHOST,
     trace: 'on-first-retry',
  },
  projects: [
   
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome'},
    // },
   {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    
  ],
});
