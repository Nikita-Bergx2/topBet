describe('bet', () => {
    it('Creating a New Post', () => {
        /*
            //SIGN UP
        
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        
            cy.visit('https://m-dev.tb.exxs.net/de/')
            cy.get('.mi-login').click()
            cy.get('.sc-kBqmDu > .sc-gJjCVn').click()
        
            cy.get(':nth-child(2) > :nth-child(1) > .sc-WZYut > .sc-uxdHp').type(Vorname())
        
            function Vorname() {
              var text = "";
              for (var i = 0; i < 10; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
              return text;
            }
        
            cy.get(':nth-child(2) > .sc-WZYut > .sc-uxdHp').type(Nachname())
        
            function Nachname() {
              var text = "";
              for (var i = 0; i < 10; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
              return text;
            }
        
        
            cy.get(':nth-child(3) > .form-input-error > .sc-WZYut > .sc-uxdHp').type(Geburtsname())
        
            function Geburtsname() {
              var text = "";
              for (var i = 0; i < 10; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
              }
              return text;
            }
        
            cy.get(':nth-child(4) > .form-input-error > .sc-gggoXN > .sc-hcmsbg').select('Deutschland')
        
            cy.get(':nth-child(5) > .sc-WZYut > .sc-uxdHp').type(Geburtsort())
        
            function Geburtsort() {
              var text = "";
              for (var i = 0; i < 10; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
              }
              return text;
            }
        
            cy.get('.sc-hLyimJ').click()
            cy.get('.react-datepicker__year-select').select('2000')
            cy.get('.react-datepicker__month-select').select('January')
            cy.get(':nth-child(1) > .react-datepicker__day--001').click()
            cy.get('form > .sc-cvdZrU').click()
        
            cy.get(':nth-child(2) > .form-input-error > .sc-WZYut > .sc-uxdHp').type(emailAdresse())
        
            function emailAdresse() {
              var text = "";
              for (var i = 0; i < 10; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
              }
              text += (Math.floor(Math.random() * 100));
              return text += "@boomstraat.de";
            }
        
            cy.get(':nth-child(3) > .form-input-error > .sc-WZYut > .sc-uxdHp').type(Benutzername())
        
            function Benutzername() {
              var text = "";
              for (var i = 0; i < 10; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
              }
              return text;
            }
        
            cy.get('.sc-biJonm > .sc-WZYut > .sc-uxdHp').type(passwortVergeben())
        
            function passwortVergeben() {
              var text = "";
              for (var i = 0; i < 10; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
              }
              text += (Math.floor(Math.random() * 100));
              return text += "0123456789";
            }
        
            cy.get('.mi-eye').click()
            cy.get('.sc-biJonm > .sc-WZYut > .sc-uxdHp').should('be.visible')
            cy.get('form > .sc-cvdZrU').click()
            cy.get(':nth-child(1) > .sc-gggoXN > .sc-hcmsbg').select('Deutschland')
            cy.get(':nth-child(4) > .sc-gggoXN > .sc-hcmsbg').select('Deutschland')
            cy.get('[style="flex: 4 1 0%; margin-right: 5px;"] > .form-input-error > .sc-WZYut > .sc-uxdHp').type('10115')
            cy.get('[style="flex: 2 1 0%;"] > .form-input-error > .sc-WZYut > .sc-uxdHp').type('57')
            cy.get('[style="flex: 2 1 0%; margin-right: 5px;"] > .form-input-error > .sc-WZYut > .sc-uxdHp').type('10115')
        
            cy.get('[style="flex: 4 1 0%;"] > .form-input-error > .sc-WZYut > .sc-uxdHp').type(Wohnort())
        
            function Wohnort() {
              var text = "";
              for (var i = 0; i < 10; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
              }
              return text;
            }
        
            cy.get(':nth-child(3) > .form-input-error > .sc-WZYut > .sc-uxdHp').type('+949348483843783484')
            cy.get('form > .sc-cvdZrU').click()
            cy.get('#terms_agree').click()
            cy.get('#privacy_agree').click()
            cy.get('form > .sc-cvdZrU').click()
            cy.contains('Das hat geklappt!')
             */

        //SIGN IN
        cy.visit('https://m-dev.tb.exxs.net/', {
            auth: {
                username: 't',
                password: 'm'
            },
        })

        cy.get('.mi-login').click()
        cy.get('form > :nth-child(1) input').type('dorfsepp')
        cy.get('form > :nth-child(2) input').type('b1a20d64c')
        cy.get('form > .sc-cxNHIi').click()

        //HOME
        cy.url().should('include', '/de/home')
        cy.contains('Zum Wettangebot*').click()

        //SPORT
        cy.get('div :nth-child(1) > .link').click()
        cy.url().should('include', '/de/categories/')

        //cy.get('.sc-czETjp').scrollTo('right')
        //cy.get('.sc-czETjp').scrollTo('left')
        //cy.get('.sc-czETjp').scrollTo('center')
        //cy.scrollTo('bottomRight')
        //cy.scrollTo('topRight')
        //cy.scrollTo('right')


        /*
        cy.wrap(['Fussball', 'Eishockey', 'Tennis', 'Basketball', 'Handball', 'Tischtennis','Snooker', 'Volleyball', 'Baseball', 'Golf', 'Motorsport', 'Kricket'  ]).each(($name) => {
          return new Cypress.Promise((resolve, reject) => {
            if (cy.get('div').contains($name.toString())) {
              cy.contains($name.toString()).then(() => {
                cy.contains($name.toString()).click()
              })
              resolve();
            } else {
              reject();
            }
          })
        })*/


        // describe('1', function() {
        //   it('1', function() {
        //     cy.contains('Fussball').then(() => {
        //       {
        //         cy.contains('Fussball').click()
        //       }
        //     })
        //   });
        // });
        //
        // describe('2', function () {
        //   it('2', function() {
        //     cy.contains('Eishockey').then(() => {
        //       {
        //         cy.contains('Eishockey').click()
        //       }
        //     })
        //   });
        // });

        cy.get('.mi-chevron-down').click()
        cy.get('.hvpbZc').click()
        cy.contains('Alle').click()
        cy.get('[data-value="24h"]').click()
        cy.get('.mi-chevron-down').click()
        cy.get('[data-value="3h"]').click()

        //LIVE
        cy.get(':nth-child(2) > .link').click()
        cy.url().should('include', '/de/live')

        cy.contains(',0').click()

        //Wettschein
        cy.get(':nth-child(3) > .link').click()
        cy.url().should('include', 'betting-slip')
        cy.get('.sc-iCoGMd').contains(',0')
        cy.get('input').click()
        cy.get('.mi-keyboard-delete').click()
        cy.get('.sc-jOFryr > :nth-child(2)').click()
        cy.contains('Wette abgeben').click()
        //cy.contains('Wettschein Bestätigen').click()

        /*
            //Cashout
            cy.get(':nth-child(4) > .link').click()
            cy.url().should('include','/de/user/bets')
        
            //Menü
           cy.get(':nth-child(5) > .link').click()
           cy.contains('Menü')
              cy.get('.sc-gGuRsA').click()
            cy.get(':nth-child(1) > .sc-cjzNjn > .sc-fxFQKN')
            cy.get('.sc-gGuRsA').click()
              cy.get(':nth-child(1) > .sc-juXuNZ').click()
              cy.url().should('include','/de/categories/')
              cy.get(':nth-child(5) > .link').click()
              cy.contains('Menü')
              cy.get(':nth-child(2) > .sc-juXuNZ > .sc-gtsrHT').click()
              cy.url().should('include','/de/live')
        */
        // cy.get('.sc-gVtoEh').click()
        // cy.contains('Abbrechen').click()


    })
})