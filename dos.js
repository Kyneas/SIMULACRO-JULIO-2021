/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos alimenticios, hasta que el cliente quiera. Por cada compra se ingresa:
Tipo: (validar "Yerba", "Azúcar", "Café").
Cantidad de bolsas. (más de cero).
Precio por bolsa (más de cero).
Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a pagar.
Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar.
Se pide mostrar por pantalla:
a)	El importe total a pagar bruto, sin descuento.
b)	El importe total a pagar con descuento (solo si corresponde)
c)	Informar el tipo con más cantidad de bolsas.
d)	El tipo de la compra más barata. (sobre el Bruto sin descuento)
*/

function mostrar() {
  let respuesta,
    tipo,
    cantidad,
    precio,
    precioBruto,
    precioConDesc,
    flagDescuento = 0,
    tipoMasBolsas,
    acumBolsasYerba = 0,
    acumBolsasAzucar = 0,
    acumBolsasCafe = 0,
    totalBolsas,
    flagBarato = 1,
    precioMasBarato,
    tipoMasBarato;

  do {
    tipo = prompt("Ingrese el tipo: Yerba / Azucar / Cafe").toLowerCase();
    // while (tipo != "yerba" && tipo != "azucar" && tipo != "cafe") {
    //   tipo = prompt(
    //     "Incorrecto. Ingrese el tipo: Yerba / Azucar / Cafe"
    //   ).toLowerCase();
    // }

    precio = parseFloat(prompt("Ingrese el precio"));
    while (isNaN(precio) || precio <= 0) {
      precio = parseFloat(prompt("Incorrecto. Ingrese el precio"));
    }

    cantidad = parseInt(prompt("Ingrese la cantidad"));
    while (cantidad <= 0 || isNaN(cantidad)) {
      cantidad = parseInt(prompt("Incorrecto. Ingrese la cantidad"));
    }

    precioBruto += precio * cantidad;

    switch (tipo) {
      case "y":
        acumBolsasYerba += cantidad;
        break;
      case "a":
        acumBolsasAzucar += cantidad;
        break;
      case "c":
        acumBolsasCafe += cantidad;
        break;
    }

    if (flagBarato || precio < precioMasBarato) {
      flagBarato = 0;
      tipoMasBarato = tipo;
    }

    respuesta = prompt("Escriba's' si quiere agregar mas productos");
  } while (respuesta == "s");

  console.log("A- El precio bruto a pagar es " + precioBruto);

  totalBolsas = acumBolsasCafe + acumBolsasYerba + acumBolsasAzucar;
  if (totalBolsas > 10) {
    precioConDesc = precioBruto * 0.85;
    flagDescuento = 1;
  } else if (totalBolsas > 5) {
    precioConDesc = precioBruto + 0.9;
    flagDescuento = 1;
  }
  if (flagDescuento) {
    console.log(
      "B- Por la cantidad de bolsas compradas tiene un descuento y va a pagar " +
        precioConDesc
    );
  }

  if (acumBolsasAzucar > acumBolsasCafe && acumBolsasAzucar > acumBolsasYerba) {
    tipoMasBolsas = "azucar";
  } else if (acumBolsasCafe >= acumBolsasAzucar && acumBolsasYerba) {
    tipoMasBolsas = "cafe";
  } else {
    tipoMasBolsas = "yerba";
  }

  console.log("C- El tipo con mas cantidad de bolsas es " + tipoMasBolsas);

  console.log("D- El tipo de compra mas barata es " + tipoMasBarato);
}
