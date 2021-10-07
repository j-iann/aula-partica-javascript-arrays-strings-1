//#1
var dominio1 = "mundojs";
var dominio2 = "google";
console.log("Olá " + dominio1 + "! " + "O site www." + dominio2 + ".com te ajuda a achar muitos materiais de estudo.");

//#2
var valorA = "casa";
var valorB = "asa";
valorA.toUpperCase();
valorB.toUpperCase();
console.log(valorA + " " + valorB);

var comparar = valorA.localeCompare(valorB);
console.log(comparar);

//#3
var valorC = "substring(): Aprenda a utilizar.";
var substring = valorC.substring(13, 32);
console.log(substring);