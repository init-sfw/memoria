var Linea = {
	// Instancia del div contenedor de las lineas
	$lineas: null,
	
	// Html que representa a una linea de tiempo
	plantilla_linea: '<div class="timeline-eventos" style="display: none;"><span>{titulo}</span></div>',
	
	// Html que representa a un evento dentro de la linea de tiempo
	plantilla_evento: '<div class="evento categoria-{categoria}"><a href="#"></a></div>',
	
	// Html que representa la descripcion de un evento cuando se clickea sobre él
	plantilla_popup: '<div id="timeline-popup" style="display:none;"> \
							<div class="popDate">{fecha}</div> \
							<div class="popHeader">{titulo}</div> \
							<div class="popImage"><img src="images/{imagen}" alt=""/></div> \
							<div class="popBody">{descripcion}</div> \
						</div>',
	
	// Html que representa la descripcion de un evento cuando se posa el mouse sobre él
	plantilla_tooltip: '<div id="timeline-tooltip"> \
							<div class="tipDate">{fecha}</div> \
							<div class="tipHeader">{titulo}</div> \
							<div class="tipImage"><img src="images/{imagen}" width=200 heigth=50 alt=""/></div> \
							<div class="tipBody">{descripcion}</div> \
						</div>',

	init: function () {
		Linea.$lineas = $('#timeline-lineas');
		
		
		Regla.init();		
		Regla.crearRegla();
		
		
	},
	
	crearLinea: function (filtro) {
		filtro = filtro || { titulo: '', categorias: null, paises: null };	
		
		Linea.$lineas.append(Linea.plantilla_linea.replace('{titulo}', filtro.titulo));
		Linea.$lineas.children('div.timeline-eventos:last').data('linea', filtro);
	},
	
	// Actualiza el ancho del div contenedor de las lineas, y el alto del contenedor general (scroll) según la cantidad de líneas a mostrar
	redimensionarLineas: function () {
		// Calculo el ancho de la linea
		Linea.$lineas.children('div.timeline-eventos').css('width', Regla.$regla.width());
		
		// Calculo el alto de la regla según la cantidad de líneas y las etiquetas de los segmentos
		Regla.$scroll.css('height', 70 + 140 * Linea.$lineas.children('div.timeline-eventos').length);
	},
	
	mostrarLineas: function () {
		Linea.redimensionarLineas();
		
		// Muestra las líneas y les agrega un borde punteado a la parte superior para distinguirla del resto
		Linea.$lineas.children('div.timeline-eventos:hidden').show('slow', 'swing' , function () {
			$(this).css('border-top', '#000 1px dashed');
		});
	},
	
	borrarLineas: function () {
		Linea.$lineas.html('');
	},
	
	actualizarTodas: function () {
		Linea.$lineas.children('div.timeline-eventos').each(function () {
			Linea.cargarEventos($(this));
		});
	},
	
	cargarEventos: function ($linea) {
		$linea.children('div').remove();
		
		// Obtiene la información de filtrado de la línea
		var filtros = $linea.data('linea');
		// Realiza la consulta sobre el total de eventos para obtener los solicitados
		var consulta = Eventos.filtrar(Regla.fecha_inicio, Regla.fecha_fin, Regla.zoom, filtros);

		// Cuando la consulta finaliza exitosamente, recorre los eventos agregandolos a la linea
		$.when(consulta).done(function (response) {
										
			$.each(response.eventos, function (ind, val) {
				if(Regla.esEventoVisible(val)) {		
				
					$linea.append(Linea.plantilla_evento.replace('{categoria}', val.categoria));
					
					// Setea la posicion absoluta del evento y guarda en el data la informacion del mismo
					$linea.find('div.evento:last')
						.css('top', new String ($linea.index() * 140 + 53) + 'px')
						.css('left', Regla.calcularPosicionEvento(val))
						.data('info', val);
				}										  
			});
			
			Linea.inicializarEventosMouseHover($linea);
			Linea.inicializarEventosMouseClick($linea);
		});		
	},
	
	// Evento de click para mostrar el popup grande
	inicializarEventosMouseClick: function ($linea) {		
		$linea.children('div.evento').click(Linea.mostrarDetalleEvento);
	},
	
	// Agrega a los eventos existentes en una línea los eventos de mouse necesarios para mostrar/ocultar los tooltips
	inicializarEventosMouseHover: function ($linea) {		
		$linea.children('div.evento')
			.mouseenter(Linea.mostrarResumen)
			.mouseleave(Linea.ocultarResumen);
	},

	mostrarDetalleEvento: function() {
		var po = $(this).data('info'); 	
		
		popup = Linea.plantilla_popup.replace('{fecha}', po.fecha)
					.replace('{titulo}', po.titulo)
					.replace('{imagen}', po.imagen)
					.replace('{descripcion}', po.descripcionBreve);
		
		
		$('body').append(popup);
		$('#timeline-popup').dialog();
		$('#timeline-popup').dialog( "option", "width", 800);
		$('#timeline-popup').dialog( "option", "height", 600);
		$('#timeline-popup').on("dialogclose", function( event, ui ) { Linea.ocultarDetalleEvento(); } )     
	},
	
	mostrarResumen: function() {       
		var tip = $(this).data('info'); 	
		
		tooltip = Linea.plantilla_tooltip.replace('{fecha}', tip.fecha)
					.replace('{titulo}', tip.titulo)
					.replace('{imagen}', tip.imagen)
					.replace('{descripcion}', tip.descripcionBreve.substring(0, 75) + '...');
		
		$('body').append(tooltip);     
		
		var posicion = $(this).offset();
		 
		$('#timeline-tooltip')
			//Define la posicion (x, y) del tooltip
			.css('top', posicion.top + 30)
			.css('left', posicion.left - 85)

			// Define el ancho y alto del tooltip
			.css('width', 200)
			.css('height', 200)
			
			//Muestra el div que contiene la informacion del tooltip y le asigna un nivel de opacidad
			.fadeIn('500')
			.fadeTo('10',0.8);		
	},

	ocultarDetalleEvento: function () {
		//Elimina el div que contiene el popup
		$('#timeline-popup').remove();		
	},
	
	ocultarResumen: function () {
		//Elimina el div que contiene el tooltip
		$('body').children('#timeline-tooltip').remove();
	}
};
