import { test, expect } from '@playwright/test';
import { LoginPO } from './pageobject/LoginPO';
import { HomePO } from './pageobject/HomePO';
import { YourCartPO } from './pageobject/YourCartPO';
import { loginData, productData, viewCartData } from "./pagedata/commondata"


test("Verify that user can add the Product into cart", async ({ page }) => {
    const Login = new LoginPO(page)
    const Home = new HomePO(page)
    const YourCart = new YourCartPO(page)

    // Step 1: Navigate to the swag labs website
    await page.goto("/");

    // Step 2: Enter username, password, and click on the login button
    await Login.enterUserNameAndPassword(loginData.userName, loginData.password)
    await Login.clickOnLoginButton()

    // Step 3: Verify the Product page
    expect(await Home.getTextOfHeaderText()).toEqual(productData.headerText)

    // Step 4: Add Two product into the cart
    await Home.clickOnTheAddToCartButton(productData.product1)
    await Home.clickOnTheAddToCartButton(productData.product2)

    // Step 5: Verify Cat badge has a valid count
    expect(await Home.getTextOfBadge()).toEqual("2")
    await Home.clickOnCartButton()

    // Step 6: Verify Your cart screen
    expect(await YourCart.getHeaderTextOfYourCart()).toEqual(viewCartData.headerText)
})

test("Verify that user can add the Product into cart Part 2", async ({ page }) => {
    const Login = new LoginPO(page)
    const Home = new HomePO(page)
    const YourCart = new YourCartPO(page)

    // Step 1: Navigate to the swag labs website
    await page.goto("/");

    // Step 2: Enter username, password, and click on the login button
    await Login.enterUserNameAndPassword(loginData.userName, loginData.password)
    await Login.clickOnLoginButton()

    // Step 3: Verify the Product page
    expect(await Home.getTextOfHeaderText()).toEqual(productData.headerText)

    // Step 4: Add Two product into the cart
    await Home.clickOnTheAddToCartButton(productData.product1)
    await Home.clickOnTheAddToCartButton(productData.product2)

    // Step 5: Verify Cat badge has a valid counts
    expect(await Home.getTextOfBadge()).toEqual("2")
    await Home.clickOnCartButton()

    // Step 6: Verify Your cart screen
    expect(await YourCart.getHeaderTextOfYourCart()).toEqual(viewCartData.headerText)
})


