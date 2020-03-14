import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import {SearchPage} from '../../pageObjects/searchPage'

require('cypress-xpath')

const sPage = new SearchPage()
Given('I open Meck-Schweizer page', () => {
  sPage.navigate()
})

When('Type {string}', (keyword) => {
  sPage.typeKeyword(keyword)
})

And('Click on Search button', () => {
  sPage.clickSearch()
})

Then('Product counter is more {int}', (count) => {
  sPage.assertCount(count)
})