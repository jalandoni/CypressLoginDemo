///<reference types="cypress" />
import user from '../fixtures/user.json'
const user = new user()

class Login{
    init(){
        cy.fixture('user').then((user) => {
            this.user = user
            cy.get('').type(this.user.username)
            cy.get('').type(this.user.password)
          })
    }

}export default Login