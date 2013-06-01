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
	// Fecha de fin del �ltimo segmento de la regla
	fecha_fin: new Date(), 
		
	meses: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
	dias: ['Domingo', 'Lunes', 'Martes', 'Mi�rcoles', 'Jueves', 'Viernes', 'S�bado'],
	
	// Nivel de zoom por defecto
	zoom: 2,
	// Nombre de los niveles de zoom
	nombre_zoom: ['Siglo', 'D�cada', 'A�o', 'Mes', 'D�a'],
	// Array que contiene las referencias a las funciones que generan los segmentos para los distintos niveles de zoom
	funcion_zoom: [],
		
	// Cantidad de segmentos a mostrar a cada lado de la fecha_foco, y la cantidad que se agregar� por demanda
	cantidad_segmentos: 20,
	// Ancho en px de cada unos de los segmentos
	ancho_segmento: 135,
	// Posici�n del scroll en la que se realizara la carga de segmentos del lado izquierdo de la l�nea
	posicion_scroll_limite_izquierdo:  2000,
	
	// Html del div que representa a un segmento
	html_segmento: '<div class="periodo-{clase}" style="display:none;"><div class="periodo-titulo">{etiqueta}</div></div>',
	// Clases que dan estilos a los segmentos seg�n sean pares o impares
	clase_segmento: ['odd', 'even'],
	// Direccion en la que se agregar�n los nuevos segmentos
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
			
			// Si a�n no se han mostrado los segmentos salto de la funci�n
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
	
	// Carga por demanda una vez que llega al final de la l�nea
	inicializarEventosScroll: function () {
		Regla.$scroll.bind('overscroll:dragstart', function(){ 
			Linea.$lineas.find('span').css('left', 0).fadeOut();
		});
		
		Regla.$scroll.bind('overscroll:driftend', function() { 
			Regla.cargarSegmentosADemanda();
			
			// Ubica el titulo de cada l�nea a la izquierda de la pantalla
			Linea.$lineas.find('span').css('left', Regla.$scroll.scrollLeft()).fadeIn();	
		});
	},
	
	// M�todo que llama a la carga de segmentos una vez que se acerca la navegaci�n a los extremos
	cargarSegmentosADemanda: function () {		
		var posicion = Regla.$scroll.scrollLeft();
		
		// Carga en el extremo izquierdo
		if(posicion <= Regla.posicion_scroll_limite_izquierdo) {
			Regla.cargarSegmentos(Regla.direccion_segmento.izquierda);
							
			// Obtiene el primer/�ltimo segmento existente en la regla y su correspondiente fecha de inicio y fin
			var extremo = Regla.obtenerSegmentoOrigen(Regla.direccion_segmento.izquierda);
			// Si no se lleg� al a�o 0
			if(extremo.fecha_inicio.getFullYear() > 0) { 
				//Sumo a la posici�n del scroll los segmentos agregados hacia la izquierda para que se mantenga en posici�n.
				Regla.$scroll.scrollLeft(posicion + (Regla.cantidad_segmentos * Regla.ancho_segmento));
			}
		}
		
		// Carga en el extremo derecho
		if(posicion >= Regla.$regla.offset().left) {
			Regla.cargarSegmentos(Regla.direccion_segmento.derecha);
		}
	},
	
	// Calcula el ancho de la regla multiplicando la cantidad de segmentos por el ancho en px de los mismos
	calcularAnchoRegla: function () {
		return Regla.$regla.children('div').length * Regla.ancho_segmento;
	},
	
	// Calcula el ancho en px de un d�a, dividiendo el ancho total de la regla por la cantidad de dias representadas en ella
	calcularAnchoDia: function () {
		var total_dias = DateDiff.inDays(Regla.fecha_inicio, Regla.fecha_fin); 
		return Regla.calcularAnchoRegla() / total_dias;
	},
	
	// Calcula la distancia en px respecto del margen izquierdo de la derecha, multiplicando el ancho en px de un d�a por la diferencia de d�as entre la fecha de inicio de la regla y la fecha de evento
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
			   setTimeout(function () { $(val).show("slow","swing"); }, ind * 100);	
			});			
		}
		else {
			Regla.$regla.children('div:hidden').show();
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
	
	// Mueve el �rea visible de la regla hacia la derecha y carga una nueva porci�n de la regla en el caso que corresponda
	scrollAvanzar: function () {
		var posicion = Regla.$scroll.scrollLeft() + 700;
		Regla.$scroll.animate({ scrollLeft: posicion }, 'slow');
		
		Regla.cargarSegmentosADemanda();
	},
	
	// Mueve el �rea visible de la regla hacia la izquierda y carga una nueva porci�n de la regla en el caso que corresponda
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

		Regla.$regla.html('');
		
		// Agrego los segmentos
		Regla.funcion_zoom[Regla.zoom](Regla.direccion_segmento.izquierda);
		Regla.funcion_zoom[Regla.zoom](Regla.direccion_segmento.izquierda, Regla.cantidad_segmentos);
		Regla.funcion_zoom[Regla.zoom](Regla.direccion_segmento.derecha);
		Regla.funcion_zoom[Regla.zoom](Regla.direccion_segmento.derecha, Regla.cantidad_segmentos);
		
		// Setea las fechas de inicio y fin de la regla
		Regla.fecha_inicio = Regla.$regla.children("div:first").data('fecha_inicio');
		Regla.fecha_fin = Regla.$regla.children("div:last").data('fecha_fin');
		
		// Actualiza el tama�o de la regla de acuerdo a la cantidad de segmentos que se han cargado
		Regla.redimensionarRegla();		
		
		// Muestra la regla aplicandole un efecto visual
		Regla.mostrarRegla(true);
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
		
		// Obtiene el primer/�ltimo segmento existente en la regla y su correspondiente fecha de inicio y fin
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
				// Calculo el multiplicador que determinar� si se deben restar o sumar 100 a�os al segmento $extremo
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
		
		// Obtiene el primer/�ltimo segmento existente en la regla y su correspondiente fecha de inicio y fin
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
				// Calculo el multiplicador que determinar� si se deben restar o sumar 100 a�os al segmento $extremo
				var multiplicador = (direccion === Regla.direccion_segmento.izquierda) ? (-1) : 1;
				extremo.fecha_inicio = $.addTimeToDate(extremo.fecha_inicio, multiplicador * 10, 'y', false);
				extremo.fecha_fin = $.addTimeToDate(extremo.fecha_fin, multiplicador * 10, 'y', false);
				
				// No se continua agregando segmentos cuando se alcanza el a�o 0
				if(direccion === Regla.direccion_segmento.izquierda && extremo.fecha_inicio.getFullYear() < 0) { break; }
									
				decada = parseInt((new String(extremo.fecha_inicio.getFullYear())[2]) + '0');
				mil = parseInt(new String(extremo.fecha_inicio.getFullYear()).substring(0, 2) + '00');
				
				clase = clase || extremo.clase;
			}
			
			segmentos.push({
				fecha_inicio: extremo.fecha_inicio,
				fecha_fin: extremo.fecha_fin,
				clase: Regla.clase_segmento[(clase + 1) % 2],
				etiqueta: 'D�cada \'' + decada + '<br />' + mil
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
		
		// Obtiene el primer/�ltimo segmento existente en la regla y su correspondiente fecha de inicio y fin
		var extremo = Regla.obtenerSegmentoOrigen(direccion);
				
		for(var i = 0; i < cantidad; i++) {
			// Si es el primer segmento
			if(!extremo.fecha_inicio) {
				clase = 2;
				
				extremo.fecha_inicio = new Date(Regla.fecha_foco.getFullYear(), 0, 1, 0, 0);
				extremo.fecha_fin = new Date(Regla.fecha_foco.getFullYear(), 11, 31, 59, 59);								
			}
			else {
				// Calculo el multiplicador que determinar� si se deben restar o sumar 100 a�os al segmento $extremo
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
		
		// Obtiene el primer/�ltimo segmento existente en la regla y su correspondiente fecha de inicio y fin
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
				// Calculo el multiplicador que determinar� si se deben restar o sumar 100 a�os al segmento $extremo
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
		
		// Obtiene el primer/�ltimo segmento existente en la regla y su correspondiente fecha de inicio y fin
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
				// Calculo el multiplicador que determinar� si se deben restar o sumar 100 a�os al segmento $extremo
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
							
			// De acuerdo a la direcci�n, se agrega el nuevo segmento a la regla
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
		var expresion =  /([0-9\\]+)/i; //Expresión que evalúa lo ingresado al buscar una fecha
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
