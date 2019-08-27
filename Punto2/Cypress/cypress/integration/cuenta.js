describe('Los estudiantes register', function() {
    it('Visits los estudiantes, creates user, tests login, create login with existing user and fails', function() {
      var nombre = "Mario "+Math.random();
      var apellido = "Lin "+Math.random();
      var correo = makeid(8)+"@sharklasers.com";
      cy.visit('https://losestudiantes.co');
      cy.contains('Cerrar').click();
      //Lineas nuevas  
      cy.contains('Ingresar').click();
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type(nombre);
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type(apellido);
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type(correo);
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678");
      cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('Ingeniería de Sistemas y Computación')
      cy.get('.cajaSignUp').find('input[name="acepta"]').click();
      cy.get('.cajaSignUp').contains('Registrarse').click();
      cy.contains('Ok').click();
      cy.get('button[id="cuenta"]').click();
      cy.contains('Salir').click();
      cy.contains('Ingresar').click();
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type(correo);
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("12345678");
      cy.get('.cajaLogIn').contains('Ingresar').click();
      cy.get('button[id="cuenta"]').click();
      cy.contains('Salir').click();
      cy.contains('Ingresar').click();
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type(nombre);
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type(apellido);
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type(correo);
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678");
      cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('Ingeniería de Sistemas y Computación')
      cy.get('.cajaSignUp').find('input[name="acepta"]').click();
      cy.get('.cajaSignUp').contains('Registrarse').click();
      //Error: Ya existe un usuario registrado con el correo 'yyj7a4n2@sharklasers.com'
      cy.contains("Error: Ya existe un usuario registrado con el correo '"+correo+"'");
    });
});
function makeid(length) {
   var result           = '';
   var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}