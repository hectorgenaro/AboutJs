  document.getElementById('algo').addEventListener('click', function() {

    // =========== INTRODUCE YOUR NAME IF YOU WANT TO SEE THE WEB SITE ==========
    let yourName;
    do {
      yourName = prompt("Who are you?");
    }
    while (!yourName)
    alert('Welcome' + ' ' + yourName);

    // ======= calcula el cuadrado de un numero=====
    function square(n) {
      let theNumber = Number(prompt("Pick a number"));
      if (theNumber == null || theNumber == "" || theNumber == undefined ) {
        square()
      } else if (!Number.isNaN(theNumber)) {
        alert("Your number is the square root of " +
          theNumber * theNumber);
      } else {
        alert('Sorry it was not a number try again remeber only numbers')
        square()
      }
    }
    square()

    //========= programa que calculas 2 elevado a la decima potencia ==========
    function exp() {
      let result = 1;
      for (let contador = 0; contador < 10; contador++) {
        result = result * 2;
      }
      return result;
    }
    console.log(exp())

    // ========= DISPLAY LIST OF NUMBERS FROM 2 TO 12 =======
    let number = 0;
    while (number <= 12) {
      console.log(number);
      number = number + 2;
    }

    // 2 A LA 10 CON WHILE
    let result = 1;
    let counter = 1;
    while (counter <= 10) {
      result = result * 2;
      counter = counter + 1;
    }

    //======== Write a loop that makes seven calls to console.log to output the following========
    // triangle:
    // #
    // ##
    // ###
    // ####
    // #####
    // ######
    // #######
    for (let r = '%'; r.length < 8; r = r + '%') {
      console.log(r)
    }

    // ========= FIZZBUZZ program ============
    for (let i = 1; i < 101; i++) {
      if (i % 3 == 0) {
        console.log('Fizz')
      } else if (i % 5 == 0 && i % 3 !== 0) {
        console.log('Buzz')
      } else {
        console.log(i)
      }
    }
    for (let i = 1; i < 101; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz')
      } else if (i % 3 == 0) {
        console.log('Fizz')
      } else if (i % 5 == 0) {
        console.log('Buzz')
      } else {
        console.log(i)
      }
    }


    // ============ CHESS BOARD =============
    let size = 4;
    let tablero = " "
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
          tablero = tablero + " ";
        } else {
          tablero = tablero + "#"
        }

      }
      tablero = tablero + "\n "

    }
    console.log(tablero);


    // =========== Problema corredores =========
    // De cuatro corredores de atletismo se sabe que C a llegado inmediatamente detras de B,
    // y D ha llegado en medio de A y C. ¿Podria usted calcular el orden de llegada?
    // B
    // C
    // D
    // A
    let a = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      resultado: function() {
        if (a.A > a.D &&
          a.D > a.C &&
          a.D > a.B &&
          a.C > a.B) {
          return true;
        }
        return false;
      },
      intervalo: setInterval(function() {
        a.A = Math.ceil(Math.random() * 4)
        a.B = Math.ceil(Math.random() * 4)
        a.C = Math.ceil(Math.random() * 4)
        a.D = Math.ceil(Math.random() * 4)

        if (a.resultado()) {
          clearInterval(a.intervalo);
          console.log("Corredor A", a.A)
          console.log("Corredor B", a.B)
          console.log("Corredor C", a.C)
          console.log("Corredor D", a.D)
        }
      }, 5)
    }

    function list() {
      let palabra = prompt('escribe una palabra \n te la mostrare caracter por caracter')

      if (palabra === "" || palabra === null) {
        list()
      }else{
      palabra = palabra.replace(/ /g, "")
      for (let i = 0; i < palabra.length; i++) {
        alert(palabra[i])
      }
    }
  }
    list()

    const myArray = [6, 19, 20];
    const yourArray = [19, 81, 2];
    for (let i = 0; i < myArray.length; i++) {
      for (let j = 0; j < yourArray.length; j++) {
        if (myArray[i] === yourArray[j]) {
          console.log('Both loops have the number: ' + yourArray[j])
        }
      }
    };

    // ====== palindrome ========
    function palindrome(str) {

      str = prompt('Escribe algo te dire si es un palindromo')
      if (str === null || str === "") {
        palindrome()
      }
      str = str.replace(/ /g, "").toLowerCase()
      if (str === str.split('').reverse().join('')) {
        alert('Esto es un palindromo')
      } else {
        alert('Lo siento esto no es un palindromo')
      }

    }
    palindrome()
    alert('NOW CHECK THE CONSOLE OF THIS BROWSER')

    function adjacentElementsProduct(inputArray) {
      var max = inputArray[0] * inputArray[1]
      for (let i = 0; i <= inputArray.length; i++) {
        if (inputArray[i] * inputArray[i + 1] > max) {
        return  max = inputArray[i] * inputArray[i + 1]
        }
      }
      return max
    }
    console.log(adjacentElementsProduct(1,2))
