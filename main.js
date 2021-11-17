// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

var handleClick = function(event) {
    console.log(event);
 }

 document.getElementById("btnToClick").addEventListener("click", handleClick);

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

let field = document.querySelector(".focus")
var handleFocus = function(event) {
    console.log(field.value)
}
field.addEventListener("focus", handleFocus)

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
let field = document.querySelector(".value")
var handleInput = function(event) {
    console.log(field.value)
}
field.addEventListener("input", handleInput)
