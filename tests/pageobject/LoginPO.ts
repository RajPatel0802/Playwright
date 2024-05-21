import { expect, Locator, Page } from "@playwright/test";

export class LoginPO {
    page: Page
    userNameTextBox: Locator
    passwordTextBox: Locator
    loginButton: Locator


    constructor(page: Page) {
        this.page = page;
        this.userNameTextBox = page.locator("#user-name")
        this.passwordTextBox = page.locator("#password")
        this.loginButton = page.locator("#login-button")
        }

    async enterUserNameAndPassword(userName, password) {
        await this.userNameTextBox.fill(userName)
        await this.passwordTextBox.fill(password)
    }

    async clickOnLoginButton() {
        await this.loginButton.click()
    }
}