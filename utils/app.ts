import { Login } from "./pages/login/login";
import { Screenshot } from "./common/screenshot"
import { Locator, Page, TestInfo, expect } from "@playwright/test";
import { Dashboard } from "./pages/dashboard";
import { Actions } from "./common/actions";


export class App {

    /*
    readonly page: Page;
    readonly name:CLass   
    */

    readonly page: Page;
    readonly Login: Login;
    readonly Screenshot: Screenshot;
    readonly Dashboard: Dashboard;
    readonly Action: Actions;


    constructor(page: Page, testInfo: TestInfo) {
        this.page = page;
        this.Login = new Login(page);
        this.Dashboard = new Dashboard(page);
        this.Action = new Actions(page);
        this.Screenshot = new Screenshot(page, testInfo)
    }
}