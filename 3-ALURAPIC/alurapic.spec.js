describe('Usabilidade tela inicial',() => {

    beforeEach(() =>{
        cy.visit('https://alura-fotos.herokuapp.com')

    })

    
    

   
    it ('verificar se vai aparecer a mensagem Must be lower case',() => {
        cy.contains('a','Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('DANILO');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','Must be lower case').should('be.visible');

    })

    

    });

    
    

     /* novos casos de teste */
     it.only('verifica mensagens tela inicial', () => {
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled');
 
    })

    it.only('verifica botao habilitado na tela inicial', () => {
        cy.get('input[formcontrolname="userName"]').type('Jacqueline');
        cy.get('input[formcontrolname="password"]').type('123');
        cy.get('button[type="submit"]').should('be.enabled');
    })

    it.only('verifica nome da aplicação na tela inicial', () => {
        cy.contains('a' ,' ALURAPIC ').should('be.visible');
    })

    it.only('verifica menu clicavel tela inicial', () => {
        cy.get('.navbar-brand > .fa').click();
        cy.get('.menu-bar > .fa').should('be.visible');
    })


