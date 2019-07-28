//eight ball 

let userName = '';
userName? console.log (`Hello ${userName}!`) : console.log ('Hello!');
const userQuestion = 'will I be rich?';
console.log(`The user asked ${userQuestion}`);
const randomNumer = Math.floor(Math.random() * 8);
let eightBall = '';

if (randomNumer === 0) {
  console.log('It is certain');
} else if (randomNumer === 1) {
  console.log('It is decidedly so');
} else if (randomNumer === 2) {
  console.log('Reply hazy try again');
} else if (randomNumer=== 3) {
  console.log('Cannot predict now');
} else if (randomNumer === 4) {
  console.log('Do not count on it');
} else if (randomNumer === 5) {
  console.log('My sources say no');
} else if (randomNumer === 6) {
  console.log('Outlook sources say no');
} else if (randomNumer === 7) {
  console.log('Signs point to yes');
} else {
  console.log('No way to that happen');
} 
console.log(`The eight ball answered: ${eightBall}`);
