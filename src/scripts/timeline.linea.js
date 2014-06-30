var Linea = {
	// Instancia del div contenedor de las lineas
	$lineas: null,

	// Html que representa a una linea de tiempo
	plantilla_linea: '<div class="timeline-eventos" style="display: none;"><span>{titulo}</span></div>',

	// Html que representa a un evento dentro de la linea de tiempo
	plantilla_evento: '<div class="evento categoria-{categoria}"><a href="#"></a></div>',

	// Html que representa la descripcion de un evento cuando se clickea sobre �l
	plantilla_popup: '<div id="timeline-popup" style="display:none;"> \
							<div class="popImage"><img src="images/{imagen}" alt=""/></div> \
							<div class="popBody">{descripcion}</div> \
						</div>',

    plantilla_popup_footer: '<div class="popFooter ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"' +
        ' style="font-family: AlteHaasGroteskBold;"> <span class="badge">Fuente</span> {link}</div>',

	// Html que representa la descripcion de un evento cuando se posa el mouse sobre �l
	plantilla_tooltip: '<div id="timeline-tooltip"> \
							<div class="tipHeader"><div style="text-align: center"><span class="badge">{fecha}</span></div>{titulo}</div> \
							<div class="tipImage"><img src="images/{imagen}"/></div> \
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

	// Actualiza el ancho del div contenedor de las lineas, y el alto del contenedor general (scroll) seg�n la cantidad de l�neas a mostrar
	redimensionarLineas: function () {
		// Calculo el ancho de la linea
		Linea.$lineas.children('div.timeline-eventos').css('width', Regla.$regla.width());

		// Calculo el alto de la regla seg�n la cantidad de l�neas y las etiquetas de los segmentos
		Regla.$scroll.css('height', 70 + 140 * Linea.$lineas.children('div.timeline-eventos').length);
	},

	mostrarLineas: function () {
		Linea.redimensionarLineas();

		// Muestra las l�neas y les agrega un borde punteado a la parte superior para distinguirla del resto
		Linea.$lineas.children('div.timeline-eventos:hidden').show('slow', 'swing' , function () {
			//$(this).css('border-top', '#000 1px dashed');
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

		// Obtiene la informaci�n de filtrado de la l�nea
		var filtros = $linea.data('linea');
		// Realiza la consulta sobre el total de eventos para obtener los solicitados
		var consulta = Eventos.filtrar(Regla.fecha_inicio, Regla.fecha_fin, Regla.zoom, filtros);

		$.each(consulta, function (ind, val) {
			if(Regla.esEventoVisible(val)) {

				$linea.append(Linea.plantilla_evento.replace('{categoria}', val.categoria));

				// Setea la posicion absoluta del evento y guarda en el data la informacion del mismo
				$linea.find('div.evento:last')
					.css('top', new String ($linea.index() * 102 + 41) + 'px')
					.css('left', Regla.calcularPosicionEvento(val))
					.data('info', val);
			}
		});

		Linea.inicializarEventosMouseHover($linea);
		Linea.inicializarEventosMouseClick($linea);
	},

	// Evento de click para mostrar el popup grande
	inicializarEventosMouseClick: function ($linea) {
		$linea.children('div.evento').click(Linea.mostrarDetalleEvento);
	},

	// Agrega a los eventos existentes en una l�nea los eventos de mouse necesarios para mostrar/ocultar los tooltips
	inicializarEventosMouseHover: function ($linea) {
		$linea.children('div.evento')
			.mouseleave(Linea.ocultarTooltips)
			.mouseenter(Linea.mostrarResumen);
	},

	mostrarDetalleEvento: function() {
		Linea.ocultarResumen();
		// Elimina los anteriores popups si hubiera
		Linea.ocultarDetalleEvento();

		var po = $(this).data('info');

		popup = Linea.plantilla_popup.replace('{fecha}', po.fecha)
					.replace('{titulo}', po.titulo)
					.replace('{imagen}', po.imagen)
					.replace('{descripcion}', po.descripcionBreve);


        popupFooter = Linea.plantilla_popup_footer.replace('{link}', '<a href="' + po.link + '" target="_blank" style="color: #333;">Wikipedia</a>');

		$('body').append(popup);
		$('#timeline-popup').dialog({
			title: '<span class="badge">' + po.fecha + '</span>' + " " + po.titulo,
			width: 800,
			height: 700,
			onDialogClose: Linea.ocultarDetalleEvento(),
            dialogClass:'timeline-popup-box'
		});
        $('#timeline-popup').after(popupFooter);
		$('#timeline-popup').prev('.ui-dialog-titlebar').css('font-family', 'AlteHaasGroteskBold');
	},

	mostrarResumen: function() {
		// Elimina los anteriores tooltip si existieren
		Linea.ocultarResumen();

		$(this).css('height', +100);
		var tip = $(this).data('info');

		tooltip = Linea.plantilla_tooltip.replace('{fecha}', tip.fecha)
					.replace('{titulo}', tip.titulo)
					.replace('{imagen}', tip.imagen)
					.replace('{descripcion}', tip.descripcionBreve.substring(0, 75) + '...');	

		$('body').append(tooltip);
		var posicion = $(this).offset();
		$('#timeline-tooltip')
			//cierra otros popups si existieren cuando se muestra el popup requerido
			.show(function(){$('body').children('#timeline-tooltip').not($(this)).remove()})
			//Define la posicion (x, y) del tooltip
			.css('top', posicion.top + 30)
			.css('left', posicion.left - 85)

			// Define el ancho y alto del tooltip
			.css('width', 200)
			//.css('height', 200)

			//le agrega el foco al tooltip
			.focus(true)
			.mouseleave(function(){$(this).remove();
			})
			//Muestra el div que contiene la informacion del tooltip y le asigna un nivel de opacidad
			.fadeIn('500')
			.fadeTo('10',0.8)
			;
	},

	ocultarDetalleEvento: function () {
		//Elimina el div que contiene el popup
		$('#timeline-popup').remove();		
	},

	ocultarResumen: function () {
			//Elimina los div que contienen los tooltips
			$('body').children('#timeline-tooltip').each(function(){$('body').children('#timeline-tooltip').remove()});

			//quita los eventos mouseover asociados a la regla para "reinicializar" el evento y permitir que al salir del
			//pin se tome el evento mouseover para la regla nuevamente y se active el ocultarTooltips otra vez.
			Regla.$regla.unbind("mouseover");	
			$('div.timeline-eventos').children('div.evento').css('height', 25);	

	},

	//evento que oculta los tooltip cuando se pasa con el puntero del mouse sobre la regla. Solo se activa cuando se sale del diametro del pin. 
	ocultarTooltips: function(){

				Regla.$regla.mouseover(function(){Linea.ocultarResumen()});

	}


};
