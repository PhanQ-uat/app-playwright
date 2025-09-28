import { Locator } from "@playwright/test";

export class Utilities {

    static async waitForVisiableWithoutThrowing(local:Locator) : Promise <boolean>{
        let isVisiable = await this.waitUntilTrueOrTimeout(() => local.isVisible())
        return isVisiable
    }

    static async waitUntilTrueOrTimeout(actions: () => Promise<boolean>, timeout: number = 500): Promise<boolean>{
        const maxtime = Date.now() + timeout;
        const step = 500;
        while (Date.now() < maxtime) {
            if(await actions()){
                return true;
            }else{
                await this.delay(step);

            }
        }        
        return false;
    }

    private static delay (ms: number){
        return new Promise(resolve => setTimeout(resolve,ms))
    }
}