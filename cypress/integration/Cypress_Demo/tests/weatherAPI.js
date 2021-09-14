/// <reference types="cypress" />
describe('Meta weather API', () => {

    it('Get weather details', () => {

        cy.request({
            method: 'GET',
            url: 'https://www.metaweather.com/api/location/search/?query=lon'
        }).then((response) => {
            const city = response.body[0].title
            return city
        })
        .then((city) => {
            cy.request({
                method: 'GET',
                url: 'https://www.metaweather.com/api/location/search/?query='+city
            }).then(res => {
                expect(res.status).to.eq(200)
                expect(res.body[0]).to.have.property('title',city)
            })
        })

    });
    it('get weather information for all cities', ()=>{
        //1st request: GET locations 
        cy.request({
              method: 'GET',
              url: 'https://www.metaweather.com/api/location/search/?query=San'
           
        }).then((resp)=>{
            const location = resp.body
            return location
        })
            .then((location)=>{

                for(let i=0; i< location.length; i++){
                //2nd request for the first location/city
                cy.request({
                    method: 'GET',
                    url: 'https://www.metaweather.com/api/location/search/?query='+location[i].title
                }).then((resp)=>{
                    expect(resp.status).to.eq(200)
                    expect(resp.body[0]).to.have.property('title', location[i].title)
                })

            }

            })
        })

});