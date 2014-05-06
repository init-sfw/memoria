var Filtros = {
	// Instancia del div contenedor del panel de filtros
	$contenedor: null, 
	// Instancia del div contenedor de la vista previa de los filtros
	$filtros: null,
	
	// Html que representa la vista previa de un filtro
	plantilla_filtro: '<div class="filtro"> \
							<p><b>Titulo: </b>{titulo}</p> \
							<p><b>Categorias: </b>{categorias}</p> \
							<p><b>Paises: </b>{paises}</p> \
							<button type="button">x</button> \
						</div>',
						
	init: function () {
		Filtros.$contenedor = $('#filtros-panel');
		Filtros.$filtros = $('#timeline-filtros');
		
		// Recupera las categorias de un archivo y las carga en el combo
		// FIXME: este método está fallando en Google Chrome
		Filtros.cargarCombosFiltros();

		// Asigno los handlers a los eventos click de los botones Generar y Agregar
		$('#btnAgregarFiltro').click(Filtros.agregarFiltro);		
		$('#btnGenerarLineas').click(Filtros.generarLineas);
		// Agrega funcionalidad al botón que abre/cierra el panel de filtros
		$('#filtros a').click(function(){Filtros.$contenedor.slideToggle('slow')});
		
	}, 
	
	// Añade un nuevo filtro a la vista previa dentro del panel de filtros
	agregarFiltro: function () {
		var datos = {
			titulo: $('#filtroTitulo').val(),
			categorias: $('#filtroCategorias').val(),
			paises: $('#filtroPaises').val()
		};
		
		// Recupera el texto a mostrar de las categorias seleccionadas
		var categorias_texto = [];
		$("#filtroCategorias option:selected").each(function () { categorias_texto.push($(this).text()); });
		
		// Recupera el texto a mostrar de los paises seleccionados
		var paises_texto = [];
		$("#filtroPaises option:selected").each(function () { paises_texto.push($(this).text()); });
		
		// Agrega un nuevo elemento al div contenedor de la vista previa de los filtros
		Filtros.$filtros.append(Filtros.plantilla_filtro
			.replace('{titulo}', datos.titulo || '-')
			.replace('{categorias}', categorias_texto.join(', ') || '-')
			.replace('{paises}', paises_texto.join(', ') || '-'));
		
		// Guarda en el data del nuevo objeto insertado el detalle de los filtros seleccionados
		Filtros.$filtros.children('div.filtro:last').data('filtro', datos);
		
		// Agrega el evento click al botón cerrar del elemento nuevo 
		Filtros.$filtros.find('.filtro:last button').click(function () {
			$(this).parent('div').slideUp().remove();
		});
		
		$('#filtroTitulo, #filtroCategorias, #filtroPaises').val('');
	},
	
	// Crea las lineas correspondientes a los filtros seleccionados


	generarLineas: function () {
		var filtros = [];
		
		// Recupera en un vector todos los filtros ingresados
		if(Filtros.$filtros != null){		
		Filtros.$filtros.children('div.filtro').each(function () {
			filtros.push($(this).data('filtro'));
		});}
		
		// Si no se seleccionó ningún filtro, no se continúa con la función
		if(filtros.length === 0) {
			return;
		}
		
		Linea.borrarLineas();
		
		// Por cada uno de los filtros seleccionados se crea una nueva línea
		$.each(filtros, function (ind, val) {
			Linea.crearLinea(val);
		});
		
		Linea.mostrarLineas();
		Linea.actualizarTodas();
	},

	cargarCombosFiltros : function () {
		Filtros.cargarComboPais($('#filtroPaises'));
		Filtros.cargarComboCategorias($('#filtroCategorias'));
	},

	cargarCombosPopUpEvento : function () {
		Filtros.cargarComboPais($('#agregarPaises'));
		Filtros.cargarComboCategorias($('#agregarCategorias'));
	},

	cargarComboPais : function (div) {
		Filtros.cargarCombo(div, 'data/paises_ar.json')
	},
	
	cargarComboCategorias : function (div) {
		Filtros.cargarCombo(div, 'data/categorias.json')
	},

	cargarCombo : function (div, source) {	
		$.getJSON(source, function (data) {
			div.cargarCombo(data, 'id', 'nombre');
		});
	},


};
