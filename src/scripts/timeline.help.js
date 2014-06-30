
var Help = {

    init : function() {
      htmlHelp = '    <div id="help-dialog" title="Ayuda-Memoria" style="font-family: AlteHaasGroteskBold;">      <p>El presente es un prototipo de aplicación que cuenta con un set de datos histórico reducido. Se intenta reflejar la utilidad de la aplicación para la interpretación histórica de datos categorizados a partir del proceso de independencia Argentino.</p>        <p>Se concentra información entre los años 1750 y 1830 con el siguiente formato:</p>        <p>          <ul>            <li>Categorías:              <ul>                <li type="circle">Historia</li>              </ul>            </li>            <li>Países:              <ul>                <li type="circle">Argentina</li>                <li type="circle">España</li>                <li type="circle">Francia</li>                <li type="circle">Estados Unidos</li>                <li type="circle">Reino Unido</li>              </ul>            </li>          </ul>        </p>  <p>Sólo en esas fechas y bajo esos filtros podrá encontrarse información</p>  </div> <div id="help-icon"><img src="images/help.png" width="32" /></div>',

      $("body").append(htmlHelp);
      $("#help-dialog").delay(3900).dialog({
			  width: 800,
			  height: 700,
        dialogClass:'timeline-popup-box'
      });

      $("#help-icon").click(function(){
        $("#help-dialog").dialog()
      });
    },
};
