Feature: Search Products

  Search products

  Background:
    Given I open Meck-Schweizer page

  Scenario Outline: Search product and count found products
    When Type "<keyword>"
    And Click on Search button
    Then Product counter is more <count>

    Examples:
      | keyword | count |
      | Körpercreme| 1  |
 