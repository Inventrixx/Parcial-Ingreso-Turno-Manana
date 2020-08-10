/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/ function mostrar() {
  var respuesta;
  var marca;
  var precio;
  var pesoKg;
  var tipo;
  var contadorPesoProductos;
  var marcaMasCara;
  var precioMasCaro;
  var marcaMasLiviana;
  var pesoMasLiviano;
  var banderaPdtoMasCaro;
  var banderaPdtoMasLiviano;

  banderaPdtoMasCaro = "primero";
  banderaPdtoMasLiviano = "primero";

  contadorPesoProductos = 0;

  respuesta = "s";

  while (respuesta == "s") {
    do {
      marca = prompt("Ingresar marca del producto por favor");
    } while (!isNaN(marca));

    do {
      precio = prompt("Ingresar precio");
      precio = parseInt(precio, 10);
    } while (precio < 0);

    do {
      pesoKg = prompt("Ingresar peso");
      pesoKg = parseInt(pesoKg, 10);
    } while (pesoKg < 0);

    do {
      tipo = prompt("Ingrese tipo del producto. Solido o liquido");
    } while (tipo !== "solido" && tipo !== "liquido");

    //Punto A
    contadorPesoProductos = contadorPesoProductos + pesoKg;

    switch (tipo) {
      //Punto B
      case "liquido":
        if (banderaPdtoMasCaro == "primero") {
          banderaPdtoMasCaro = "segundo";
          precioMasCaro = precio;
          marcaMasCara = marca;
        } else {
          if (precioMasCaro < precio) {
            precioMasCaro = precio;
            marcaMasCara = marca;
          }
        }
        break;
      //Punto C
      case "solido":
        if (banderaPdtoMasLiviano == "primero") {
          banderaPdtoMasLiviano = "segundo";
          marcaMasLiviana = marca;
          pesoMasLiviano = pesoKg;
        } else {
          if (pesoMasLiviano > pesoKg) {
            pesoMasLiviano = pesoKg;
            marcaMasLiviana = marca;
          }
        }
        break;
    }
    respuesta = prompt("Desea continuar?");
  }
  console.log("Peso total de la compra: " + contadorPesoProductos);
  console.log("La marca mas cara de los liquidos es: " + marcaMasCara);
  console.log("La marca mas liviana de los solidos es: " + marcaMasLiviana);
}
