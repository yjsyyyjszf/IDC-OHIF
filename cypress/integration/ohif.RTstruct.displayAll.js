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

describe('should QC functionality display eye-icon filter option for the first ten RTstruct filter options', () => {

    it('should show/hide the display all icon ', () => {
        cy.get('.icons > .eye-icon')
            .should('be.visible')
            .should('have.class', 'eye-icon expanded')
            .click()

        cy.get('.icons > .eye-icon')
            .should('have.class', 'eye-icon false')
            .should('be.visible')
            .wait(3000)
    });

    it('should select Body outline (EXTERNAL) filter option to be visible', () => {

        cy.get(':nth-child(1) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('bodyOutline')
        cy.get('@bodyOutline').click()
        cy.get('@bodyOutline').should('have.class', 'eye-icon --visible')

    });


    it('should select Cord (ORGAN) filter option to be visible', () => {

        cy.get(':nth-child(2) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('Cord')
        cy.get('@Cord').click({ force: true })
        cy.get('@Cord').should('have.class', 'eye-icon --visible')

    });

    it('should select CouchSurface (SUPPORT) filter option to be visible', () => {

        cy.get(':nth-child(3) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('CouchSurface')
        cy.get('@CouchSurface').click({ force: true })
        cy.get('@CouchSurface').should('have.class', 'eye-icon --visible')

    });

    it('should select CouchInterior (SUPPORT) filter option to be visible', () => {

        cy.get(':nth-child(4) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('CouchInterior')
        cy.get('@CouchInterior').click({ force: true })
        cy.get('@CouchInterior').should('have.class', 'eye-icon --visible')

    });

    it('should select CouchRailLeft (SUPPORT) filter option to be visible', () => {

        cy.get(':nth-child(5) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('CouchRailLeft')
        cy.get('@CouchRailLeft').click({ force: true })
        cy.get('@CouchRailLeft').should('have.class', 'eye-icon --visible')

    });

    it('should select CouchRailRight (SUPPORT) filter option to be visible', () => {

        cy.get(':nth-child(6) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('CouchRailRight')
        cy.get('@CouchRailRight').click({ force: true })
        cy.get('@CouchRailRight').should('have.class', 'eye-icon --visible')

    });

    it('should select Rparotid (ORGAN) filter option to be visible', () => {

        cy.get(':nth-child(7) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('Rparotid')
        cy.get('@Rparotid').click({ force: true })
        cy.get('@Rparotid').should('have.class', 'eye-icon --visible')
        cy.get(':nth-child(7) > .tableListItem > .itemContent').click()

    });

    it('should select Lparotid (ORGAN) filter option to be visible', () => {

        cy.get(':nth-child(8) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('Lparotid')
        cy.get('@Lparotid').click({ force: true })
        cy.get('@Lparotid').should('have.class', 'eye-icon --visible')


    });

    it('should select OPTIC NERVE R (ORGAN) filter option to be visible', () => {

        cy.get(':nth-child(9) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('OpticNerveR')
        cy.get('@OpticNerveR').click({ force: true })
        cy.get('@OpticNerveR').should('have.class', 'eye-icon --visible')


    });

    it('should select OPTIC NERVE L (ORGAN) filter option to be visible', () => {

        cy.get(':nth-child(10) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('OpticNerveL')
        cy.get('@OpticNerveL').click({ force: true })
        cy.get('@OpticNerveL').should('have.class', 'eye-icon --visible')


    });

});

describe('should QC functionality display eye-icon filter option for the next ten RTstruct filter options', () => {

    it('should select COCHLEA R (ORGAN) filter option to be visible', () => {

        cy.get(':nth-child(11) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('CochleaR')
        cy.get('@CochleaR').click({ force: true })
        cy.get('@CochleaR').should('have.class', 'eye-icon --visible')
        cy.get(':nth-child(11) > .tableListItem > .itemContent').click()

    });

    it('should select COCHLEA L (ORGAN) filter option to be visible', () => {

        cy.get(':nth-child(12) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('CochleaL')
        cy.get('@CochleaL').click({ force: true })
        cy.get('@CochleaL').should('have.class', 'eye-icon --visible')

    });

    it('should select Mandible (ORGAN) filter option to be visible', () => {

        cy.get(':nth-child(13) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('Mandible')
        cy.get('@Mandible').click({ force: true })
        cy.get('@Mandible').should('have.class', 'eye-icon --visible')

    });

    it('should select Brainstem (ORGAN) filter option to be visible', () => {

        cy.get(':nth-child(14) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('Brainstem')
        cy.get('@Brainstem').click({ force: true })
        cy.get('@Brainstem').should('have.class', 'eye-icon --visible')

    });

    it('should select Optic Chiasm (ORGAN) filter option to be visible', () => {

        cy.get(':nth-child(15) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('OpticChiasm')
        cy.get('@OpticChiasm').click({ force: true })
        cy.get('@OpticChiasm').should('have.class', 'eye-icon --visible')

    });

    it('should select Unknown filter option to be visible', () => {

        cy.get(':nth-child(16) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('Unknown')
        cy.get('@Unknown').click({ force: true })
        cy.get('@Unknown').should('have.class', 'eye-icon --visible')

    });

    it('should select GTV 70 (GTV) filter option to be visible', () => {

        cy.get(':nth-child(17) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('GTV70')
        cy.get('@GTV70').click({ force: true })
        cy.get('@GTV70').should('have.class', 'eye-icon --visible')

    });

    it('should select GTV NODE 70 (GTV) filter option to be visible', () => {

        cy.get(':nth-child(18) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('GTVNODE70')
        cy.get('@GTVNODE70').click({ force: true })
        cy.get('@GTVNODE70').should('have.class', 'eye-icon --visible')

    });

    it('should select GTV 70 COMBINED (GTV) filter option to be visible', () => {

        cy.get(':nth-child(19) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('GTV70COMBINED')
        cy.get('@GTV70COMBINED').click({ force: true })
        cy.get('@GTV70COMBINED').should('have.class', 'eye-icon --visible')

    });

    it('should select CTV 70 (CTV) filter option to be visible', () => {

        cy.get(':nth-child(20) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('CTV70')
        cy.get('@CTV70').click({ force: true })
        cy.get('@CTV70').should('have.class', 'eye-icon --visible')

    });

});

describe('should QC functionality display eye-icon filter option for the next ten RTstruct filter options', () => {

    it('should select CTV 60 (CTV) filter option to be visible', () => {

        cy.get(':nth-child(21) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('CTV60')
        cy.get('@CTV60').click({ force: true })
        cy.get('@CTV60').should('have.class', 'eye-icon --visible')
        cy.get(':nth-child(21) > .tableListItem > .itemContent').click()

    });

    it('should select PTV 60 (PTV) filter option to be visible', () => {

        cy.get(':nth-child(22) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('PTV60')
        cy.get('@PTV60').click({ force: true })
        cy.get('@PTV60').should('have.class', 'eye-icon --visible')

    });

    it('should select CTV 60 NODES (CTV) filter option to be visible', () => {

        cy.get(':nth-child(23) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('CTV60NODES')
        cy.get('@CTV60NODES').click({ force: true })
        cy.get('@CTV60NODES').should('have.class', 'eye-icon --visible')

    });

    it('should select PTV60NODES (PTV) filter option to be visible', () => {

        cy.get(':nth-child(24) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('PTV60NODES')
        cy.get('@PTV60NODES').click({ force: true })
        cy.get('@PTV60NODES').should('have.class', 'eye-icon --visible')

    });

    it('should select CTV 54 (CTV) filter option to be visible', () => {

        cy.get(':nth-child(25) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('CTV54')
        cy.get('@CTV54').click({ force: true })
        cy.get('@CTV54').should('have.class', 'eye-icon --visible')

    });

    it('should select PTV 54 (PTV) filter option to be visible', () => {

        cy.get(':nth-child(26) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('PTV54')
        cy.get('@PTV54').click({ force: true })
        cy.get('@PTV54').should('have.class', 'eye-icon --visible')

    });

    it('should select Cord+3 (PTV) filter option to be visible', () => {

        cy.get(':nth-child(27) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('Cord+3')
        cy.get('@Cord+3').click({ force: true })
        cy.get('@Cord+3').should('have.class', 'eye-icon --visible')

    });

    it('should select Partoid L-PTV60 (ORGAN) filter option to be visible', () => {

        cy.get(':nth-child(28) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('PartoidL-PTV60+3')
        cy.get('@PartoidL-PTV60+3').click({ force: true })
        cy.get('@PartoidL-PTV60+3').should('have.class', 'eye-icon --visible')

    });

    it('should select Partoid R-PTV54 (ORGAN) filter option to be visible', () => {

        cy.get(':nth-child(29) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('PartoidL-PTV64')
        cy.get('@PartoidL-PTV64').click({ force: true })
        cy.get('@PartoidL-PTV64').should('have.class', 'eye-icon --visible')

    });

    it('should select PTV60+NODES 60 (PTV) filter option to be visible', () => {

        cy.get(':nth-child(30) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('PTV60+NODES60')
        cy.get('@PTV60+NODES60').click({ force: true })
        cy.get('@PTV60+NODES60').should('have.class', 'eye-icon --visible')

    });

});

describe('should QC functionality display eye-icon filter option for the next ten RTstruct filter options', () => {

    it('should select 5400control filter option to be visible', () => {

        cy.get(':nth-child(31) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('5400control')
        cy.get('@5400control').click({ force: true })
        cy.get('@5400control').should('have.class', 'eye-icon --visible')

    });

    it('should select CTV IRO (ORGAN) filter option to be visible', () => {

        cy.get(':nth-child(32) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('CTVIRO')
        cy.get('@CTVIRO').click({ force: true })
        cy.get('@CTVIRO').should('have.class', 'eye-icon --visible')

    });

    it('should select CTV LRO (ORGAN) filter option to be visible', () => {

        cy.get(':nth-child(33) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('CTVLRO')
        cy.get('@CTVLRO').click({ force: true })
        cy.get('@CTVLRO').should('have.class', 'eye-icon --visible')

    });

    it('should select b (ORGAN) filter option to be visible', () => {

        cy.get(':nth-child(34) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('b')
        cy.get('@b').click({ force: true })
        cy.get('@b').should('have.class', 'eye-icon --visible')

    });

    it('should select b0 (ORGAN) filter option to be visible', () => {

        cy.get(':nth-child(35) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('b0')
        cy.get('@b0').click({ force: true })
        cy.get('@b0').should('have.class', 'eye-icon --visible')

    });

    it('should select sc0 (ORGAN) filter option to be visible', () => {

        cy.get(':nth-child(36) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('sc0')
        cy.get('@sc0').click({ force: true })
        cy.get('@sc0').should('have.class', 'eye-icon --visible')

    })

    it('should select Partoid R0 (ORGAN) filter option to be visible', () => {

        cy.get(':nth-child(37) > .tableListItem > .itemContent > :nth-child(1) > .item-label > .eye-icon').as('PartoidR0')
        cy.get('@PartoidR0').click({ force: true })
        cy.get('@PartoidR0').should('have.class', 'eye-icon --visible')

    })


});