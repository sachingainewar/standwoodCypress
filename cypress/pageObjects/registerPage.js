require('cypress-xpath')
require('cypress-plugin-tab')

export class RegisterPage {
    
    navigate() {
        cy.visit('https://mcswiss-web-stage.web.app/')
        cy.wait(1000);
    }

    inputTextbox(name,value)
    {        
        const firstName = '//label[contains(text(),"First name")]/following-sibling::app-field-input/input'
        const lastName = '//label[contains(text(),"Last name")]/following-sibling::app-field-input/input'
        const phone = '//label[contains(text(),"Phone")]/following-sibling::app-field-phone-input/input'
        const city = '//label[contains(text(),"City")]/following-sibling::app-field-input/input'
        const zip = '//label[contains(text(),"Zip")]/following-sibling::app-field-input/input'
        const street = '//label[contains(text(),"Street")]/following-sibling::app-field-input/input'
        const birthday = '//label[contains(text(),"Birthday")]/following-sibling::app-datepicker-input-field/div/input'
        const email = '//label[contains(text(),"Email")]/following-sibling::app-field-input/input'
        const password = '//label[contains(text(),"Password")]/following-sibling::app-field-input/input'
        const confirm = '//label[contains(text(),"Confirm password")]/following-sibling::app-field-input/input'
        const company = '//label[contains(text(),"Company name")]/following-sibling::app-field-input/input'
        const iban = '//label[contains(text(),"IBAN")]/following-sibling::app-field-input/input'

        var xpath = ''

        if (name === 'firstName') xpath = firstName
        if (name === 'lastName') xpath = lastName
        if (name === 'phone') xpath = phone
        if (name === 'city') xpath = city
        if (name === 'zip') xpath = zip
        if (name === 'street') xpath = street
        if (name === 'birthday') xpath = birthday
        if (name === 'email') xpath = email
        if (name === 'password') xpath = password
        if (name === 'confirm') xpath = confirm
        if (name === 'company') xpath = company
        if (name === 'iban') xpath = iban

        cy.xpath(xpath).type(value)
    }
  
    selectCombobox(name,value)
    {        
        const country = '//label[contains(text(),"Country of residence")]/following-sibling::app-select-input-field/ng-select/div/div/div/input'
        const nationality = '//label[contains(text(),"Nationality")]/following-sibling::app-select-input-field/ng-select/div/div/div/input'
        const companyType = '//label[contains(text(),"Company type")]/following-sibling::app-select-input-field/ng-select/div/div/div/input'

        var xpath = ''

        if (name === 'country') xpath = country
        if (name === 'nationality') xpath = nationality
        if (name === 'companyType') xpath = companyType

        cy.xpath(xpath).type(value + '{enter}')
    }

    setCheckbox(value)
    {        
        if (value === 'check')
            cy.xpath('//span[contains(text(),"I have read and agree to the")]').click()
    }

    clickButton(name)
    {
        const regLink = '//span[text()="Register"]/parent::a'
        const regButton = '//span[text()="Register"]/parent::button'
        var xpath = ''
        if (name === 'regLink') xpath = regLink
        if (name === 'regButton') xpath = regButton

        cy.xpath(xpath).click()
    }

