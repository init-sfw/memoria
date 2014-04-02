// Agrego funcionalidad a la clase Data para dar formato a la fecha
Date.prototype.formatDate = function () {
    var dia = new String(this.getUTCDate());
    if (dia.length == 1) {
        dia = "0" + dia;
    }

    var mes = new String(this.getUTCMonth() + 1);
    if (mes.length == 1) {
        mes = "0" + mes;
    }

    return dia + "/" + mes + "/" + this.getFullYear();
}

Date.prototype.formatTime = function () {
    var hora = new String(this.getHours());
    if (hora.length === 1) {
        hora = "0" + hora;
    }

    var min = new String(this.getMinutes());
    if (min.length === 1) {
        min = "0" + min;
    }

    return hora + ":" + min;
}

String.prototype.parseDate = function () {
	var fecha = this.split('/');
    return new Date(fecha[2], fecha[1] - 1, fecha[0]);
}

/* Date addTimeToDate(int time, String unit, Date date,Boolean referencia)
- Descripción:Suma o Resta tiempo a una fecha(objeto Date), puede ser usada tanto para agregar como quitar tiempo a una fecha, 
el tiempo se da en milisegundos, segundos, minutos, horas, días, meses o años Parámetros:
- Time:Entero con la cantidad de unidades de tiempo a sumar a la fecha
- Unit: String con el tipo de unidades que se agregaran a la fecha
y: Años
M: Meses
w: Semanas
d: Días
h: Horas
m: Minutos
s: Segundos
“”: (En blanco o cualquier otro) Milisegundos
- Date: Objeto Date al que se le sumara el tiempo Indicado 
- DateReference: es un booleano true indica que se operará directamente en el objeto Date pasado en el tercer parámetro, de igual forma se 
retorna la referencia al final de su ejecución. 
false, la función creara un nuevo objeto Date y lo retornara al final de su ejecución sin afectar el objeto Date original
- Retorno: Objeto Date, con la nueva fecha resultante de la suma de tiempos 
*/
jQuery.addTimeToDate = function (objDate, time, unit, dateReference) {
    var dateTemp = (dateReference) ? objDate : new Date(objDate);
    switch (unit) {
        case 'y': dateTemp.setFullYear(objDate.getFullYear() + time); break;
        case 'M': dateTemp.setMonth(objDate.getMonth() + time); break;
        case 'w': dateTemp.setTime(dateTemp.getTime() + (time * 7 * 24 * 60 * 60 * 1000)); break;
        case 'd': dateTemp.setTime(dateTemp.getTime() + (time * 24 * 60 * 60 * 1000)); break;
        case 'h': dateTemp.setTime(dateTemp.getTime() + (time * 60 * 60 * 1000)); break;
        case 'm': dateTemp.setTime(dateTemp.getTime() + (time * 60 * 1000)); break;
        case 's': dateTemp.setTime(dateTemp.getTime() + (time * 1000)); break;
        default: dateTemp.setTime(dateTemp.getTime() + time); break;
    }
    return dateTemp;
}

// Date dateDiff
var DateDiff = {
 
    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t2-t1)/(24*3600*1000));
    },
 
    inWeeks: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t2-t1)/(24*3600*1000*7));
    },
 
    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();
 
        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },
 
    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
}