let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  alert("Your number is the square root of " +
    theNumber * theNumber);
} else {
  alert('Sorry it was not a number, reloaded the page a try again')
}


// DISPLAY LIST OF NUMBERS FROM 2 TO 12
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


// INTRODUCE YOUR NAME IF YOU WANT TO SEE THE WEB SITE
let yourName;
do {
  yourName = prompt("Who are you?");
}
while (!yourName)
alert('thanks' + ' ' + yourName);


// programa que calculas 2 elevado a la decima potencia
function exp() {
  let result = 1;
  for (let contador = 0; contador < 10; contador++) {
    result = result * 2;
  }
  return result;
}

console.log(exp())


// Write a loop that makes seven calls to console.log to output the following
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
for (let c = 1; c < 13; c++) {
  console.log(c)
}


// FIZZBUZZ program
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


// CHESS BOARD
let size = 20;
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
