const validator = {
  //
  isValid: function (creditCardNumber) {

    const reverseNumber = creditCardNumber.split("").reverse();  //divide un objeto String, 
    let sum = 0;

    for (let i = 0; i < reverseNumber.length; i++) {
      //console.log(reverseNumber)
      //Viendo los pares: (if) si el residuo de i y 2 NO es igual a 0...este se multiplica por dos
      if (i % 2 !== 0) {
        const pares = reverseNumber[i] * 2; // multiplica x2 los número pares en el número inverso
        //console.log(pares)
        if (pares >= 10) { //si 'pares' es mayor o igual a 10....se tiene que sumar
          const sumPar = pares.toString(); //se convierte a un string
          const numerosPares = Number(sumPar[0]); //number es para convertir a número y deje de ser string
          const numerofinal = Number(sumPar[1]);
          //numerosPares + numerofinal

          sum += numerosPares + numerofinal; //se suma el primer dígito con el segundo dígito 
        } else {
          sum += pares; //variables a sumar (suma y pares)
        }
      }

      else {
        sum += Number(reverseNumber[i]); //number es para convertirlo en número
      }
    }

    //console.log(sum)

    /*if (i % 2 !== 0) { 
      let pares = parseInt(reverseNumber[i] * 2); // multiplica x2 los número pares en el número inverso
      console.log(pares)
      /if (pares >= 10) {  // si el resultado de la multiplicación es mayor a 10, entonces se pasará a restarle 9 (pare - 9)
        pares-= 9;
        } 
        sum += pares;
         
    else {
      sum += reverseNumber[i];
    }
  }*/

    //si la suma de todo y división entre 10 es igual a cero (residuo) retorna verdadero y si no false
    if (sum % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },


  //----MASKIFY (enmascara los números excepto los últimos 4 dígitos)-----

  maskify: function (maskNumber) {

    //slice toma una parte del indice del 0 al -4. Es decir, es de atras para adelante, por eso los últimos 4 números no se enmascara
    //replace...pues reemplaza con el numeral
    const numbersToMask = maskNumber.slice(0, -4);
    //Mostrar número
    //console.log (numbersToMask);
    const mostrarNumbers = maskNumber.slice(-4);
    //console.log (mostrarNumbers);
    //Enmascarar los números
    const mask = numbersToMask.replace(/./g, "#");
    //console.log(mask);
    //entonces... hacer que me de los números enmascarados y los últimos 4 sin enmascarar
    //console.log (mask + mostrarNumbers);
    return mask + mostrarNumbers;
  }
};

export default validator;