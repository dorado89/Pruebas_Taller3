describe("Los estudiantes filter", function() {
    it("Visits los estudiantes and shows a teacher's information page with filters in use", function() {
      var nombre = "Mario "+Math.random();
      var apellido = "Lin "+Math.random();
      var correo = makeid(8)+"@sharklasers.com";
      var profe = "MARIO LINARES";
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
      cy.get('form[role="search"]').click().find('input[role="combobox"]').type(profe);
      cy.contains('Mario Linares Vasquez - Ingeniería de Sistemas').click();
      cy.get('.materias').find('input[name="id:MISO4208"]').click();
      cy.contains('en las materias seleccionadas');
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