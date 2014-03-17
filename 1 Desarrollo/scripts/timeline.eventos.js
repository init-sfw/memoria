var Eventos = {
	filtrar: function (fecha_desde, fecha_hasta, ponderacion, filtros) {
		var deferred = $.Deferred();
		var consulta = $.getJSON('datos/datos_mundial-f.json');
		
		consulta.success(function (eventos) {
			var query = Enumerable
				.From(eventos)
				.Where(function (x) { 
					var fecha = x.fecha.parseDate();
					var rango = x.ponderacion <= ponderacion &&  fecha_desde <= fecha && fecha <= fecha_hasta;
					
					var categorias = filtros.categorias === null || 
									filtros.categorias.filter(function (val) { return val === x.categoria }).length !== 0;
					
					var paises = filtros.paises === null || 
									filtros.paises.filter(function (val) { return val === x.pais }).length !== 0;
									
					return rango && categorias && paises;
				})
				.ToArray();
				
			deferred.resolve({
			 	success: true,
			 	errors: null,
				eventos: query
			});
		});
		
		consulta.error(function () {
			deferred.resolve({
			 	success: false,
			 	errors: "Se ha producido una error en la carga de datos",
				eventos: null
			});
		});
		
		return deferred.promise();
	}	
};
