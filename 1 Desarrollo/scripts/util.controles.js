jQuery.fn.cargarCombo = function (items, value, text, seleccione) {
    if (!seleccione) {
        seleccione = "Seleccione...";
    }

    var option = "<option value='{0}'>{1}</option>";
    this.html("");
	
    if(this.attr('multiple') !== 'multiple') {
		this.append(option.replace("{0}", "").replace("{1}", seleccione));
	}

    for (var i = 0; i < items.length; i++) {
        this.append(option.replace("{0}", items[i][value]).replace("{1}", items[i][text]));
    }

    this.removeAttr("disabled");
};