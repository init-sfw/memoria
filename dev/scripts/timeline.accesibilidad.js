$(function(){
   $('#accesibilidad').click(function(){
        $('#accesibilidad-content').fadeToggle(600);
    });
});

$(document).on( "keydown", function( event ) {
    buscador = $('#FechaNavegar');
    if(buscador.is(":focus")){
        if(event.which == 27){
            buscador.blur();
        }
    }else{
        switch (event.which) {
            case 37:
                //Flecha izquierda
                Regla.scrollRetroceder();
                break;
            case 38:
                //Flecha arriba
                Regla.zoomAcercar();
                break;
            case 39:
                //Flecha derecha
                Regla.scrollAvanzar();
                break;
            case 40:
                //Flecha abajo
                Regla.zoomAlejar();
                break;
            case 114:
            case 66:
                //114 = Tecla F3
                //66 = Letra b
                buscador.focus();
                event.preventDefault();
                break;
            case 107:
            case 187:
                /* 107 = Sumar en teclado numerico
                187 = Tecla + */
                Eventos.cargar();
                break;
            case 65:
            case 72:
                $('#accesibilidad').trigger('click');
        }
    }
});
