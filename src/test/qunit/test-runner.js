var Runner = {

	/** Método que se encarga de ejecutar la corrida de toda la suite de tests para la 
		aplicación Memoria */
	runTests : function () {		
		test( "a basic test example", function() {
		var value = "hello";
		equal( value, "hello", "We expect value to be hello");
		});
	};
};
