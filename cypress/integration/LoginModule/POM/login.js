///<reference types="cypress" />

class Login{

    submit(){
        cy.fixture('user').then(function (testdata) {
            this.user = testdata
            //click submit button with incorrect username and password
            cy.get('#uid').type('user')
            cy.get('[name="password"]').type('pass123')
            cy.get('[type="submit"]').click()
             cy.wait(2000)
            cy.get('[name="password"]').should('have.value','')
            cy.get('#uid').clear()
            cy.get('[name="password"]').clear()
            
            

            //click submit button with incorrect username and correct password
            cy.get('#uid').type('user')
            cy.get('[name="password"]').type(this.user.password)
            cy.get('[type="submit"]').click()
            cy.get('[name="password"]').should('have.value','')
            cy.get('#uid').clear()
            cy.get('[name="password"]').clear()
            
            
            //correct password and username
            cy.get('#uid').type(this.user.username).should('have.value',this.user.username)
            cy.get('[name="password"]').type(this.user.password).should('have.value',this.user.password)
            cy.get('[type="submit"]').click()
        })
    }

}export default Login