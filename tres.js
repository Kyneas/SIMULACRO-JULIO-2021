/*
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
*/

function mostrar() {
  let nombre,
    edad,
    genero,
    vacuna,
    temperatura,
    flagMaxTemp = 1,
    tempMax,
    nombreMaxTemp,
    vacunaMaxTemp,
    femeninoSputnikV,
    noBinAstraOtra,
    astraZenecaConFiebre = 0,
    hombresSinFiebre,
    totalEdadHombreSinFiebre,
    promEdadHombreSinFiebre,
    respuesta,
    totalPersonas,
    acumSpu = 0,
    acumAstra = 0,
    acumOtraVac = 0,
    vacunaMasAplicada,
    acumFem = 0,
    acumMasc = 0,
    acumNB = 0,
    porcentajeAstra,
    porcentajeFeme,
    porcentajeMasc,
    porcentajeNB,
    edadAcumAstra = 0,
    edadAcumSput = 0,
    edadAcumOtras = 0,
    promEdadAstra,
    promEdadSput,
    promEdadOtras;

  do {
    nombre = prompt("Ingrese su numbre");

    edad = parseInt(prompt("Ingrese su edad"));
    while (isNaN(edad) || edad <= 0) {
      edad = parseInt(prompt("Incorrecto. Ingrese su edad"));
    }

    genero = prompt("Ingrese genero: f / m / nb").toLowerCase();
    while (genero != "f" && genero != "m" && genero != "mb") {
      genero = prompt("Incorrecto. Ingrese genero: f / m / nb").toLowerCase();
    }

    vacuna = prompt("Ingrese la vacuna: spu / astra / otra");
    while (vacuna != "spu" && vacuna != "astra" && vacuna != "otra") {
      vacuna = prompt("Incorrecto. Ingrese la vacuna: spu / astra / otra");
    }

    temperatura = parseFloat(prompt("Ingrese su temperatura"));
    while (isNaN(temperatura)) {
      temperatura = parseFloat(prompt("Incorrecto. Ingrese su temperatura"));
    }

    if (flagMaxTemp || temperatura > tempMax) {
      flagMaxTemp = 0;
      nombreMaxTemp = nombre;
      vacunaMaxTemp = vacuna;
    }
    if ((vacuna = "astra" && temperatura > 38)) {
      astraZenecaConFiebre++;
    }

    if (vacuna == "spu") {
      acumSpu++;
      edadAcumSput += edad;
    } else if (vacuna == "astra") {
      acumAstra++;
      edadAcumAstra += edad;
    } else {
      acumOtraVac++;
      edadAcumOtras += edad;
    }

    switch (genero) {
      case "f":
        if (vacuna == "spu") {
          femeninoSputnikV++;
        }
        acumFem++;
        break;
      case "m":
        if (vacuna == "spu" || temperatura <= 37) {
          hombresSinFiebre++;
          totalEdadHombreSinFiebre += edad;
        }
        acumMasc++;
        break;
      case "nb":
        if (vacuna == "astra" || vacuna == "otra") {
          noBinAstraOtra++;
        }
        acumNB++;
        break;
    }

    totalPersonas++;

    respuesta = prompt("Ingrese 's' si quiere seguir ingresando datos");
  } while (respuesta == "s");
  promEdadHombreSinFiebre = totalEdadHombreSinFiebre / hombresSinFiebre;

  console.log(
    "A- La persona con mas temperatura es " +
      nombreMaxTemp +
      " con la vacuna " +
      vacunaMaxTemp
  );
  console.log("B- " + femeninoSputnikV + " mujeres se aplicaron la SputnikV");
  console.log(
    "C- " +
      noBinAstraOtra +
      " personas de genero nb se aplicaron la Astrazeneka u otra"
  );
  console.log(
    "D- " +
      astraZenecaConFiebre +
      " personas que se aplicaron la AstraZeneka tuvieron mas de 38 de temperatura"
  );
  console.log(
    "E- El promedo de edad de los hombres que se aplicaron la vacuna SputnikV que tuvieron 37 de temperatura o menos es de " +
      promEdadHombreSinFiebre
  );

  porcentajeAstra = (acumAstra * 100) / totalPersonas;
  console.log(
    "F- El porcentaje de personas que se aplicaron la AstraZeneca es " +
      porcentajeAstra +
      "%"
  );

  if (acumSpu > acumAstra && acumSpu > acumOtraVac) {
    vacunaMasAplicada = "SpitnikV";
  } else if (acumAstra >= acumSpu && acumAstra > acumOtraVac) {
    vacunaMasAplicada = "AstraZeneca";
  } else {
    vacunaMasAplicada = "otras";
  }
  console.log("G- La vacuna mas aplicada es " + vacunaMasAplicada);

  promEdadAstra = edadAcumAstra / acumAstra;
  promEdadSput = edadAcumSput / acumSpu;
  promEdadOtras = edadAcumOtras / acumOtraVac;

  console.log(
    "H- El promedio de edad de las personas que se aplicaron cada vacuna :\n Sputnik: " +
      promEdadSput +
      "\n Astrazeneka: " +
      promEdadAstra +
      "\n Otra: " +
      promEdadOtras
  );

  porcentajeFeme = (acumFem * 100) / totalPersonas;
  porcentajeMasc = (acumMasc * 100) / totalPersonas;
  porcentajeNB = (acumNB * 100) / totalPersonas;
  console.log(
    "I- El porcentaje de mujeres es " +
      porcentajeFeme +
      "\n El porcentaje de hombres es " +
      porcentajeMasc +
      "\n El porcentaje de No Binario " +
      porcentajeNB
  );
}
