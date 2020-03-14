require('cypress-xpath')

export class CategoryPage {
    
    navigate() {
        cy.visit('https://mcswiss-web-stage.web.app/')
        cy.wait(1000);
    }

    expandGroup(group)
    {        
        cy.xpath('//a[contains(text(),"' + group + '")]/following-sibling::i').click()
        //cy.get('a').contains(group).click()
    }

    clickCategory(category)
    {        
        //cy.get('a').get('nav-link w-100').click()
        cy.get('a').contains(category).click()
        //console.log('//a[contains(text(),' + group + ')]/following-sibling::i')
        //cy.xpath('//a[contains(text(),' + group + ')]').click()
    }

    assertCount(count)
    {     
        cy.get('app-products-list').children('.container-fluid').should('have.length', count+1)
    }
}