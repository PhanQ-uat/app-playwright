import { Locator, Page } from "@playwright/test";

export class Dashboard {
    readonly page: Page;
    readonly _btn_collapse: Locator;
    readonly _txt_title: Locator;

    constructor(page: Page) {
        this.page = page;
        this._btn_collapse = page.locator('//div[@id="configuration-steps-card"]//button[1]');
        this._txt_title = page.locator('//div[@id="configuration-steps-card"]//h4');
    }
    async getUnreadMessagesCount() {
        return await this._txt_title.textContent();
    }
}