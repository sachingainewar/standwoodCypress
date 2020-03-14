Feature: Check categories

  Navigate to any category and make sure there are products

  Background:
    Given I open Meck-Schweizer page

  Scenario Outline: Navigate to any category and count products of the category on the first page
    When Expand the "<group>" category group
    And Click on the "<category>" category
    Then Product counter is more <count>

    Examples:
      | group | category | count |
      | NonFood              | Körperpflege & Kosmetik                      | 10        |
      | Getränke             | sonstige Getränke                     | 9      |
 