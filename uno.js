/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
  var pacientes;
  var nombrePaciente;
  var sexoPaciente;
  var edadPaciente;
  var temperaturaPaciente;
  var contadorMujeres;
  var contadorHombres;
  var contadorEdades;
  var promedioDeEdades;
  var banderaMayorTempMujer;
  var banderaTempMujer;
  var mujerConMayorTemp;

  pacientes = 0;
  contadorMujeres = 0;
  contadorHombres = 0;
  contadorEdades = 0;
  banderaTempMujer = "primera vez";

  while (pacientes < 5) {
    do {
      nombrePaciente = prompt("Ingrese nombre por favor:");
    } while (!isNaN(nombrePaciente));

    do {
      sexoPaciente = prompt("Ingrese sexo por favor:");
    } while (sexoPaciente != "f" && sexoPaciente != "m");
    do {
      edadPaciente = prompt("Ingrese edad por favor: ");
      edadPaciente = parseInt(edadPaciente, 10);
    } while (edadPaciente < 0 || edadPaciente > 100);
    do {
      temperaturaPaciente = prompt("Ingrese temperatura por favor");
      temperaturaPaciente = parseInt(temperaturaPaciente, 10);
    } while (temperaturaPaciente < 0 || temperaturaPaciente > 45);

    //punto A
    if (sexoPaciente == "f") {
      contadorMujeres++;
    } else {
      contadorHombres++;
    }

    contadorEdades = contadorEdades + edadPaciente;

    //Punto C
    if (sexoPaciente == "f" && banderaTempMujer == "primera vez") {
      banderaTempMujer = "segunda vez";
      banderaMayorTempMujer = temperaturaPaciente;
      mujerConMayorTemp = nombrePaciente;
    } else {
      if (banderaMayorTempMujer < temperaturaPaciente) {
        banderaMayorTempMujer = temperaturaPaciente;
        mujerConMayorTemp = nombrePaciente;
      }
    }

    pacientes++;
  }

  //Punto B
  if (pacientes != 0) {
    promedioDeEdades = Math.round(contadorEdades / pacientes);
  }

  if (mujerConMayorTemp) {
    console.log("La mujer con mas temperatura es: " + mujerConMayorTemp);
  }

  console.log(
    "Cantidad mujeres: " +
      contadorMujeres +
      " cantidad hombres: " +
      contadorHombres
  );
  console.log("Promedio de edades: " + promedioDeEdades);
}
