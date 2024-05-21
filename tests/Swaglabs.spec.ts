import { test, expect } from '@playwright/test';
import { LoginPO } from './pageobject/LoginPO';
import { HomePO } from './pageobject/HomePO';
import { YourCartPO } from './pageobject/YourCartPO';
test('Verify the Swaglabs Functionality ', async ({ page }) => {

    const Login = new LoginPO(page)
    const Home = new HomePO(page)
    const YourCart = new YourCartPO(page)

    // Step 1: Navigate to the swaglsbs website
    await page.goto("/");

    // Step 2: Enter username, password, and click on the login button
    await Login.enterUserNameAndPassword("standard_user", "secret_sauce")
    await Login.clickOnLoginButton()

    // Step 3: Verify the Product page
    expect(await Home.getTextOfHeaderText()).toEqual("Products")

    // Step 4: Add Two product into the cart 
    await Home.clickOnTheAddToCartButton("Sauce Labs Backpack")
    await Home.clickOnTheAddToCartButton("Sauce Labs Bike Light")

    // Step 5: Verify Cat badge has a valid count
    expect(await Home.getTextOfbadge()).toEqual("2")
    await Home.clickOnCartButton()

    // Step 6: Verify Your cart screen
    expect(await YourCart.getHeaderTextOfYourCart()).toEqual("Your Cart")

});
