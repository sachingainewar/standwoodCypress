import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import {CategoryPage} from '../../pageObjects/categoryPage'

require('cypress-xpath')

const catPage = new CategoryPage()
Given('I open Meck-Schweizer page', () => {
  catPage.navigate()
})

When('Expand the {string} category group', (group) => {
  catPage.expandGroup(group)
})

And('Click on the {string} category', (category) => {
  catPage.clickCategory(category)
})

Then('Product counter is more {int}', (count) => {
  catPage.assertCount(count)
})
