import validator from './validator.js';

const validar = document.getElementById("validar"); //el boton para validar
validar.addEventListener("click", callValidar); // evento que al hacer click en el boton validar va a llamar a las indicaciones que hay en la función

function callValidar() { //función para mostrar validar
  const cardNumber = document.getElementById("cardNumber").value; //input id de la tarjeta
  if (validator.isValid(cardNumber) === true) {  //condición aplicada para el mensaje de si es válida o no la tarjeta
    document.getElementById("message").innerHTML = "Tarjeta válida";
  } else {
    document.getElementById("message").innerHTML = "Tarjeta no válida";
  }
  document.getElementById("cardNumber").value = validator.maskify(cardNumber);

  const nombre = document.getElementById("nombre").value;
  if ((nombre === "" || cardNumber === "")){
    alert ('Por favor, ingrese sus datos');
    //document.getElementById("message").innerHTML = "No ha ingresado su número de tarjeta";
    //document.getElementById("message2").innerHTML = "No ha ingresado su nombre";
  } 

}

//enmascarar maskify
/*function mascaraNumeral () {
    const enmascarar = document.getElementById("cardNumber").value;
    const enmascarado = validator.maskify(enmascarar);
    if (enmascarado) {
     enmascarar = enmascarado;
    }
}*/

//console.log(validator);
