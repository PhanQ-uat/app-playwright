import { Page, TestInfo } from "@playwright/test";
import * as fs from 'fs';

// Root path for storing screenshots
const rootPath = './screenshot/';

// Function to create a folder if it doesn't exist
function createFolder(folderPath: string): void {
    const pathSS = rootPath + folderPath;
    try {
        if (!fs.existsSync(pathSS)) {
            fs.mkdirSync(pathSS);
            console.log(`Folder is created: ${pathSS}`);
        } else {
            console.warn(`Folder already exists: ${pathSS}`);
        }
    } catch (error) {
        console.error(`Error creating folder: ${error}`);
    }
}

// Function to count the number of files in a folder
function countFilesInFolder(folderPath: string): number {
    try {
        const files = fs.readdirSync(folderPath);
        return files.length;
    } catch (error) {
        console.error(`Error reading files in '${folderPath}': ${error.message}`);
        return 0;
    }
}

// Class for handling screenshots
export class Screenshot {
    readonly page: Page;
    readonly testInfo: TestInfo;
    private screenshotIndex: number;

    // Constructor
    constructor(page: Page, testInfo: TestInfo) {
        this.page = page;
        this.testInfo = testInfo;
        this.screenshotIndex = 0; // Initialize index to 0
    }

    // Get the title of the test
    getTestTitle(): string {
        return this.testInfo.title;
    }

    // Get the directory path for storing screenshots
    getTestDir(): string {
        return this.testInfo.titlePath[1];
    }

    // Method to take a screenshot
    async takeScreenshot(): Promise<void> {
        const testPath = this.getTestDir();
        createFolder(testPath);
        const testCaseName = this.getTestTitle().split(': ')[0];

        // Count the number of existing screenshots in the folder
        let numberImg = countFilesInFolder(`${rootPath}/${testPath}`);
        console.log(`Number of existing screenshots: ${numberImg}`);

        // Increment the screenshot index for the new screenshot
        this.screenshotIndex++;

        // Define the file name for the new screenshot
        const screenshotFileName = `${rootPath}/${testPath}/${testCaseName}_SS${this.screenshotIndex}.png`;
        console.log(`Screenshot file name: ${screenshotFileName}`);

        // Take the screenshot and save it with the specified file name
        await this.page.screenshot({ path: screenshotFileName });
    }
}
