/// <reference types="cypress" />
import Login from "./POM/login"
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('Validate login',() =>{

    const login = new Login()
    before('Validate url',()=> {
        cy.visit('http://35.77.45.137:8080/exam/login') 
    })
    
    it('Validate credentials',()=>{
        login.submit() 
    })

    after('Validate logout and visit other page',()=>{
        cy.wait(3000)
        cy.get('[href="login"]').click()
        
        
    })

})