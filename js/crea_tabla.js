function genera_tabla(IdTabla) {
    var padreTabla = document.getElementById(IdTabla);// Obtener la referencia del elemento padreTabla
         
    // Crea un elemento <table>, un elemento cabecera <thead> y un elemento <tbody>
    // los nombres de las cabecera salen de los elementos declarados en TagName
    // puede ser conveniente cambiarlos por ID en vez de TagName
    var tabla = document.createElement("table");
    var thead = document.createElement('thead');
    var TagName = "label"
    arrayTagName = document.getElementsByTagName(TagName);// este item TagName puede convenir cambiarlo por ID
    cantColumnasTabla = arrayTagName.length;
    arma_cabecera_tabla(tabla, thead, TagName);
    var tblBody = document.createElement("tbody");
    tblBody.setAttribute("Id", "tblbody")
  
    // Crea las celdas
    for (var i = 0; i < (nombre.length); i++) {            // variable "i" da la cantidad de hileras
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
      var arrayDatosFila = [ nombre[i], apellido[i], telefono[i], dni[i] ]; // el arrayDatosFila arma la serie de celdas por hilera a agregar
      //                                              sobre ese array se hará un ciclo for que lo recorrerá 
      //                                              para ir llenando de contenido cada celda de cada hilera
        
      for (j in arrayDatosFila ) {  //ciclo for sobre el arrayDatosFila que contiene la lista de items a agregar en cada celda de cada hilera
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        genera_celda(arrayDatosFila [j], hilera)
      }
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <padreTabla>
    padreTabla.appendChild(tabla);
}

function arma_cabecera_tabla (tabla, thead, TagName) {
  var hilera_encabezado = document.createElement('tr');
  //arrayTagName = document.getElementsByTagName(TagName);// este item TagName puede convenir cambiarlo por ID
  var elemento_encabezado = [];
  for (i=0; i < cantColumnasTabla; i++) {
    elemento_encabezado[i] = document.createElement('th');
    elemento_encabezado[i].innerHTML = arrayTagName[i].innerHTML;
    hilera_encabezado.appendChild(elemento_encabezado[i]);
  }
  thead.appendChild(hilera_encabezado);
  tabla.appendChild(thead);
}

function genera_celda(arrayDatosFila, hilera){
  var celda = document.createElement("td");
  var textoCelda = document.createTextNode(arrayDatosFila);
  celda.appendChild(textoCelda);
  hilera.appendChild(celda);
}
