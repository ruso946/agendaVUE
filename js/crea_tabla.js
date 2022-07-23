var nombre = ['Gonzalo', 'Tobi', 'Maga', 'Ivana'];
var apellido = ['Kohan', 'Kohan Franzetti', 'Kohan Franzetti', 'Franzetti'];
var telefono = ['4444 4444', '5555 5555', '6666 6666', '7777 7777'];
var dni = ['22846758','48794776','55555666','25347117']

function genera_tabla() {
    // Obtener la referencia del elemento body
    var body = document.getElementById("tablaAgregadaporJs");
     
    // Crea un elemento <table>, un elemento cabecera <thead> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var thead = document.createElement('thead');
    var TagName = "label"
    arma_cabecera_tabla(tabla, thead,TagName);
    var tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (var i = 0; i < (nombre.length); i++) {            // variable "i" da la cantidad de hileras
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
      var arrayDatosFila = [ nombre[i], apellido[i], telefono[i], dni[i] ]; // el arrayDatosPaciente arma la serie de celdas por hilera a agregar
      //                                              sobre ese array se hará un ciclo for que lo recorrerá 
      //                                              para ir llenando de contenido cada celda de cada hilera
        
      for (j in arrayDatosFila ) {  //ciclo for sobre el array "nad" que contiene la lista de items a agregar en cada celda de cada hilera
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
    // appends <table> into <body>
    body.appendChild(tabla);
}

function genera_celda(nad, hilera){
  var celda = document.createElement("td");
  var textoCelda = document.createTextNode(nad);
  celda.appendChild(textoCelda);
  hilera.appendChild(celda);
}

function arma_cabecera_tabla (tabla, thead, TagName) {
  var hilera_encabezado = document.createElement('tr');
  //arrayLabel = document.getElementsByTagName("label");
  arrayTagName = document.getElementsByTagName(TagName);
  var elemento_encabezado = [];
  for (i=0; i < arrayTagName.length; i++) {
    elemento_encabezado[i] = document.createElement('th');
    elemento_encabezado[i].innerHTML = arrayTagName[i].innerHTML;
    hilera_encabezado.appendChild(elemento_encabezado[i]);
  }
  thead.appendChild(hilera_encabezado);
  tabla.appendChild(thead);
}
