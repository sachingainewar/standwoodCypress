import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import {RegisterPage} from '../../pageObjects/registerPage'

require('cypress-xpath')

const regPage = new RegisterPage()
Given('I open Meck-Schweizer page', () => {
  regPage.navigate()
})

When('Click on the Register link', () => {
  regPage.clickButton('regLink')
})


And('Input {string} to FirstName textbox', (value) => {
  regPage.inputTextbox('firstName',value)
})

And('Input {string} to LastName textbox', (value) => {
  regPage.inputTextbox('lastName',value)
})

And('Input {string} to Phone textbox', (value) => {
  regPage.inputTextbox('phone',value)
})

And('Input {string} to City textbox', (value) => {
  regPage.inputTextbox('city',value)
})

And('Input {string} to Zip textbox', (value) => {
  regPage.inputTextbox('zip',value)
})

And('Input {string} to Street textbox', (value) => {
  regPage.inputTextbox('street',value)
})

And('Input {string} to Birthday textbox', (value) => {
  regPage.inputTextbox('birthday',value)
})

And('Select {string} to Country of Resident textbox', (value) => {
  regPage.selectCombobox('country',value)
})

And('Select {string} to Nationality textbox', (value) => {
  regPage.selectCombobox('nationality',value)
})

And('Input {string} to Email textbox', (value) => {
  regPage.inputTextbox('email',value)
})

And('Input {string} to Password textbox', (value) => {
  regPage.inputTextbox('password',value)
})

And('Input {string} to Confirm Password textbox', (value) => {
  regPage.inputTextbox('confirm',value)
})

And('Input {string} to Company textbox', (value) => {
  regPage.inputTextbox('company',value)
})

And('Select {string} to Company Type textbox', (value) => {
  regPage.selectCombobox('companyType',value)
})

And('Input {string} to IBAN textbox', (value) => {
  regPage.inputTextbox('iban',value)
})

And('Check {string} to Term checkbox', (value) => {
  regPage.setCheckbox(value)
})

And('Click Register button', () => {
  regPage.clickButton('regButton')
})

Then('Check {string}', (value) => {
  regPage.assertMessage('errorMsg',' '+ value + ' ')
})
