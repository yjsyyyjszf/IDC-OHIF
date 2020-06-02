describe('load OHIF and RTstruct', () => {
    it('should load the OHIF viewer', () => {
        cy.visit('https://viewer-dev.ohif.org/viewer/1.3.6.1.4.1.14519.5.2.1.2193.7172.847236098565581057121195872945', { timeout: 100000 })
        cy.url().should('include', 'ohif.org')
        cy.log('before reload')
            // log for de-bugging for code development
        cy.reload()
        cy.log('after reload')
    });

    it('study list text in visible ', () => {
        cy.get('.header-btn')
            .and('contain', 'Study List')
            .should('be.visible')
    });

    it('should click on the text RTstruct', () => {
        cy.get(':nth-child(2) > .bottomLabel')
            .contains('RTSTRUCT')
            .click()
        cy.get('h3').contains('RT Structure Sets')
    });

    it('should click on the text Measurements', () => {
        cy.get('.pull-right > .RoundedButtonGroup > :nth-child(1) > .bottomLabel')
            .click()
            .wait(1000)

    });

    it('should click on the text RTstruct', () => {
        cy.get(':nth-child(2) > .bottomLabel')
            .click()
            .wait(17000)
    });

});

describe('should QC functionality for select all functionality selected specific hide icon first', () => {



    it('should verify the filter is visible', () => {

        cy.get(':nth-child(3) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('CouchSurface')
        cy.get('@CouchSurface').should('have.class', 'eye-icon --visible')

    });

    it('should select the option to be displayed as hidden', () => {

        cy.get(':nth-child(3) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('CouchSurface')
        cy.get('@CouchSurface').click({ force: true })

    });

    it('should hide all icons ', () => {

        cy.get('.icons > .eye-icon').click()

    });

    it('should select the display all icon', () => {
        cy.get('.icons > .eye-icon').click()
    });

    it('should verify the filter is visible', () => {

        cy.get(':nth-child(3) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('CouchSurface')
        cy.get('@CouchSurface').should('have.class', 'eye-icon --visible')

    });


    it('should select the hide all icon', () => {
        cy.get('.icons > .eye-icon').click()
    });

    it('should verify the filter is hidden', () => {

        cy.get(':nth-child(3) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('CouchSurface')
        cy.get('@CouchSurface').should('have.class', 'eye-icon false')

    });


});

describe('should QC functionality for select all functionality', () => {


    it('should verify the filter is hidden', () => {

        cy.get(':nth-child(33) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('CTVLRO')
        cy.get('@CTVLRO').should('have.class', 'eye-icon false')

    });

    it('should select the option to be displayed as visible ', () => {

        cy.get(':nth-child(33) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('CTVLRO')
        cy.get('@CTVLRO').click({ force: true })

    });

    it('should select the display all icon', () => {
        cy.get('.icons > .eye-icon').click()
    });

    it('should verify the filter is visible', () => {

        cy.get(':nth-child(33) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('CTVLRO')
        cy.get('@CTVLRO').should('have.class', 'eye-icon --visible')

    });


    it('should select the hide all icon', () => {
        cy.get('.icons > .eye-icon').click()
    });

    it('should verify the filter is hidden', () => {

        cy.get(':nth-child(33) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('CTVLRO')
        cy.get('@CTVLRO').should('have.class', 'eye-icon false')

    });


});