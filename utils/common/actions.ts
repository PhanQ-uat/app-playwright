import { Locator, Page } from "@playwright/test";

export class Actions {
    readonly page: Page;
    readonly _btnIsClicked: Locator;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForPageLoad() {
        await this.page.waitForTimeout(5000);
    }
    /**
    * Waits for the element identified by the provided locator to become visible,
    * and then verifies if its text content matches the expected text.
    * Throws an error if the text content doesn't match within the specified timeout.
    * @param locator - The Playwright Locator object representing the element to verify.
    * @param expectedText - The expected text content of the element.
    */
    async verifyElementText(locator: Locator, expectedText: string) {
        await locator.isVisible({ timeout: 3000 });
        const actualText = await locator.textContent();
        if (actualText !== expectedText) {
            throw new Error(`Element text mismatch. Expected: "${expectedText}", Actual: "${actualText}"`);
        }
    }
    

}
