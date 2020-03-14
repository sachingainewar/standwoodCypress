require('cypress-xpath')

export class SearchPage {
    
    navigate() {
        cy.visit('https://mcswiss-web-stage.web.app/')
        cy.wait(1000);
    }

    typeKeyword(keyword)
    {        
        cy.xpath('//input[@aria-describedby="search-btn"]').type(keyword)
    }

    clickSearch()
    {        
        cy.xpath('//button[@id="search-btn"]').click()
    }

    assertCount(count)
    {     
        cy.get('app-products-list').children('.container-fluid').should('have.length', count)
    }
}