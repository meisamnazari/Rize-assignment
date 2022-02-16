describe('App Test', function () {
    it('Visits the Rize Task website', function () {
        cy.visit('http://localhost:3000/');

        // You can switch your selected nominee in a same category and it will be possible to select only one 
        cy.get('#1-1').find('#button').click()
        cy.get('#1-2').find('#button').click()

        // Selecting from different categories is possible and does not affect other categories
        cy.get('#0-1').find('#button').click()
        cy.get('#2-2').find('#button').click()
        cy.get('#3-3').find('#button').click()
        cy.get('#4-4').find('#button').click()
        cy.get('#5-1').find('#button').click()
        cy.get('#6-0').find('#button').click()

        // The submit button will open the success modal
        cy.get('#submitButton').click().then(() => {
            expect(cy.get('#successModal'))
        })

        // The close button in success modal will close the success modal
        cy.get('#closeButton').click().then(() => {
            expect(cy.get('#successModal').should('not.exist'))
        })
    })
});
