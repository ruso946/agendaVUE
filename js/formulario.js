function guardar(){
    var arrayDatosFormulario = document.getElementsByTagName("input");
    nombre.push(arrayDatosFormulario[0].value);
    apellido.push(arrayDatosFormulario[1].value);
    telefono.push(arrayDatosFormulario[2].value);
    dni.push(arrayDatosFormulario[3].value);
    genera_tabla();
}