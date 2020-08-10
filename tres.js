/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
  var nombreTitular;
  var nombreLugar;
  var respuesta;
  var temporada;
  var cantidadViajantes;
  var contadorBariloche;
  var contadorCatataratas;
  var contadorSalta;
  var mayorLugarElegido;
  var banderaTitular;
  var nombreTitularConMayorViajeros;
  var mayorCantidadViajantes;
  var cantidadViajantesInvierno;
  var promedioViajantesInvierno;
  var cantidadViajesEnInvierno;

  contadorBariloche = 0;
  contadorCatataratas = 0;
  contadorSalta = 0;
  cantidadViajantesInvierno = 0;
  cantidadViajesEnInvierno = 0;
  banderaTitular = "primero";

  var respuesta = "s";

  while (respuesta == "s") {
    do {
      nombreTitular = prompt("Ingrese su nombre por favor");
    } while (!isNaN(nombreTitular));

    do {
      nombreLugar = prompt("Ingrese lugar: bariloche, cataratas o salta");
    } while (
      nombreLugar !== "bariloche" &&
      nombreLugar !== "cataratas" &&
      nombreLugar !== "salta"
    );

    do {
      temporada = prompt("Elegir temporada");
    } while (
      temporada !== "invierno" &&
      temporada !== "verano" &&
      temporada !== "otoño" &&
      temporada !== "primavera"
    );

    do {
      cantidadViajantes = prompt("Ingresar cantidad de viajantes");
      cantidadViajantes = parseInt(cantidadViajantes, 10);
    } while (cantidadViajantes < 0 || cantidadViajantes > 50);

    //Punto A
    switch (nombreLugar) {
      case "bariloche":
        contadorBariloche++;
        break;
      case "salta":
        contadorSalta++;
        break;
      case "cataratas":
        contadorCatataratas++;
        break;
    }

    if (contadorBariloche > contadorCatataratas) {
      mayorLugarElegido = "bariloche";
    } else {
      if (contadorCatataratas > contadorSalta) {
        mayorLugarElegido = "cataratas";
      } else {
        mayorLugarElegido = "salta";
      }
    }

    //Punto B
    if (banderaTitular == "primero") {
      banderaTitular = "segundo";
      mayorCantidadViajantes = cantidadViajantes;
      nombreTitularConMayorViajeros = nombreTitular;
    } else {
      if (mayorCantidadViajantes < cantidadViajantes) {
        mayorCantidadViajantes = cantidadViajantes;
        nombreTitularConMayorViajeros = nombreTitular;
      }
    }

    //Punto C
    if (temporada == "invierno") {
      cantidadViajantesInvierno = cantidadViajantesInvierno + cantidadViajantes;
      cantidadViajesEnInvierno++;
    }

    respuesta = prompt("Desea seguir ingresando?");
  }

  if (cantidadViajesEnInvierno != 0) {
    promedioViajantesInvierno =
      cantidadViajantesInvierno / cantidadViajesEnInvierno;
  }
  console.log("Mayor lugar elegido: " + mayorLugarElegido);
  console.log(
    "El titular con mayor pasajeros: " + nombreTitularConMayorViajeros
  );
  console.log(
    "Promedio de viajantes en invierno: " + promedioViajantesInvierno
  );
}
