/*race schedule Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.
*/

let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 18;
if (early === true && age > 18){
  raceNumber += 1000;
}

if (age > 18 && early === true){
  console.log(`Your number is: ${raceNumber} and you will race at 9:30 am`);
} else if (age > 18 && early === false){
  console.log (`Your number is: ${raceNumber} and you race at 11:00am`);
} else if (age < 18){
  console.log (`Your number is: ${raceNumber} and you race at 12:30 pm`);
} else{
  console.log ('Please go to the registration desk to get your race number and your race schedule');
}