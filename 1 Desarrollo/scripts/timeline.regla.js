var Regla = {
	
	// Instancia del contenedor (scrollable) de la regla
	$scroll: null,
	// Instancia del contenedor (no scrollable) del conjunto de segmentos de la regla
	$regla: null,
	// Instancia del segmento sobre el cual esta posicionado el puntero del mouse
	$segmento: null,

	// Fecha de foco inicial
	fecha_foco: new Date(),
	// Fecha de inicio del primer segmento de la regla
	fecha_inicio: new Date(),
	// Fecha de fin del ultimo segmento de la regla
	fecha_fin: new Date(), 
		
	meses: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
	dias: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
	
	// Nivel de zoom por defecto
	zoom: 2,
	// Nombre de los niveles de zoom
	nombre_zoom: ['Siglo', 'Decada', 'Año', 'Mes', 'Dia'],
	// Array que contiene las referencias a las funciones que generan los segmentos para los distintos niveles de zoom
	funcion_zoom: [],
		
	// Cantidad de segmentos a mostrar a cada lado de la fecha_foco, y la cantidad que se agregarï¿½ por demanda
	cantidad_segmentos: 6,
	// Ancho en px de cada unos de los segmentos
	ancho_segmento: 135,
	// Posiciï¿½n del scroll en la que se realizara la carga de segmentos del lado izquierdo de la lï¿½nea
	posicion_scroll_limite_izquierdo:  2000,
	
	// Html del div que representa a un segmento
	html_segmento: '<div class="periodo-{clase}" style="display:none;"><div class="periodo-titulo">{etiqueta}</div></div>',
	// Clases que dan estilos a los segmentos segï¿½n sean pares o impares
	clase_segmento: ['odd', 'even'],
	// Direccion en la que se agregarï¿½n los nuevos segmentos
	direccion_segmento: {
		izquierda: 'first',
		derecha: 'last'
	},
	
	// Inicializa las instancias de los componentes html usados (div) y agrega los eventos necesarios a la regla
	init: function () {		
			
		Regla.$scroll = $('#timeline-scroll');
		Regla.$regla = $('#timeline-regla');
		
		Regla.funcion_zoom = [ Regla.crearSiglos, Regla.crearDecadas, Regla.crearAnios, Regla.crearMeses, Regla.crearDias ];
				
		// Efecto ZOOM con la rueda del mouse				
		Regla.$regla.mousewheel(function(e, delta) {
			Regla.$segmento = $(e.target).is('.periodo-titulo') ? $(e.target.parentNode) : $(e.target);
			Regla.fecha_foco = Regla.$segmento.data('fecha_fin');
			
			// Si aï¿½n no se han mostrado los segmentos salto de la funciï¿½n
			if(!Regla.fecha_foco) {
				return;
			}
														   
			if(delta > 0) { Regla.zoomAcercar(); }
			else { Regla.zoomAlejar(); }
		});
		
		// Scroll de la linea
		//Regla.$scroll.overscroll({ wheelDelta: 0, showThumbs: false, direction: 'horizontal' });
		//Regla.inicializarEventosScroll();
	},
	
	// Carga por demanda una vez que llega al final de la lï¿½nea
	inicializarEventosScroll: function () {
		Regla.$scroll.bind('overscroll:dragstart', function(){ 
			Linea.$lineas.find('span').css('left', 0).fadeOut();
		});
		
		Regla.$scroll.bind('overscroll:driftend', function() { 
			Regla.cargarSegmentosADemanda();
			
			// Ubica el titulo de cada lï¿½nea a la izquierda de la pantalla
			Linea.$lineas.find('span').css('left', Regla.$scroll.scrollLeft()).fadeIn();	
		});
	},
	
	// Mï¿½todo que llama a la carga de segmentos una vez que se acerca la navegaciï¿½n a los extremos
	cargarSegmentosADemanda: function () {		
		var posicion = Regla.$scroll.scrollLeft();
		/* TODO: Creemos que el valor del lado izquierdo es positivo, mientras que del lado derecho es negativo. 
		La condicion que crea los segmentos derechos no se cumple en ningun momento.
		No sabemos que hace la funcion regla.offset().left. 
		El valor de posicion empieza en 0 apenas arranca la linea y el valor de limite izquierdo es de 2000 px. 
		La condicion de posicion del limite izquierdo hace que aunque exista un solo segmento del lado izquierdo, no cree nuevos segmentos. Provocando la ralentizacion del efecto de la linea.
		Pensamos que la condicion esta mal planteada y habría que evaluar alguna forma más óptima para hacerlo. 
		Si el funcionamiento que suponemos del método es correcto, pensamos que seria más factible realizar un nuevo método
		para que quede más claro y más simple para nosotros.*/

		/* TODO (fede): Hagan los cambios que proponen y prueben el funcionamiento. 
		   No se queden en el análisis de las cosas, pasen a la acción en esta etapa.
		   El objetivo es hacer andar la navegabilidad de la regla, sin errores.
			
		   offset() : http://api.jquery.com/offset/

		   Borren comments y ataquen el problema. Si chocan o demoran laburando de a dos, busquen otro issue para mejorar la app y divídanse. La mejor documentación es código andando.
		*/

		// Carga en el extremo izquierdo
	/*	if(posicion <= Regla.posicion_scroll_limite_izquierdo) {
			Regla.cargarSegmentos(Regla.direccion_segmento.izquierda);
							
			// Obtiene el primer/ï¿½ltimo segmento existente en la regla y su correspondiente fecha de inicio y fin
			var extremo = Regla.obtenerSegmentoOrigen(Regla.direccion_segmento.izquierda);
			// Si no se llegï¿½ al aï¿½o 0
			if(extremo.fecha_inicio.getFullYear() > 0) { 
				//Sumo a la posiciï¿½n del scroll los segmentos agregados hacia la izquierda para que se mantenga en posiciï¿½n.
				Regla.$scroll.scrollLeft(posicion + (Regla.cantidad_segmentos * Regla.ancho_segmento));
			}
		}*/
		
		// Carga en el extremo derecho
		if(posicion >= Regla.$regla.offset().left) {
			Regla.cargarSegmentos(Regla.direccion_segmento.derecha);
		}
			
	},
	
	// Calcula el ancho de la regla multiplicando la cantidad de segmentos por el ancho en px de los mismos
	calcularAnchoRegla: function () {
		return Regla.$regla.children('div').length * Regla.ancho_segmento;
		Console.log($regla.children('div').length)
	},
	
	// Calcula el ancho en px de un dï¿½a, dividiendo el ancho total de la regla por la cantidad de dias representadas en ella
	calcularAnchoDia: function () {
		var total_dias = DateDiff.inDays(Regla.fecha_inicio, Regla.fecha_fin); 
		return Regla.calcularAnchoRegla() / total_dias;
	},
	
	// Calcula la distancia en px respecto del margen izquierdo de la derecha, multiplicando el ancho en px de un dï¿½a por la diferencia de dï¿½as entre la fecha de inicio de la regla y la fecha de evento
	calcularPosicionEvento: function (evento) {
		var fecha_evento = evento.fecha.parseDate();		
		var dias = DateDiff.inDays(Regla.fecha_inicio, fecha_evento); 
		
		return Regla.calcularAnchoDia() * dias;
	},	
	
	// Indica si un evento se encuentra dentro del rango de fechas visibles
	esEventoVisible: function (evento) {
		var fecha_evento = evento.fecha.parseDate();
		return fecha_evento >= Regla.fecha_inicio && fecha_evento <= Regla.fecha_fin;
	},
	
	// Efecto visual para mostrar la regla cuando se acerca/aleja el zoom
	mostrarRegla: function (animado) {
		if(animado) {
			Regla.$regla.children('div:hidden').each(function (ind, val) {
			   setTimeout(function () { $(val).show('slow','swing'); }, ind * 100);	
			});			
		}
		else {
			Regla.$regla.children('div:hidden').show('slow','swing');
		}
	},
	
	// Calcula setea el ancho en px de la regla teniendo en cuenta la cantidad y ancho de los segmentos creados
	redimensionarRegla: function () {
		Regla.$regla.css('width', Regla.calcularAnchoRegla() + 'px');
	},
	
	// Sube un nivel en la escala de zoom, vuelve a generar la regla y mostrar los eventos correspondientes
	zoomAcercar: function () {
		if(Regla.zoom < Regla.nombre_zoom.length - 1) {
			Regla.zoom ++;
			Regla.crearRegla();
			
			Linea.actualizarTodas();
		}
	},
	
	// Baja un nivel en la escala de zoom, vuelve a generar la regla y mostrar los eventos correspondientes
	zoomAlejar: function () {
		if(Regla.zoom > 0) {
			Regla.zoom --;
			Regla.crearRegla();
			
			Linea.actualizarTodas();
		}
	},
	
	// Mueve el ï¿½rea visible de la regla hacia la derecha y carga una nueva porciï¿½n de la regla en el caso que corresponda
	scrollAvanzar: function () {
		var posicion = Regla.$scroll.scrollLeft() + 700;
		
		Regla.$scroll.animate({ scrollLeft: posicion }, 'slow');
		Regla.cargarSegmentosADemanda();
		
	},
	
	// Mueve el ï¿½rea visible de la regla hacia la izquierda y carga una nueva porciï¿½n de la regla en el caso que corresponda
	scrollRetroceder: function () {
		var posicion = Regla.$scroll.scrollLeft() - 700;
		
		Regla.$scroll.animate({ scrollLeft: posicion }, 'slow');
		
		Regla.cargarSegmentosADemanda();
		
		
	},
	
	// Agrega segmentos a la izquierda de la regla
	cargarSegmentos: function (direccion) {		
		Regla.funcion_zoom[Regla.zoom](direccion, Regla.cantidad_segmentos);	
		
		Regla.mostrarRegla();
		Regla.redimensionarRegla();
		
		Linea.redimensionarLineas();
		Linea.actualizarTodas();
	},
	
	// General el html correspondiente al conjunto de segmentos a mostrar en la regla teniendo en cuenta el nivel de zoom
	crearRegla: function (fecha_foco) {
		Regla.fecha_foco = fecha_foco || Regla.fecha_foco;

		//TODO: REFACTORIZAR los mÃ©todos de manejo de regla, lÃ­neas y filtros
		//Limpio la regla
		Regla.$regla.html('');
		//Limpio las lÃ­neas
		Linea.$lineas.html('');
		
		// Agrego los segmentos
		Regla.funcion_zoom[Regla.zoom](Regla.direccion_segmento.izquierda);
		Regla.funcion_zoom[Regla.zoom](Regla.direccion_segmento.izquierda, Regla.cantidad_segmentos);
		Regla.funcion_zoom[Regla.zoom](Regla.direccion_segmento.derecha);
		Regla.funcion_zoom[Regla.zoom](Regla.direccion_segmento.derecha, Regla.cantidad_segmentos);
		
		// Setea las fechas de inicio y fin de la regla
		Regla.fecha_inicio = Regla.$regla.children("div:first").data('fecha_inicio');
		Regla.fecha_fin = Regla.$regla.children("div:last").data('fecha_fin');	

		// Creo las lÃ­neas dentro de la regla para que no sean borradas en el limpiado
		Linea.crearLinea();
		Linea.mostrarLineas();
		Linea.actualizarTodas();
		
		// Actualiza el tamaï¿½o de la regla de acuerdo a la cantidad de segmentos que se han cargado
		Regla.redimensionarRegla();	
		
		// Inserto el DIV de las LÃ­neas dentro de la Regla
		//$('#timeline-regla').append(Linea.$lineas);

		// Muestra la regla aplicandole un efecto visual
		Regla.mostrarRegla(true);
		
		//Revisa las lineas generadas por el filtro y las agrega (mismo metodo que el asignado al click del boton generar en timeline.filtro
		Filtros.generarLineas()
	},
	
	obtenerSegmentoOrigen: function (direccion) {
		var $origen = Regla.$regla.children('div:' + direccion);
		if($origen.length !== 0) {
			return {
				fecha_inicio: $origen.data('fecha_inicio'),
				fecha_fin: $origen.data('fecha_fin'),
				clase: $origen.attr('class').replace('periodo-', '') === Regla.clase_segmento[0] ? 0 : 1 
			};
		}
		return {};
	},
	
	crearSiglos: function (direccion, cantidad) {
		var siglo, div, clase;
		var segmentos = [];
		
		// Si no se ingresa ninguna cantidad, por defecto se crea solo un segmento
		cantidad = cantidad || 1;
		
		// Obtiene el primer/ï¿½ltimo segmento existente en la regla y su correspondiente fecha de inicio y fin
		var extremo = Regla.obtenerSegmentoOrigen(direccion);
				
		for(var i = 0; i < cantidad; i++) {
			// Si es el primer segmento
			if(!extremo.fecha_inicio) {
				siglo = parseInt(Regla.fecha_foco.getFullYear() / 100) + 1;
				clase = 2;
				
				extremo.fecha_inicio = new Date((siglo - 1) * 100, 0, 1, 0, 0);
				extremo.fecha_fin = new Date((siglo - 1) * 100 + 99, 11, 31, 59, 59);								
			}
			else {
				// Calculo el multiplicador que determinarï¿½ si se deben restar o sumar 100 aï¿½os al segmento $extremo
				var multiplicador = (direccion === Regla.direccion_segmento.izquierda) ? (-1) : 1;
				extremo.fecha_inicio = $.addTimeToDate(extremo.fecha_inicio, multiplicador * 100, 'y', false);
				extremo.fecha_fin = $.addTimeToDate(extremo.fecha_fin, multiplicador * 100, 'y', false);
				
				// Si la fecha es igual a false es porque se llego al Siglo 0
				if(direccion === Regla.direccion_segmento.izquierda && extremo.fecha_inicio.getFullYear() < 0) { break; }
								
				siglo = parseInt(extremo.fecha_inicio.getFullYear() / 100) + 1;		
				clase = clase || extremo.clase;
			}
			
			segmentos.push({
				fecha_inicio: extremo.fecha_inicio,
				fecha_fin: extremo.fecha_fin,
				clase: Regla.clase_segmento[(clase + 1) % 2],
				etiqueta: 'Siglo<br />' + RomanNumeral.romanize(siglo)
			});	
			
			clase ++;	
		}
		Regla.dibujarSegmentos(segmentos, direccion);
	},
	
	crearDecadas: function (direccion, cantidad) {
		var decada, mil, div, clase;
		var segmentos = [];
		
		// Si no se ingresa ninguna cantidad, por defecto se crea solo un segmento
		cantidad = cantidad || 1;
		
		// Obtiene el primer/ï¿½ltimo segmento existente en la regla y su correspondiente fecha de inicio y fin
		var extremo = Regla.obtenerSegmentoOrigen(direccion);
				
		for(var i = 0; i < cantidad; i++) {
			// Si es el primer segmento
			if(!extremo.fecha_inicio) {
				decada = parseInt((new String(Regla.fecha_foco.getFullYear())[2]) + '0');
				mil = parseInt(new String(Regla.fecha_foco.getFullYear()).substring(0, 2) + '00');				
				clase = 2;
				
				extremo.fecha_inicio = new Date(mil + decada, 0, 1, 0, 0);
				extremo.fecha_fin = new Date(mil + decada + 9, 11, 31, 59, 59);								
			}
			else {
				// Calculo el multiplicador que determinarï¿½ si se deben restar o sumar 100 aï¿½os al segmento $extremo
				var multiplicador = (direccion === Regla.direccion_segmento.izquierda) ? (-1) : 1;
				extremo.fecha_inicio = $.addTimeToDate(extremo.fecha_inicio, multiplicador * 10, 'y', false);
				extremo.fecha_fin = $.addTimeToDate(extremo.fecha_fin, multiplicador * 10, 'y', false);
				
				// No se continua agregando segmentos cuando se alcanza el aï¿½o 0
				if(direccion === Regla.direccion_segmento.izquierda && extremo.fecha_inicio.getFullYear() < 0) { break; }
									
				decada = parseInt((new String(extremo.fecha_inicio.getFullYear())[2]) + '0');
				mil = parseInt(new String(extremo.fecha_inicio.getFullYear()).substring(0, 2) + '00');
				
				clase = clase || extremo.clase;
			}
			
			segmentos.push({
				fecha_inicio: extremo.fecha_inicio,
				fecha_fin: extremo.fecha_fin,
				clase: Regla.clase_segmento[(clase + 1) % 2],
				etiqueta: 'Dï¿½cada \'' + decada + '<br />' + mil
			});		
			
			clase ++;	
		}
		Regla.dibujarSegmentos(segmentos, direccion);
	},
	
	crearAnios: function (direccion, cantidad) {
		var siglo, div, clase;
		var segmentos = [];
		
		// Si no se ingresa ninguna cantidad, por defecto se crea solo un segmento
		cantidad = cantidad || 1;
		
		// Obtiene el primer/ï¿½ltimo segmento existente en la regla y su correspondiente fecha de inicio y fin
		var extremo = Regla.obtenerSegmentoOrigen(direccion);
				
		for(var i = 0; i < cantidad; i++) {
			// Si es el primer segmento
			if(!extremo.fecha_inicio) {
				clase = 2;
				
				extremo.fecha_inicio = new Date(Regla.fecha_foco.getFullYear(), 0, 1, 0, 0);
				extremo.fecha_fin = new Date(Regla.fecha_foco.getFullYear(), 11, 31, 59, 59);								
			}
			else {
				// Calculo el multiplicador que determinarï¿½ si se deben restar o sumar 100 aï¿½os al segmento $extremo
				var multiplicador = (direccion === Regla.direccion_segmento.izquierda) ? (-1) : 1;
				extremo.fecha_inicio = $.addTimeToDate(extremo.fecha_inicio, multiplicador * 1, 'y', false);
				extremo.fecha_fin = $.addTimeToDate(extremo.fecha_fin, multiplicador * 1, 'y', false);
				
				// Si la fecha es igual a false es porque se llego al Siglo 0
				if(direccion === Regla.direccion_segmento.izquierda && extremo.fecha_inicio.getFullYear() < 0) { break; }
									
				clase = clase || extremo.clase;
			}
			
			segmentos.push({
				fecha_inicio: extremo.fecha_inicio,
				fecha_fin: extremo.fecha_fin,
				clase: Regla.clase_segmento[(clase + 1) % 2],
				etiqueta: extremo.fecha_inicio.getFullYear()
			});
			
			clase ++;
		}
		Regla.dibujarSegmentos(segmentos, direccion);
	},
	
	crearMeses: function (direccion, cantidad) {
		var siglo, div, clase;
		var segmentos = [];
		
		// Si no se ingresa ninguna cantidad, por defecto se crea solo un segmento
		cantidad = cantidad || 1;
		
		// Obtiene el primer/ï¿½ltimo segmento existente en la regla y su correspondiente fecha de inicio y fin
		var extremo = Regla.obtenerSegmentoOrigen(direccion);
				
		for(var i = 0; i < cantidad; i++) {
			// Si es el primer segmento
			if(!extremo.fecha_inicio) {
				var mes = Regla.fecha_foco.getUTCMonth();
				clase = 2;				
				
				extremo.fecha_inicio = new Date(Regla.fecha_foco.getFullYear(), mes, 1, 0, 0);
				extremo.fecha_fin = new Date(Regla.fecha_foco.getFullYear(), mes + 1, 0, 59, 59);								
			}
			else {
				// Calculo el multiplicador que determinarï¿½ si se deben restar o sumar 100 aï¿½os al segmento $extremo
				var multiplicador = (direccion === Regla.direccion_segmento.izquierda) ? (-1) : 1;
				extremo.fecha_inicio = $.addTimeToDate(extremo.fecha_inicio, multiplicador * 1, 'M', false);
				extremo.fecha_fin = $.addTimeToDate(extremo.fecha_fin, multiplicador * 1, 'M', false);
				
				// Si la fecha es igual a false es porque se llego al Siglo 0
				if(direccion === Regla.direccion_segmento.izquierda && extremo.fecha_inicio.getFullYear() < 0) { break; }
									
				clase = clase || extremo.clase;
			}
			
			segmentos.push({
				fecha_inicio: extremo.fecha_inicio,
				fecha_fin: extremo.fecha_fin,
				clase: Regla.clase_segmento[(clase + 1) % 2],
				etiqueta: Regla.meses[extremo.fecha_inicio.getUTCMonth()] + '<br />' + extremo.fecha_inicio.getFullYear()
			});
			
			clase ++;
		}
		Regla.dibujarSegmentos(segmentos, direccion);
	},
	
	crearDias: function (direccion, cantidad) {
		var siglo, div, clase;
		var segmentos = [];
		
		// Si no se ingresa ninguna cantidad, por defecto se crea solo un segmento
		cantidad = cantidad || 1;
		
		// Obtiene el primer/ï¿½ltimo segmento existente en la regla y su correspondiente fecha de inicio y fin
		var extremo = Regla.obtenerSegmentoOrigen(direccion);
				
		for(var i = 0; i < cantidad; i++) {
			// Si es el primer segmento
			if(!extremo.fecha_inicio) {
				clase = 2;				
				
				extremo.fecha_inicio = new Date(Regla.fecha_foco);
				extremo.fecha_fin = new Date(Regla.fecha_foco);
				
				extremo.fecha_inicio.setHours(0);
				extremo.fecha_inicio.setMinutes(0);
				extremo.fecha_fin.setHours(23);
				extremo.fecha_fin.setMinutes(59);
			}
			else {
				// Calculo el multiplicador que determinarï¿½ si se deben restar o sumar 100 aï¿½os al segmento $extremo
				var multiplicador = (direccion === Regla.direccion_segmento.izquierda) ? (-1) : 1;
				extremo.fecha_inicio = $.addTimeToDate(extremo.fecha_inicio, multiplicador * 1, 'd', false);
				extremo.fecha_fin = $.addTimeToDate(extremo.fecha_fin, multiplicador * 1, 'd', false);
				
				// Si la fecha es igual a false es porque se llego al Siglo 0
				if(direccion === Regla.direccion_segmento.izquierda && extremo.fecha_inicio.getFullYear() < 0) { break; }
									
				clase = clase || extremo.clase;
			}
			
			segmentos.push({
				fecha_inicio: extremo.fecha_inicio,
				fecha_fin: extremo.fecha_fin,
				clase: Regla.clase_segmento[(clase + 1) % 2],
				etiqueta: Regla.dias[extremo.fecha_inicio.getDay()] + '<br />' + extremo.fecha_inicio.formatDate()
			});
			
			clase ++;
		}
		Regla.dibujarSegmentos(segmentos, direccion);
	},
	
	dibujarSegmentos: function (segmentos, direccion) {
		for(var i = 0; i < segmentos.length; i++) {
			// Reemplaza las claves por los valores correspondientes a la clase y la etiqueta
			div = Regla.html_segmento
					.replace('{clase}', segmentos[i].clase)
					.replace('{etiqueta}', segmentos[i].etiqueta);
							
			// De acuerdo a la direcciï¿½n, se agrega el nuevo segmento a la regla
			if(direccion === Regla.direccion_segmento.izquierda) {
				Regla.$regla.prepend(div);
				Regla.fecha_inicio = segmentos[i].fecha_inicio;
			}
			else if(direccion === Regla.direccion_segmento.derecha) {
				Regla.$regla.append(div);
				Regla.fecha_fin = segmentos[i].fecha_fin;
			}
			
			// Obtiene el segmento recientemente creado y guarda en el data las fechas de inicio y fin del mismo
			Regla.$regla.children('div:' + direccion)
				.css('width', Regla.ancho_segmento + 'px')
				.data('fecha_inicio', segmentos[i].fecha_inicio)
				.data('fecha_fin', segmentos[i].fecha_fin);
		}
	},




	navegar : function() {
		
		var fechaNav = new Date ($("#FechaNavegar").val());
		//var fechaNav=new Date();
		//fechaNav=fechaNav.getFullYear();
		var expresion =  /([0-9\\]+)/i; //ExpresiÃ³n que evalÃºa lo ingresado al buscar una fecha
		if (!expresion.test($("#FechaNavegar").val())){
				botonBuscar.disabled=true;
				alert('Busqueda no valida, ingrese fechas');
		}
		else{
			if (!fechaNav) {
				alert('Error en el formato de fecha')
			}
			else {
					Regla.crearRegla(fechaNav);
					Linea.actualizarTodas();
			}
		}
	}

	
};
