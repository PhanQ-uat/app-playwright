import { Locator, Page } from "@playwright/test";
type locators = { username?: string; password?: string; };

export class Actions {
    readonly page: Page;
    readonly _btnIsClicked: Locator;

    constructor(page: Page) {
        this.page = page;
        this._btnIsClicked
    }
}