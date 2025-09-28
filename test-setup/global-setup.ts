import {type FullConfig } from '@playwright/test';
import { chromium, Browser, BrowserContext, Page} from 'playwright';

async function globalSetup(config: FullConfig) {
    const browser: Browser = await chromium.launch();
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();
    await page.setViewportSize({ width: 1366, height: 768 });
}
export default globalSetup;
