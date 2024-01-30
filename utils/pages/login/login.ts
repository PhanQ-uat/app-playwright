import { Locator, Page, expect } from "@playwright/test";
import { Utilities } from "../../utilities";

type LoginCredentials = { username?: string; password?: string; };

export class Login {
    readonly page: Page;
    readonly _input_userName: Locator;
    readonly _input_password: Locator;
    readonly _btn_btnSubmit: Locator;
    readonly _txt_headerDashboard: Locator;

    // Constructor for the Login class
    constructor(page: Page) {
        this.page = page;
        // Locators for various elements on the login page
        this._input_userName = page.locator('//input[@id="Email"]');
        this._input_password = page.locator('//input[@id="Password"]');
        this._btn_btnSubmit = page.locator('//button[@type="submit"]');
        this._txt_headerDashboard = page.locator('h1:has-text("Dashboard")');
    }

    // Fills in the username input
    async fillUsername(username: string) {
        await this._input_userName.isVisible(); // Wait for the username input to be visible
        await this._input_userName.clear(); // Clear the username input
        await this._input_userName.fill(username); // Fill in the username
        await expect(this._input_userName).toHaveValue(username); // Check if the input has the expected value
    }

    // Fills in the password input
    async fillPassword(password: string) {
        await this._input_password.isVisible(); // Wait for the password input to be visible
        await this._input_password.clear(); // Clear the password input
        await this._input_password.fill(password); // Fill in the password
        await expect(this._input_password).not.toBeEmpty(); // Check if the input is not empty
    }

    // Clicks the Login button
    async clickLoginBtn() {
        await this._btn_btnSubmit.isVisible(); // Wait for the login button to be visible
        await this._btn_btnSubmit.waitFor({ state: 'visible' }); // Ensure the button is in a visible state
        await this._btn_btnSubmit.click(); // Click the login button
    }

    // Logs in with provided credentials or defaults from environment variables
    async loginIntoTheHomePage({
        username = process.env.LOGIN_USERNAME!,
        password = process.env.LOGIN_PASSWORD!
    }: LoginCredentials = {}) {
        // Fill in the username and password, click login, and wait for the dashboard header to be visible
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickLoginBtn();
        await expect(this._txt_headerDashboard).toBeVisible({ timeout: 60000000 }); // Wait for the dashboard header to be visible
        await this._txt_headerDashboard.isVisible(); // Additional check for visibility
        await Utilities.waitForVisiableWithoutThrowing(this._txt_headerDashboard); // Utility function to wait for visibility without throwing errors
    }
}
