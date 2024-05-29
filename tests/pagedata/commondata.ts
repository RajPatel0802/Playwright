import { currentTime } from "../../utils/util"
import { randomString } from "../../utils/util"

export const signUpData = {
  email: "test" + currentTime + "@yopmail.com",
  userName: "standard_user",
  password: "secret_sauce",
  name: "John Doe",
  firstName: "first" + randomString,
  lastName: "lastName" + randomString,
  frequency: Math.floor(Math.random() * 3),
}
export const productData = {
  headerText: "Products",
  product1: "Sauce Labs Backpack",
  product2: "Sauce Labs Bike Light"
}
export const viewCartData = {
  headerText: "Your Cart"
}
export const invalidLoginData = {
  email: "juneasa026test03@yopmail.com",
  password: "Test1212@sdsdds",
  errorMessage: "Please check the email and try again.",
}
export const loginData = {
  userName: "standard_user",
  password: "secret_sauce",
}


