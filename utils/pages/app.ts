import { Login } from "../../utils/pages/login/login";
import { Locator, Page, expect } from "@playwright/test";


export class App{

    /*
    readonly page: Page;
    readonly name:CLass   
    */

    readonly page: Page;
    readonly Login: Login;

    constructor(page:Page){
        this.page = page;
        this.Login = new Login(page)
    }

}