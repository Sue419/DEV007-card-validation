import validator from './validator.js';

const validar = document.getElementById("validar"); //el boton para validar
validar.addEventListener("click", callValidar); // evento que al hacer click en el boton validar va a llamar a las indicaciones que hay en la función

function callValidar() { //función para mostrar validar

  const nombre = document.getElementById("nombre").value;
  if ((nombre === "" || cardNumber === "")){
    document.getElementById("message").innerHTML = "Por favor, ingrese sus datos";
    return;
  } 

  const cardNumber = document.getElementById("cardNumber").value; //input id de la tarjeta
  if (validator.isValid(cardNumber) === true) {  //condición aplicada para el mensaje de si es válida o no la tarjeta
    document.getElementById("message").innerHTML = "Tarjeta válida";
  } else {
    document.getElementById("message").innerHTML = "Tarjeta no válida";
  }

  document.getElementById("cardNumber").value = validator.maskify(cardNumber);

}

// Agregar un event listener al campo de nombre
const nombreInput = document.getElementById("nombre");
nombreInput.addEventListener("input", () => {
  const nombre = nombreInput.value;
  // Actualizar el nombre en la tarjeta
  document.getElementById("nombreTarjeta").textContent = nombre;
});

// Agregar un event listener al campo de número de tarjeta
const cardNumberInput = document.getElementById("cardNumber");
cardNumberInput.addEventListener("input", () => {
  let cardNumber = cardNumberInput.value;
  // Eliminar cualquier espacio en blanco existente en el número de tarjeta
  cardNumber = cardNumber.replace(/\s/g, '');
  // Formatear el número de tarjeta con espacios cada cuatro dígitos
  cardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
  // Actualizar el número en la tarjeta
  document.getElementById("numeroTarjeta").textContent = cardNumber;
});