import { Locator, Page } from "@playwright/test";

export class Dashboard {
    readonly page: Page;
    readonly _btn_collapse: Locator;
    readonly _txt_title: Locator;

    constructor(page: Page) {
        this.page = page;
        this._btn_collapse = page.locator('//div[@id="configuration-steps-card"]//button[@data-card-widget="collapse"]');
        this._txt_title = page.locator('//div[@class="card-body"]//h4');
    }
}