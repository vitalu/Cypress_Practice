/// <reference types="cypress" />
describe('Verify CRUD operations', () => {
    let accssToken = 'e61d119c3ab29e2c64be43b5ba2936cc205ba444188afb412136169ced24bdfa'
    let userId = "";
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWZXYZabcdefghijklmnopqrstuvwxyz1234567890';
    var string = '';
    for (var i = 0; i < 15; i++) {
       string += chars[Math.floor(Math.random() * chars.length)];
    }
    var testEmail = string + '@gmail.com'
    it('Verify GET Request', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public-api/users/123/posts',
            headers: {
                'authorization': 'Bearer ' + accssToken,
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.meta.pagination).has.property('limit', 20);
        })


    });
    it('Verify POST Request', () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public-api/users',
            body:
            {
                "name": 'Ramesh G',
                "email": testEmail,
                "gender": "Male",
                "status": "Active"
            },
            headers: {
                'authorization': 'Bearer ' + accssToken
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).has.property('email', testEmail);
            expect(response.body.data).has.property('gender', 'Male');
            userId = response.body.data.id;
            cy.log(userId)
        })
    });
    it('Verify PUT Request', () => {
        cy.request({
            method: 'PUT',
            url: 'https://gorest.co.in/public-api/users/'+userId,
            body:
            {
                "name": 'Ramesh G',
                "email": testEmail,
                "gender": "Female",
                "status": "Active"
            },
            headers: {
                'authorization': 'Bearer ' + accssToken
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).has.property('email', testEmail);
            expect(response.body.data).has.property('gender', 'Female');
            expect(response.body.data).has.property('status', 'Active');
        })
        
    });
    it('Verify DELETE Request', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://gorest.co.in/public-api/users/'+userId,
            headers: {
                'authorization': 'Bearer ' + accssToken
            }
        }).then((response) => {
            expect(response.body).has.property('code',204)
        })
    });

    it.skip('Verify Conduit Login', () => {
        cy.visit('/#/login')
        cy.title().should('eq', 'Conduit')
        cy.location('protocol').should('eq', 'https:')
        cy.get('input[type="email"]').type(testEmail)
        cy.get('input[type="password"]').type('cypress123',{ sensitive: true })
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.get('.error-messages').should('be.visible')
        //cy.contains('Your Feed', { timeout: 2000 }).should('be.visible') 
    });





});