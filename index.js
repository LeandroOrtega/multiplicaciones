/* let numeroPrincipal = parseInt(
  prompt("Hoy vamos a aprender la tabla del numero?")
);
for (let x = 1; x <= 10; x++) {
  let resultado = numeroPrincipal * x;

  alert(numeroPrincipal + "x" + x + "=" + resultado + "     presiona Aceptar");
} */

let usuario = prompt("ingrese su nombre");
alert(
  "Bienvenido " +
    usuario +
    " el desafio de hoy es resolver 5 multiplicaciones, si estas listo presiona aceptar"
);
function total(art1, art2, art3, art4, art5) {
  return art1 + art2 + art3 + art4 + art5;
}
let art1 = parseInt(prompt("cuanto es 7x4?"));
switch (28) {
  case art1:
    alert(
      "Es correcto, recuerda que no puedes fallar en ninguna. Presiona aceptar"
    );
    break;
  default:
    alert("Incorrecto");
    break;
}
let art2 = parseInt(prompt("cuanto es 7x6? "));
switch (42) {
  case art2:
    alert("Es correcto");
    break;
  default:
    alert("Incorrecto");
}
let art3 = parseInt(prompt("cuanto es 7x8?"));
switch (56) {
  case art3:
    alert("Es correcto");
    break;
  default:
    alert("Incorrecto");
}
let art4 = parseInt(prompt("cuanto es 7x9?"));
switch (63) {
  case art4:
    alert("Es correcto");
    break;
  default:
    alert("Incorrecto");
}
let art5 = parseInt(prompt("por último, cuanto es 9x8?"));
switch (72) {
  case art5:
    alert("Es correcto");
    break;
  default:
    alert("Incorrecto");
}
resultadoarticulos = total(art1, art2, art3, art4, art5);
switch (261) {
  case resultadoarticulos:
    alert(
      "Felicitaciones " +
        usuario +
        " has realizado correctamente el desafio. Tu calificacion es 10"
    );
    break;
  default:
    alert(
      "No cumpliste con el objetivo, recuerda que no podias fallar en ninguna respuesta. Actualiza la página y vuelve a intentar"
    );
}
