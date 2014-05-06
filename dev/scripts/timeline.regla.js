var Regla = {
	
	// Instancia del contenedor (scrollable) de la regla
	$scroll: null,
	// Instancia m�stica
	$contenedor: null,
	// Instancia del contenedor (no scrollable) del conjunto de segmentos de la regla
	$regla: null,
	// Instancia del segmento sobre el cual esta posicionado el puntero del mouse
	$segmento: null,

	
	
	$filtro: null,
	// Fecha de foco inicial
	fecha_foco: new Date(),
	// Fecha de inicio del primer segmento de la regla
	fecha_inicio: new Date(),
	// Fecha de fin del �ltimo segmento de la regla
	fecha_fin: new Date(), 
	
	//Ancho del div que contiene la imagen representativa de un evento en la l�nea
	ancho_evento: 30,
		
	meses: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
	dias: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
	
	// Nivel de zoom por defecto
	zoom: 2,
	// Nombre de los niveles de zoom
	nombre_zoom: ['Siglo', 'Decada', 'A�o', 'Mes', 'Dia'],
	// Array que contiene las referencias a las funciones que generan los segmentos para los distintos niveles de zoom
	funcion_zoom: [],
		
	// Cantidad de segmentos a mostrar a cada lado de la fecha_foco, y la cantidad que se agregar�a por demanda
	cantidad_segmentos: 6,
	// Ancho en px de cada unos de los segmentos
	ancho_segmento: 135,
	// Posici�n del scroll en la que se realizara la carga de segmentos del lado izquierdo de la l�nea
	posicion_scroll_limite_izquierdo:  2000,
	
	//Se crea una variable inicio para saber si se encuentra en el comienzo de la creaci�n de la regla. Sirve en el metodo dibujar Segmentos
	inicio: 0,
	
	
	//Agrego variable para establecer el limite de divs que debe haber siempre para que se navegue y cargue automaticamente 
	limiteCargaDiv: 20,
	
	//Estas variables contendran los ide de los segmentos correspondientes al de la izquierda derecha y centro de la regla, con centro se refiere al que se encuentra en el centro de la pantalla no de la regla
	izquierda: null,
	derecha: null,
	centro: null,
	
	// Html del div que representa a un segmento
	//ACTUALIZACI�N: se ha agregado en la etiqueta div el id con miID para poder ser reemplazada con el id corresponiente respecto a la ubicaci�n en la regla
	html_segmento: '<div id="{miID}" class="periodo-{clase}" style="display:none;"><div class="periodo-titulo">{etiqueta}</div></div>',
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
		Regla.$contenedor = $('#timeline-contenedor');
		Regla.$regla = $('#timeline-regla');
		
		
		Regla.funcion_zoom = [ Regla.crearSiglos, Regla.crearDecadas, Regla.crearAnios, Regla.crearMeses, Regla.crearDias ];
				
		// Efecto ZOOM con la rueda del mouse
		Regla.$regla.mousewheel(function(e, delta) {
			Regla.$segmento = $(e.target).is('.periodo-titulo') ? $(e.target.parentNode) : $(e.target);
			// Pregunto si el elemento guardado en Regla.$segmento es un per�odo para evitar problema de m�ltiples mousewheels
			if (Regla.$segmento != $('#timeline-regla') 
				&& Regla.$segmento.attr('class') 
				&& (Regla.$segmento.hasClass('periodo-even') || Regla.$segmento.hasClass('periodo-odd'))
				)
			{ 
				Regla.fecha_foco = Regla.$segmento.data('fecha_inicio');
			
				// Si a�n no se han mostrado los segmentos salto de la funci�n
				if(!Regla.fecha_foco) {
					return;
				}
												   
				if(delta > 0) { Regla.zoomAcercar(); }
				else { Regla.zoomAlejar(); }
			}
		});
		
		// Scroll de la linea		
		//Regla.$contenedor.overscroll({ wheelDelta: 0, showThumbs: true, direction: 'horizontal', });
		//Regla.inicializarEventosScroll();
		
	},

	activarScrollHorizontal: function () {

		Regla.$contenedor.overscroll({ wheelDelta: 0, showThumbs: false, direction: 'horizontal', });
	},

	
	// Carga por demanda una vez que llega al final de la l�nea
	inicializarEventosScroll: function () {
		Regla.$scroll.bind('overscroll:dragstart', function(){ 
			Linea.$lineas.find('span').css('left', 0).fadeOut();
		});
		
		//M�todo DEPRECADO
		Regla.$scroll.bind('overscroll:driftend', function() { 
			Regla.cargarSegmentosADemanda();
			
			// Ubica el titulo de cada l�nea a la izquierda de la pantalla
			Linea.$lineas.find('span').css('left', Regla.$scroll.scrollLeft()).fadeIn();
			alert("M�todo deprecado, suponemos que no se usa m�s. Si te salta este error checke� el m�todo inicializarEventosScroll() del script timeline.regla.js");	
		});
	},
	
	// Calcula el ancho de la regla multiplicando la cantidad de segmentos por el ancho en px de los mismos
	//MODIFICACION: Se le resta uno porque al tomar la cantidad de divs que hay en regla (length) tambien toma en cuenta timeline-lineas div lo que hace que el calculo de mal, por eso se le resta uno) 
	calcularAnchoRegla: function () {
		return (Regla.$regla.children('div').length - 1) * Regla.ancho_segmento;
	},
	
	// Calcula el ancho en px de un d�a, dividiendo el ancho total de la regla por la cantidad de dias representadas en ella
	calcularAnchoDia: function () {
		var total_dias = DateDiff.inDays(Regla.fecha_inicio, Regla.fecha_fin); 
		return Regla.calcularAnchoRegla() / total_dias;
	},
	
	// Calcula la distancia en px respecto del margen izquierdo de la derecha, multiplicando el ancho en px de un d�a por la diferencia de d�as entre la fecha de inicio de la regla y la fecha de evento
	//MODIFICACION: Se le resta a la posicion del evento la mitad del tama�o del div de la imagen representativa del evento para que este quede centrado en la fecha que corresponde y no quede al comienzo de la fecha que corresponde. Se utiliza el valor del atributo ancho_evento
	calcularPosicionEvento: function (evento) {
		var fecha_evento = evento.fecha.parseDate();		
		var dias = DateDiff.inDays(Regla.fecha_inicio, fecha_evento); 
		var resto =  Regla.ancho_evento / 2;
		return (Regla.calcularAnchoDia() * dias) - resto;
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
	
	// Mueve el �rea visible de la regla hacia la derecha y carga una nueva porci�n de la regla en el caso que corresponda
	scrollAvanzar: function () {
		//ACTUALIZACION: Se han modificado el valor de avance del sroll de la regla por un c�lculo que consiste en multiplicar la cantidad de segmentos a sumar por el ancho de cada segmento
		var posicion = Regla.$scroll.scrollLeft() + (Regla.ancho_segmento * Regla.cantidad_segmentos);
		
		
		//Aca condiciona la cracion de segmentos a derecha si el valro absoluto de la diferencia de divs (calculada con los id que tienen) (el valor absouto representa la distancia en divs que hay desde el centro al de la derecha) y si esta distancia es menor a 20 crea sino no
		//limiteCargaDiv es la distancia minima que debe haber en el div central y el que se encuentre en el limite de la regla
		if (Math.abs(Regla.derecha-Regla.centro) < Regla.limiteCargaDiv) {
			Regla.cargarSegmentos(Regla.direccion_segmento.derecha);
		}
		Regla.$scroll.animate({ scrollLeft: posicion }, 'slow');
		Regla.centro += Regla.cantidad_segmentos;		
		
	},
	
	// Mueve el �rea visible de la regla hacia la izquierda y carga una nueva porci�n de la regla en el caso que corresponda
	scrollRetroceder: function () {
		var posicion = Regla.$scroll.scrollLeft() - (Regla.ancho_segmento * Regla.cantidad_segmentos);		
		
		//Realiza el mismo calculo que en avanzar pero para el lado izquierdo
		//limiteCargaDiv es la distancia minima que debe haber en el div central y el que se encuentre en el limite de la regla
		if (Math.abs(Regla.centro - Regla.izquierda) < Regla.limiteCargaDiv) {
			Regla.cargarSegmentos(Regla.direccion_segmento.izquierda);
		}
		// Obtiene el primer/�ltimo segmento existente en la regla y su correspondiente fecha de inicio y fin
		var extremo = Regla.obtenerSegmentoOrigen(Regla.direccion_segmento.izquierda);
		// Si no se lleg� al a�o 0
		if(extremo.fecha_inicio.getFullYear() > 0) { 
			//Sumo a la posici�n del scroll los segmentos agregados hacia la izquierda para que se mantenga en posici�n.
			Regla.$scroll.scrollLeft(posicion + (Regla.cantidad_segmentos * Regla.ancho_segmento));
		}		
		Regla.$scroll.animate({ scrollLeft: posicion }, 'slow');
		Regla.centro -= Regla.cantidad_segmentos;
		
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
		//Se setea el valor inicio en 0 para que la funcion dibujar segmentos tenga en cuenta que recien esta creando una regla y no hay una linea creada
		Regla.inicio = 0;
		
		Regla.fecha_foco = fecha_foco || Regla.fecha_foco ;

		

		//TODO: REFACTORIZAR los m�todos de manejo de regla, l�neas y filtros
		//Limpio la regla
		Regla.$regla.html('');
		//Limpio las l�neas
		Linea.$lineas.html('');
		
		// Agrego los segmentos, primero el del centro, luego seis a la izquierda y seis a la derecha
		Regla.funcion_zoom[Regla.zoom](Regla.direccion_segmento.izquierda);
		Regla.funcion_zoom[Regla.zoom](Regla.direccion_segmento.izquierda, Regla.cantidad_segmentos);
		Regla.funcion_zoom[Regla.zoom](Regla.direccion_segmento.derecha, Regla.cantidad_segmentos);
		
		// Setea las fechas de inicio y fin de la regla
		Regla.fecha_inicio = Regla.$regla.children("div:first").data('fecha_inicio');
		Regla.fecha_fin = Regla.$regla.children("div:last").data('fecha_fin');	

		// Creo las l�neas dentro de la regla para que no sean borradas en el limpiado
		Linea.crearLinea();
		Linea.mostrarLineas();
		Linea.actualizarTodas();
		
		// Actualiza el tama�o de la regla de acuerdo a la cantidad de segmentos que se han cargado
		Regla.redimensionarRegla();	
		
		// Inserto el DIV de las L�neas dentro de la Regla
		$('#timeline-regla').append(Linea.$lineas);

		// Muestra la regla aplicandole un efecto visual
		Regla.mostrarRegla(true);
		
		//Vuelve a setear el inicio en 1 para dejar registrado que termino de crear la regla		
		Regla.inicio = 1;
		
		
		//Revisa las lineas generadas por el filtro y las agrega (mismo metodo que el asignado al click del boton generar en timeline.filtro
		Filtros.generarLineas()
		
	},
	
	obtenerSegmentoOrigen: function (direccion) {		
		var $origen;
		var $linea;
		// Si estamos navegando hacia la derecha, traer el pen�ltimo nodo del div, ya que el �ltimo es el div de las l�neas
		//TODO: Refactorizar el m�todo
		if (direccion === Regla.direccion_segmento.derecha)
		{	
			if(Regla.inicio === 1){$origen = Regla.$regla.children().eq(-2);}
			else{$origen = Regla.$regla.children().eq(-1);}
		}
		else
		{
			$origen = Regla.$regla.children('div:' + direccion);
		}
		if($origen.length !== 0) {
			return {
				//aca se agrega el miIDorgen que contiene el id del div que se obtuvo como origen. y esta casteado a int para poder realizar calculos sobre el
				miIDorigen: parseInt($origen.attr('id')),
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
				
				extremo.fecha_inicio = new Date((siglo - 1) * 100, 0, 1);
				extremo.fecha_fin = new Date((siglo - 1) * 100 + 99, 11, 31);

				//Al ser el primer segmento de la regla se le setea a extremo el id = 0 y como ya se dibujara en la regla se setea el valor central de la pantalla en 0			
				extremo.miIDorigen = 0;
				Regla.centro = 0;								
			}
			else {
				// Calculo el multiplicador que determinar� si se deben restar o sumar 100 a�os al segmento $extremo
				var multiplicador = (direccion === Regla.direccion_segmento.izquierda) ? (-1) : 1;
				//Esta linea de c�digo hace que se le sume al id del extremo el multiplicador dado que si es un segmento que se dibuja a la izquierda se le restar� uno y qudara negativo, y si es para la derecha sumara uno positivo y quedar� positivo
				extremo.miIDorigen += multiplicador; 
				extremo.fecha_inicio = $.addTimeToDate(extremo.fecha_inicio, multiplicador * 100, 'y', false);
				extremo.fecha_fin = $.addTimeToDate(extremo.fecha_fin, multiplicador * 100, 'y', false);
				
				//En esta validaci�n se pregunta si la direcc�on es derecha o izquierda para setear las variables derecha e izquierda segun corresponda con el id que se encuentre al extremo de la regla.
				//Se podr�a optimizar este codigo haciendo que se sete solo al final del for para que no se repita todas las veces
				if(direccion === Regla.direccion_segmento.izquierda)
				{
					Regla.izquierda = extremo.miIDorigen;		
				} 
				else 
				{
						Regla.derecha = extremo.miIDorigen;	
				}
				// Si la fecha es igual a false es porque se llego al Siglo 0
				if(direccion === Regla.direccion_segmento.izquierda && extremo.fecha_inicio.getFullYear() < 0) { break; }
								
				siglo = parseInt(extremo.fecha_inicio.getFullYear() / 100) + 1;		
				clase = clase || extremo.clase;
			}
			
			segmentos.push({
				//aca se agrega a segmentos el id que corresponde para dibujar el div
				miID: extremo.miIDorigen,
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
				
				extremo.fecha_inicio = new Date(mil + decada, 1, 1);
				extremo.fecha_fin = new Date(mil + decada + 9, 11, 31);	

				//Al ser el primer segmento de la regla se le setea a extremo el id = 0 y como ya se dibujara en la regla se setea el valor central de la pantalla en 0			
				extremo.miIDorigen = 0;
				Regla.centro = 0;							
			}
			else {
				// Calculo el multiplicador que determinar� si se deben restar o sumar 100 a�os al segmento $extremo
				var multiplicador = (direccion === Regla.direccion_segmento.izquierda) ? (-1) : 1;
				//Esta linea de c�digo hace que se le sume al id del extremo el multiplicador dado que si es un segmento que se dibuja a la izquierda se le restar� uno y qudara negativo, y si es para la derecha sumara uno positivo y quedar� positivo
				extremo.miIDorigen += multiplicador; 
				extremo.fecha_inicio = $.addTimeToDate(extremo.fecha_inicio, multiplicador * 10, 'y', false);
				extremo.fecha_fin = $.addTimeToDate(extremo.fecha_fin, multiplicador * 10, 'y', false);
				

				//En esta validaci�n se pregunta si la direcc�on es derecha o izquierda para setear las variables derecha e izquierda segun corresponda con el id que se encuentre al extremo de la regla.
				//Se podr�a optimizar este codigo haciendo que se sete solo al final del for para que no se repita todas las veces
				if(direccion === Regla.direccion_segmento.izquierda)
				{
					Regla.izquierda = extremo.miIDorigen;		
				} 
				else 
				{
						Regla.derecha = extremo.miIDorigen;	
				}
				// No se continua agregando segmentos cuando se alcanza el a�o 0
				if(direccion === Regla.direccion_segmento.izquierda && extremo.fecha_inicio.getFullYear() < 0) { break; }
									
				decada = parseInt((new String(extremo.fecha_inicio.getFullYear())[2]) + '0');
				mil = parseInt(new String(extremo.fecha_inicio.getFullYear()).substring(0, 2) + '00');
				
				clase = clase || extremo.clase;
			}
			
			segmentos.push({
				//aca se agrega a segmentos el id que corresponde para dibujar el div
				miID: extremo.miIDorigen,
				fecha_inicio: extremo.fecha_inicio,
				fecha_fin: extremo.fecha_fin,
				clase: Regla.clase_segmento[(clase + 1) % 2],
				etiqueta: 'D&eacute;cada \'' + decada + '<br />' + mil
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
				
				extremo.fecha_inicio = new Date(Regla.fecha_foco.getFullYear(), 0, 1);
				extremo.fecha_fin = new Date(Regla.fecha_foco.getFullYear(), 11, 31);
				//Al ser el primer segmento de la regla se le setea a extremo el id = 0 y como ya se dibujara en la regla se setea el valor central de la pantalla en 0			
				extremo.miIDorigen = 0;
				Regla.centro = 0;					
			}
			else {
				// Calculo el multiplicador que determinar� si se deben restar o sumar 100 a�os al segmento $extremo
				
				var multiplicador = (direccion === Regla.direccion_segmento.izquierda) ? (-1) : 1;
				//Esta linea de c�digo hace que se le sume al id del extremo el multiplicador dado que si es un segmento que se dibuja a la izquierda se le restar� uno y qudara negativo, y si es para la derecha sumara uno positivo y quedar� positivo
				extremo.miIDorigen += multiplicador; 
				extremo.fecha_inicio = $.addTimeToDate(extremo.fecha_inicio, multiplicador * 1, 'y', false);
				extremo.fecha_fin = $.addTimeToDate(extremo.fecha_fin, multiplicador * 1, 'y', false);
				
				
				//En esta validaci�n se pregunta si la direcc�on es derecha o izquierda para setear las variables derecha e izquierda segun corresponda con el id que se encuentre al extremo de la regla.
				//Se podr�a optimizar este codigo haciendo que se sete solo al final del for para que no se repita todas las veces
				if(direccion === Regla.direccion_segmento.izquierda)
				{
					Regla.izquierda = extremo.miIDorigen;		
				} 
				else 
				{
						Regla.derecha = extremo.miIDorigen;	
				}
				// Si la fecha es igual a false es porque se llego al Siglo 0
				if(direccion === Regla.direccion_segmento.izquierda && extremo.fecha_inicio.getFullYear() < 0) { break; }
									
				clase = clase || extremo.clase;
			}
			
			segmentos.push({
				//aca se agrega a segmentos el id que corresponde para dibujar el div
				miID: extremo.miIDorigen,				
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
				var mes = Regla.fecha_foco.getUTCMonth()+1;
				clase = 2;				
				
				extremo.fecha_inicio = new Date(Regla.fecha_foco.getFullYear(), mes, 1);
				extremo.fecha_fin = new Date(Regla.fecha_foco.getFullYear(), mes+1, 1);
				//Al ser el primer segmento de la regla se le setea a extremo el id = 0 y como ya se dibujara en la regla se setea el valor central de la pantalla en 0
				extremo.miIDorigen = 0;
				Regla.centro = 0;

								
			}
			else {
				// Calculo el multiplicador que determinar� si se deben restar o sumar 100 a�os al segmento $extremo
				var multiplicador = (direccion === Regla.direccion_segmento.izquierda) ? (-1) : 1;
				//Esta linea de c�digo hace que se le sume al id del extremo el multiplicador dado que si es un segmento que se dibuja a la izquierda se le restar� uno y qudara negativo, y si es para la derecha sumara uno positivo y quedar� positivo
				extremo.miIDorigen += multiplicador;
				extremo.fecha_inicio = $.addTimeToDate(extremo.fecha_inicio, multiplicador * 1, 'M', false);
				extremo.fecha_fin = $.addTimeToDate(extremo.fecha_fin, multiplicador * 1, 'M', false);
				//En esta validaci�n se pregunta si la direcc�on es derecha o izquierda para setear las variables derecha e izquierda segun corresponda con el id que se encuentre al extremo de la regla.
					//Se podr�a optimizar este codigo haciendo que se sete solo al final del for para que no se repita todas las veces
					if(direccion === Regla.direccion_segmento.izquierda)
					{
						Regla.izquierda = extremo.miIDorigen;
					}
					else
					{
							Regla.derecha = extremo.miIDorigen;
					}
				
				// Si la fecha es igual a false es porque se llego al Siglo 0
				if(direccion === Regla.direccion_segmento.izquierda && extremo.fecha_inicio.getFullYear() < 0) { break; }
									
				clase = clase || extremo.clase;
			}
			
			segmentos.push({
				//aca se agrega a segmentos el id que corresponde para dibujar el div
				miID: extremo.miIDorigen,
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
				//Al ser el primer segmento de la regla se le setea a extremo el id = 0 y como ya se dibujara en la regla se setea el valor central de la pantalla en 0			
				extremo.miIDorigen = 0;
				Regla.centro = 0;
				
				extremo.fecha_inicio.setHours(0);
				extremo.fecha_inicio.setMinutes(0);
				extremo.fecha_fin.setHours(23);
				extremo.fecha_fin.setMinutes(59);
			}
			else {
				// Calculo el multiplicador que determinar� si se deben restar o sumar 100 a�os al segmento $extremo
				var multiplicador = (direccion === Regla.direccion_segmento.izquierda) ? (-1) : 1;
				//Esta linea de c�digo hace que se le sume al id del extremo el multiplicador dado que si es un segmento que se dibuja a la izquierda se le restar� uno y qudara negativo, y si es para la derecha sumara uno positivo y quedar� positivo
				extremo.miIDorigen += multiplicador; 
				extremo.fecha_inicio = $.addTimeToDate(extremo.fecha_inicio, multiplicador * 1, 'd', false);
				extremo.fecha_fin = $.addTimeToDate(extremo.fecha_fin, multiplicador * 1, 'd', false);
				
				//En esta validaci�n se pregunta si la direcc�on es derecha o izquierda para setear las variables derecha e izquierda segun corresponda con el id que se encuentre al extremo de la regla.
				//Se podr�a optimizar este codigo haciendo que se sete solo al final del for para que no se repita todas las veces
				if(direccion === Regla.direccion_segmento.izquierda)
				{
					Regla.izquierda = extremo.miIDorigen;		
				} 
				else 
				{
						Regla.derecha = extremo.miIDorigen;	
				}
				// Si la fecha es igual a false es porque se llego al Siglo 0
				if(direccion === Regla.direccion_segmento.izquierda && extremo.fecha_inicio.getFullYear() < 0) { break; }
									
				clase = clase || extremo.clase;
			}
			
			segmentos.push({
				//aca se agrega a segmentos el id que corresponde para dibujar el div
				miID: extremo.miIDorigen,
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
		/* ESTE METODO FUE MODIFICADO EL 29/10/2013
		antes de comenzar con el dibujado de los nuevos div se extrae la linea que se encuentra al final del div "timeline-regla" para que se pueda llamar al metodo append y se creen a partir del ultimo div de tiempo y no a partir de la linea, despu�s al salir del for se vuelve a poner la linea al final del div "timeline-regla" ej: div div div linea ---> remove(linea) ----> div div div --> append(div) ---> div div div div ---> apend(linea) ---> div div div div linea
		La validaci�n por regla.inicio = 1 es de una variable que se creo en regla para poder validar que no esta creando la linea sino que esta avanzando o retrocediendo ya que si es el inicio no se ha creado la linea todav�a y produce errores y redundancia de divs con el mismo a�o.		
		*/
		// creo variable para que guarde auxiliarmente los datos de linea que vienen
		var auxDataFiltros = [];
		if(Regla.inicio === 1){	
			/*$linea = Regla.$regla.children().eq(-1);
			// Guardo la data del filtro de cada l�nea
			auxDataFiltros = $linea.children('div.timeline-eventos').data('linea');
			Regla.$regla.children().last().remove(); */

			var lineasColeccion = Linea.$lineas.children('div.timeline-eventos');
			$.each(lineasColeccion, function (index, value) {
				auxDataFiltros[index] = $(this).data('linea');
				});
			// Borro las l�neas de la regla para que queden s�lo los per�odos
			Regla.$regla.children().last().remove();
		}
		for(var i = 0; i < segmentos.length; i++) {
			// Reemplaza las claves por los valores correspondientes a la clase y la etiqueta
			div = Regla.html_segmento
					.replace('{clase}', segmentos[i].clase)
					.replace('{etiqueta}', segmentos[i].etiqueta)
					//Aca se agrega el remplace de la etiqueta por el ide que viene en la bariable de segmentos que le corresponde con la posicion de ese segmento en la regla
					.replace('{miID}',segmentos[i].miID);
							
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
		if(Regla.inicio === 1) {
			// Se vuelve a setear la data de las l�neas
			var lineasColeccion = Linea.$lineas.children('div.timeline-eventos');
			$.each(lineasColeccion, function (index, value) {
				$(this).data('linea',auxDataFiltros[index]);
				});
			Regla.$regla.append(Linea.$lineas);
		}
	},




	navegar : function() {
		var busqueda = Regla.validarFecha($("#FechaNavegar").val());
		if (busqueda == false) { // buscamos un texto
			// TODO: implement me :P
		} else {
			Regla.crearRegla(busqueda);
			Linea.actualizarTodas();
		}
	},
	//El metodo transforma una stringDate en un formato valido para el objeto Date (de espanol a ingles)
	//Para ellos, almacena dia,mes y anio por separado y los reacomoda en la variable fechaIngles.
	validarFecha: function (fecha) {
		var components = fecha.split('/');

		// TODO: unificar valor devuelto
		switch (components.length) {
		case 3: // DD/MM/AAAA
			// TODO: validar que los componentes sean validos
			return new Date(components[2], (components[1] - 1), components[0], 0, 0, 0, 0);
			break;

		case 2: // MM/AAAA
			// TODO: validar que el mes sea valido
		        return new Date(components[1], (components[0]-1), 1, 0, 0, 0, 0);
		        break;

		default:
			// solo anio
			var expresion = /\d{2,4}/;
			if (expresion.test(fecha)) {
				return new Date(fecha, 1, 1, 0, 0, 0, 0);
			} else {
				return false; // devolvemos False en otros casos
			}
		}

		return false; // si llegamos aca la fecha no es valida
	}
	
};
