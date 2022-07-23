var nombre = ['Gonzalo', 'Tobi', 'Maga', 'Ivana'];
var apellido = ['Kohan', 'Kohan Franzetti', 'Kohan Franzetti', 'Franzetti'];
var dni = ['22846758','48794776','55555666','25347117']

function genera_tabla() {
    // Obtener la referencia del elemento body
    var body = document.getElementById("tablaAgregadaporJs");
     
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "DNI";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Nombre";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Apellido";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);
    console.log(heading_1+heading_2+heading_3);
    console.log(thead);
    tabla.appendChild(thead)
    var tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (var i = 0; i < (nombre.length); i++) {            // variable "i" da la cantidad de hileras
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
      var nad = [dni[i], apellido[i], nombre[i]]; // el array "nad" arma la serie de celdas por hilera a agregar
      //                                              sobre ese array se hará un ciclo for que lo recorrerá 
      //                                              para ir llenando de contenido cada celda de cada hilera
      //console.log(nad)
  
      for (j in nad ) {  //ciclo for sobre el array "nad" que contiene la lista de items a agregar en cada celda de cada hilera
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        genera_celda(nad [j], hilera)
      }
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "3";
    tabla.setAttribute("border", "3");
}

function genera_celda(nad, hilera){
  var celda = document.createElement("td");
  var textoCelda = document.createTextNode(nad);
  celda.appendChild(textoCelda);
  hilera.appendChild(celda);
}