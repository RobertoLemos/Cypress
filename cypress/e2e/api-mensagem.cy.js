describe('Api Adopet', () =>{
    

    it('Mensagem da Api', ()=>{
        cy.request({
            method:'GET' ,
            url: 'https://adopet-frontend-cypress.vercel.app/static/media/eye-hover.83ecaa4c5ad07beaba71.svg' ,
            headers: Cypress.env()
        // código omitido
    }).then((res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        // expect(res.body).to.have.property('msg')
    })    
  })
}) 