// ======= program that calculate the factorial of a number =======
function factorial(n){
  if (n==0){
  return 1
  }
else{
  return  factorial (n-1) * n
  }
}
console.log(factorial(24))
  });

function cambioSeleccion() {
  let cambio = document.getElementsByName('test')
  console.log(cambio)
  for (let i = 0; i < cambio.length; i++) {

    if (cambio[i].checked) {
      let res=cambio[i].value;
    document.getElementById('respuesta').innerHTML=res;
    }
  }
}

function again(){
  let x= document.getElementById('some')
  let y= document.getElementById('ap').innerHTML = x.value;
  console.log(y);
  if(x.value != ""){
    x.value = ""
  }else{
    x.value = y
  }
}

  function cls (){
  let z= document.getElementById('ap')
  z.innerHTML=""
}


 function platzi() {

   // function platziStr(){
   //   var nombre = prompt('Te dire la ultima letra de tu Nombre \n Escribe tu nombre')
   //   if (nombre){
   //     var str = nombre.trim()
   //     numL = str.length
   //     lastL = str.charAt(numL-1)
   //     alert(`la ultima letra de tu nombre es: ${lastL}`)
   //   }else{
   //     alert("no puedes dejar tu nombre en blanco")
   //      platziStr()
   //    }
   //  }


  var genaro = {
    nombre: 'Genaro',
    apellido: 'Rodriguez',
    edad: 34,
    ingeniero: true,
    cocinero: false,
    dj: false,
    bajista: true,
    drone: false,
    edad: 34,
    peso: 70
  }
  var pedro = {
    nombre: 'Pedro',
    apellido: 'Mendez',
    edad: 17
  }

  function imprimeNombreYEdad(persona) {
    var nombre = persona.nombre
    var edad = persona.edad
    console.log(`hola me llamo ${persona.nombre} y tengo ${persona.edad} años`)
  }
  imprimeNombreYEdad(genaro)
  imprimeNombreYEdad(pedro)

  // const imprimirSiEsMayorDeEdad = function imprimirSiEsMayorDeEdad(persona) {
  //   if (persona.edad >= 18) {
  //     console.log(`${persona.nombre}: es mayor de edad`)
  //   } else {
  //     console.log(`${persona.nombre}: no es mayor de edad`)
  //   }
  // }
  const MAYOR_EDAD = 18
  var esMayorDeEdad = persona => persona.edad >= MAYOR_EDAD

  // misma funcion pero como arrow function
  const imprimirSiEsMayorDeEdad = persona => {
    if (esMayorDeEdad(persona)) {
      console.log(`${persona.nombre}: es mayor de edad`)
    } else {
      console.log(`${persona.nombre}: no es mayor de edad`)
    }
  }

  const esMenorDeEdad = persona => !esMayorDeEdad(persona)
  const imprimeEsMenorDeEdad = persona => {
  if (esMenorDeEdad(persona)) {
    console.log(`${persona.nombre}: acceso denegado`)
  } else {
    console.log(`${persona.nombre}: acceso permitido`)
  }
}

  imprimirSiEsMayorDeEdad(genaro)
  imprimirSiEsMayorDeEdad(pedro)
  imprimeEsMenorDeEdad(genaro)
  imprimeEsMenorDeEdad(pedro)
  // platziStr()

  console.log(`Al inicio del año ${genaro.nombre} pesa ${genaro.peso}kg`)
  const INCREMENTO_PESO = 0.2
  const aumentaDePeso = persona => persona.peso += INCREMENTO_PESO
  const bajaDePeso = persona => persona.peso -= INCREMENTO_PESO

  for(i=1; i<=365; i++){
    var random = Math.random()
    if(random < 0.25){
      aumentaDePeso(genaro);
    } else if (random < 0.50){
      bajaDePeso(genaro);
    }
  }
  console.log(`Al final del año ${genaro.nombre} pesa ${genaro.peso.toFixed(1)}kg`)
}