    tabTextbox(name)
    {        
        const firstName = '//label[contains(text(),"First name")]/following-sibling::app-field-input/input'
        const lastName = '//label[contains(text(),"Last name")]/following-sibling::app-field-input/input'
        const phone = '//label[contains(text(),"Phone")]/following-sibling::app-field-phone-input/input'
        const city = '//label[contains(text(),"City")]/following-sibling::app-field-input/input'
        const zip = '//label[contains(text(),"Zip")]/following-sibling::app-field-input/input'
        const street = '//label[contains(text(),"Street")]/following-sibling::app-field-input/input'
        const birthday = '//label[contains(text(),"Birthday")]/following-sibling::app-datepicker-input-field/div/input'
        const email = '//label[contains(text(),"Email")]/following-sibling::app-field-input/input'
        const password = '//label[contains(text(),"Password")]/following-sibling::app-field-input/input'
        const confirm = '//label[contains(text(),"Confirm password")]/following-sibling::app-field-input/input'
        const company = '//label[contains(text(),"Company name")]/following-sibling::app-field-input/input'
        const iban = '//label[contains(text(),"IBAN")]/following-sibling::app-field-input/input'
        const country = '//label[contains(text(),"Country of residence")]/following-sibling::div/app-validation-message'
        const nationality = '//label[contains(text(),"Nationality")]/following-sibling::div/app-validation-message'
        const companyType = '//label[contains(text(),"Company type")]/following-sibling::div/app-validation-message'


        var xpath = ''

        if (name === 'firstName') xpath = firstName
        if (name === 'lastName') xpath = lastName
        if (name === 'phone') xpath = phone
        if (name === 'city') xpath = city
        if (name === 'zip') xpath = zip
        if (name === 'street') xpath = street
        if (name === 'birthday') xpath = birthday
        if (name === 'email') xpath = email
        if (name === 'password') xpath = password
        if (name === 'confirm') xpath = confirm
        if (name === 'company') xpath = company
        if (name === 'iban') xpath = iban
        if (name === 'country') xpath = country
        if (name === 'nationality') xpath = nationality
        if (name === 'companyType') xpath = companyType
        

        cy.xpath(xpath).type('{enter}').tab()
    }

    assertMessage(name, value)
    {     
        const errorMsg = '//div[@class="alert alert-danger"]'
        const firstName = '//label[contains(text(),"First name")]/following-sibling::div/app-validation-message'
        const lastName = '//label[contains(text(),"Last name")]/following-sibling::div/app-validation-message'
        const phone = '//label[contains(text(),"Phone")]/following-sibling::div/app-validation-message'
        const city = '//label[contains(text(),"City")]/following-sibling::div/app-validation-message'
        const zip = '//label[contains(text(),"Zip")]/following-sibling::div/app-validation-message'
        const street = '//label[contains(text(),"Street")]/following-sibling::div/app-validation-message'
        const birthday = '//label[contains(text(),"Birthday")]/following-sibling::div/app-validation-message'
        const email = '//label[contains(text(),"Email")]/following-sibling::div/app-validation-message'
        const password = '//label[contains(text(),"Password")]/following-sibling::div/app-validation-message'
        const confirm = '//label[contains(text(),"Confirm password")]/following-sibling::div/app-validation-message'
        const company = '//label[contains(text(),"Company name")]/following-sibling::div/app-validation-message'
        const iban = '//label[contains(text(),"IBAN")]/following-sibling::div/app-validation-message'
        const country = '//label[contains(text(),"Country of residence")]/following-sibling::div/app-validation-message'
        const nationality = '//label[contains(text(),"Nationality")]/following-sibling::div/app-validation-message'
        const companyType = '//label[contains(text(),"Company type")]/following-sibling::div/app-validation-message'

        var xpath = ''

        if (name === 'errorMsg') xpath = errorMsg

        if (name === 'firstName') xpath = firstName
        if (name === 'lastName') xpath = lastName
        if (name === 'phone') xpath = phone
        if (name === 'city') xpath = city
        if (name === 'zip') xpath = zip
        if (name === 'street') xpath = street
        if (name === 'birthday') xpath = birthday
        if (name === 'email') xpath = email
        if (name === 'password') xpath = password
        if (name === 'confirm') xpath = confirm
        if (name === 'company') xpath = company
        if (name === 'iban') xpath = iban
        if (name === 'country') xpath = country
        if (name === 'nationality') xpath = nationality
        if (name === 'companyType') xpath = companyType

        if (name === 'errorMsg')
            cy.xpath(xpath).should('not.exist')
        else
            cy.xpath(xpath).should('have.text', value)
    }
}