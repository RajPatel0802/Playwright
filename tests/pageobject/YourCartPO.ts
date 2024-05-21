import { expect, Locator, Page } from "@playwright/test";

export class YourCartPO {
    page: Page
    headerText: Locator

    constructor(page: Page) {
        this.page = page;
        this.headerText = page.locator(".title")
    }

    async getHeaderTextOfYourCart() {
        return await this.headerText.innerText()
    }
}