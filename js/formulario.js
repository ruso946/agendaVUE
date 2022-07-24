function guardar(IdTabla){
    var arrayDatosFormulario = document.getElementsByTagName("input");
    var nom = arrayDatosFormulario[0].value;
    nombre.push(nom);
    var ape = arrayDatosFormulario[1].value;
    apellido.push(ape);
    var tel = arrayDatosFormulario[2].value;
    telefono.push(tel);
    var dn = arrayDatosFormulario[3].value;
    dni.push(dn);
    var arrayDatosFila = [nom, ape, tel, dn]
    var padreTabla = document.getElementById(IdTabla);
    var hilera = document.createElement("tr");
    for (j in arrayDatosFila ) {  //ciclo for sobre el arrayDatosFila que contiene la lista de items a agregar en cada celda de cada hilera
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        genera_celda(arrayDatosFila [j], hilera)
      }
    var tabla = document.getElementById("padreTablaAgregadaporJs");
    var tblBody = document.getElementById("tblbody");
    
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
}