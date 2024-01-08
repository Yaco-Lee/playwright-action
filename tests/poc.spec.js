import * as dotenv from 'dotenv'
dotenv.config()
const { test, expect } = require('@playwright/test');
const testData = require('../utils/testData.json');
const fieldValidation = require('../utils/fieldValidation.json');
import {LoginPage} from '../pageObjects/login';
import { allure } from "allure-playwright";



test('TC01_verifyRegistrationFromCheckoutPage', async ({ page }) => {
  const Login = new LoginPage(page);
  Login.goToCheckoutRegistrationPage();
  expect(page.getByText('Account Login').isVisible());
  await Login.create_new_account_btn.click();
  expect(page.locator('span').filter({ hasText: /^Create Account$/ }).isVisible());
  await Login.first_name_tbox.fill(testData.newUserFirstName);
  await Login.last_name_tbox.fill(testData.newUserLastName);
  await Login.new_user_email_tbox.fill(testData.newUserEmail);
  await Login.confirm_email_tbox.fill(testData.newUserEmail);
  await Login.password_tbox.fill(testData.newUserPwd);
  await Login.confirm_password_tbox.fill(testData.newUserPwd);
  expect(page.getByRole('button', { name: 'Create Account' }).isEnabled());

});

test('TC02_verifyLoginFromCheckoutPage', async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.goToCheckoutLoginPage();
  expect(Login.login_btn.isDisabled());
  await Login.user_email_tbox.fill('billfieldtest@gmail.com');
  await Login.password_tbox.fill('testing@123');
  await Login.login_btn.click();
  // await page.pause()
});

test('TC03_verifyLoginFromLoginPage', async ({ page }) => {
  test.setTimeout(120000);
  const Login = new LoginPage(page);
  await Login.goToCheckoutRegistrationPage();
  expect( page.getByRole('button',{name: 'Log In'}).isDisabled());
  //await Login.user_email_tbox.fill('billfieldtest@gmail.com');
  await Login.user_email_tbox.fill(process.env.USERNAME_DEV);
  //await Login.password_tbox.fill('testing@123');
  await Login.password_tbox.fill(process.env.PWD_DEV);
  await Login.login_btn.click();
  await Login.edit_btn.click();
  expect( page.getByRole('button',{name: 'Log In'}).isVisible());
  // await page.pause()

});

test('TC04_verifyRegistrationFieldValidationOnCheckout', async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.goToCheckoutRegistrationPage();
  expect(page.getByText('Account Login').isVisible());
  await Login.create_new_account_btn.click();
  expect(page.locator('span').filter({ hasText: /^Create Account$/ }).isVisible());
  await Login.first_name_tbox.fill('');
  await Login.last_name_tbox.fill('');
  await Login.new_user_email_tbox.fill('');
  await Login.confirm_email_tbox.fill('');
  await Login.password_tbox.fill('');
  await Login.confirm_password_tbox.fill('');
  expect(page.getByText(fieldValidation.firstNameReq))
  expect(page.getByText(fieldValidation.lastNameReq))
  expect(page.getByText(fieldValidation.emailReq, { exact: true }))
  expect(page.getByText(fieldValidation.confEmailReq))
  expect(page.getByText(fieldValidation.pwdReq))
  expect(page.getByText(fieldValidation.confPwdReq))
  expect(page.getByRole('button', { name: 'Create Account' }).isDisabled());
  // await page.pause();
});

