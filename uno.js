/*Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los 
siguientes datos:
Tipo: (validar "HDD", "SSD" o "SSDM2")
Precio: (validar entre 5000 y 18000),
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   disponibles. 
c) Cuántas unidades de HDD hay en total.*/

function mostrar() {
  let tipo,
    precio,
    cantidad,
    marca,
    capacidad,
    flagSSDBarato = 1,
    precioSSDBarato,
    marcaSSDBarato,
    cantidadSSDBarato,
    flagHDDCaro = 1,
    precioHDDCaro,
    capacidadHDDCaro,
    unidadesHDDCaro,
    acumHDD = 0;
  for (let i = 0; i < 5; i++) {
    tipo = prompt(
      "Ingrese el tipo de almacenamiento: HDD, SSD o SSDM2"
    ).toLowerCase();
    while (tipo != "hdd" && tipo != "ssd" && tipo != "ssdm2") {
      tipo = prompt(
        "Incorrecto: Ingrese el tipo de almacenamiento: HDD, SSD o SSDM2"
      ).toLowerCase();
    }

    precio = parseFloat(prompt("Ingrese el precio entre 5000 y 18000"));
    while (isNaN(precio) || precio < 5000 || precio > 18000) {
      precio = parseFloat(
        prompt("Incorrecto. Ingrese el precio entre 5000 y 18000")
      );
    }

    cantidad = parseInt(prompt("Ingrese la cantidad (Hasta 50)"));
    while (isNaN(cantidad) || cantidad < 0 || cantidad > 50) {
      cantidad = parseFloat(
        prompt("Incorrecto. Ingrese la cantidad (Hasta 50)")
      );
    }

    marca = prompt("Ingrese la marca");

    capacidad = prompt(
      "Ingrese la capacidad: 250Gb, 500Gb, 1Tb, 2Tb"
    ).toLowerCase();
    while (
      capacidad != "250gb" &&
      capacidad != "500gb" &&
      capacidad != "1tb" &&
      capacidad != "2tb"
    ) {
      capacidad = prompt(
        "Ingrese la capacidad: 250Gb, 500Gb, 1Tb, 2Tb"
      ).toLowerCase();
    }

    switch (tipo) {
      case "ssd":
        if (flagSSDBarato || precio < precioSSDBarato) {
          marcaSSDBarato = marca;
          cantidadSSDBarato = cantidad;
          flagSSDBarato = 0;
        }
        break;
      case "hdd":
        if (flagHDDCaro || precio > precioHDDCaro) {
          precioHDDCaro = precio;
          capacidadHDDCaro = capacidad;
          unidadesHDDCaro = cantidad;
          flagHDDCaro = 0;
        }
        acumHDD += cantidad;
        break;
    }
  }
  console.log(
    "A- La marca de SSD mas barato es " +
      marcaSSDBarato +
      " con un total de " +
      cantidadSSDBarato +
      " unidades"
  );
  console.log(
    "B- La capacidad del HHD mas caro es " +
      capacidadHDDCaro +
      " con un total de " +
      unidadesHDDCaro +
      " unidades"
  );
  console.log("En total hay " + acumHDD + " HDDs");
}
