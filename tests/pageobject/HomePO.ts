import { expect, Locator, Page } from "@playwright/test";

export class HomePO {
    page: Page
    headerText: Locator
    cartBadgeText: Locator
    cartButton: Locator

    constructor(page: Page) {
        this.page = page
        this.headerText = page.locator(".title")
        this.cartBadgeText = page.locator(".shopping_cart_badge")
        this.cartButton = page.locator("#shopping_cart_container")
    }

    async getTextOfHeaderText() {
        console.log("Login completed")
        return await this.headerText.innerText()
    }

    async clickOnTheAddToCartButton(product:string) {
        await this.page.locator("//div[text()='" + product + "']/ancestor::div[1]/following-sibling::div//button").click()
    }

    async getTextOfBadge() {
        console.log("Product added into the cart")
        return await this.cartBadgeText.innerText()
    }

    async clickOnCartButton() {
        await this.cartButton.click()
    }
}