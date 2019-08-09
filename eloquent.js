//
//   let theNumber = Number(prompt("Pick a number"));
//   if (!Number.isNaN(theNumber)) {
//   alert("Your number is the square root of " +
//   theNumber * theNumber);
//   }
// else {
//   alert('Sorry it was not a number, reloaded the page a try again')
// }
//
// let number = 0;
// while (number <= 12) {
// console.log(number);
// number = number + 2;
// }
// let result = 1;
// let counter = 1;
// while (counter <= 10) {
// result = result * 2;
// counter = counter + 1;
// }
//
// let yourName;
// do {
// yourName = prompt("Who are you?");
// } while (!yourName);
// alert('thanks' + ' ' + yourName);
//
  //programa que calculas 2 elevado a la decima potencia
function exp(){
  let result = 1;
  for (let contador =0 ; contador < 10 ; contador ++) {
    result = result * 2;
  }
  return result;
}

console.log(exp())
