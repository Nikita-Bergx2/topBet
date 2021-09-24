const standartURL = 'https://m-dev.tb.exxs.net/';

describe('Menu Test', () => {

//Sign in
    it('Sign in', () => {
        cy.visit(standartURL, {
            auth: {
                username: 't',
                password: 'm'
            },
        })
    })

    it('Log in'), () => {
        
        cy.get('.mi-login').click()
        cy.get('form > :nth-child(1) input').type('dorfsepp')
        cy.get('form > :nth-child(2) input').type('b1a20d64c')
        cy.get('form > .sc-cxNHIi').click()

    }

})