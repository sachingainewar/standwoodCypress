Feature: Register

  Test registration

  Background:
    Given I open Meck-Schweizer page

  Scenario Outline: Make successful register
    When Click on the Register link
    And Input "<firstName>" to FirstName textbox
    And Input "<lastName>" to LastName textbox
    And Input "<phone>" to Phone textbox
    And Input "<city>" to City textbox
    And Input "<zip>" to Zip textbox
    And Input "<street>" to Street textbox
    And Input "<birthday>" to Birthday textbox
    And Select "<country>" to Country of Resident textbox
    And Select "<nationality>" to Nationality textbox
    And Input "<email>" to Email textbox
    And Input "<password>" to Password textbox
    And Input "<confirm>" to Confirm Password textbox
    And Input "<company>" to Company textbox
    And Select "<companyType>" to Company Type textbox
    And Input "<iban>" to IBAN textbox
    And Check "<agree>" to Term checkbox
    And Click Register button
    Then Check "<message>"

    Examples:
      | firstName | lastName | phone | city | zip | street | birthday | country | nationality | email | password | confirm | company | companyType | iban | agree |message|
      | Karen | Nguyen | 012301230123 | HCM | 10000 | HHT | 07.07.1974 | Viet Nam | Viet Nam | karen@gmail.com | 12345a@A | 12345a@A | Freelance | Einzelunternehmer | DE89370400440532013000 | check | Unexpected error has occurred |