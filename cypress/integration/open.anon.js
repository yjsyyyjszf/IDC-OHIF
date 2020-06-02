describe('load OHIF and ANON filter set', () => {
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
            .wait(19000)
    });

    it('should hide all RTstruct filter options', () => {

        cy.get('.angle-double-down').click()

    });

    it('should display all ANON filter options', () => {
        cy.get(':nth-child(3) > .header > .icons > .angle-double-up').click()

    });

    it('should select Body outline (EXTERNAL) filter option to be visible', () => {

        cy.get('[style="margin-bottom: 0px; height: 100%;"] > .scrollArea > .scrollable > .tableList > .tableListContent > :nth-child(1) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon')
            .as('bodyOutline')
        cy.get('@bodyOutline').click()
        cy.get('@bodyOutline').click()

    });


});


describe('should begin to QC anon functionality', () => {



    it('should hide all filter options', () => {

        cy.get('[style="margin-bottom: 0px; height: 100%;"] > .header > .icons > .eye-icon')
            .wait(12000)
            .click({ force: true })


    });

    it('should select Body outline (EXTERNAL) filter option to be visible', () => {

        cy.get('[style="margin-bottom: 0px; height: 100%;"] > .scrollArea > .scrollable > .tableList > .tableListContent > :nth-child(1) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon')
            .as('bodyOutline')
        cy.get('@bodyOutline').click()
        cy.get('@SpinalCord').should('have.class', 'eye-icon --visible')

    });


    it('should select Spinal cord (ORGAN) filter option to be visible', () => {

        cy.get('[style="margin-bottom: 0px; height: 100%;"] > .scrollArea > .scrollable > .tableList > .tableListContent > :nth-child(2) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon')
            .as('SpinalCord')
        cy.get('@SpinalCord').click({ force: true })
        cy.get('@SpinalCord').should('have.class', 'eye-icon --visible')

    });

    it('should select CouchSurface (SUPPORT) filter option to be visible', () => {

        cy.get('[style="margin-bottom: 0px; height: 100%;"] > .scrollArea > .scrollable > .tableList > .tableListContent > :nth-child(3) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon')
            .as('CouchSurface')
        cy.get('@CouchSurface').click({ force: true })
        cy.get('@CouchSurface').should('have.class', 'eye-icon --visible')

    });

    it('should select CouchInterior (SUPPORT) filter option to be visible', () => {


        cy.get('[style="margin-bottom: 0px; height: 100%;"] > .scrollArea > .scrollable > .tableList > .tableListContent > :nth-child(4) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon')
            .as('CouchInterior')
        cy.get('@CouchInterior').click({ force: true })
        cy.get('@CouchInterior').should('have.class', 'eye-icon --visible')

    });

    it('should select CouchRailLeft (SUPPORT) filter option to be visible', () => {

        cy.get('[style="margin-bottom: 0px; height: 100%;"] > .scrollArea > .scrollable > .tableList > .tableListContent > :nth-child(5) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon')
            .as('CouchRailLeft')
        cy.get('@CouchRailLeft').click({ force: true })
        cy.get('@CouchRailLeft').should('have.class', 'eye-icon --visible')

    });

});