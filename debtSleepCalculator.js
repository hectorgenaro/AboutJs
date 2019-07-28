//programa que calcula las horas que deberias dormir en una semana 

// function that return how many hours you slept per night one week's day
const getSleepHours = day => {
//day = day.toLowerCase()
 
switch (day) {
  case 'monday':
    return 8;
  case 'tuesday':
    return 4;
  case 'wednesday':
    return 6;
  case 'thursday':
    return 5;
  case 'friday':
    return 7;
  case 'saturday':
    return 5;
  case 'sunday':
    return 9;
   break; 
 	 default: 
 		return 'error!'
  }
}

// function that calculates the total amount of hours slept through the week
const getActualSleepHours = () =>
8 + 4 + 6 + 5 + 7 + 5 + 9
console.log(getActualSleepHours())

//function that get the ideal hour to sleep during the week
const getIdealSleepHours = userInput => {
	let idealHours = userInput
	return idealHours * 7;
}
getIdealSleepHours(8);

// this function calculate debt of hours you have
const calculateSleepDebt = () => {
let userInput = 8;
let actualSleepHours = getActualSleepHours();
let idealSleepHours = getIdealSleepHours(userInput); 

  if (actualSleepHours === idealSleepHours)
{
	console.log( 'you got the perfect amount of sleep this week')
} 
  else if (actualSleepHours > idealSleepHours)
{
  	console.log('you got' + ' ' + (idealSleepHours - actualSleepHours) + ' ' + 'hours more sleep than you needed')
} 
  else if (actualSleepHours < idealSleepHours)
  {
  	console.log('you got' + ' ' + (idealSleepHours -  actualSleepHours) + ' ' + 'less hours than you need you should get some more rest')
} 
  else {
    console.log('error! something went wrong check your code')
  }
}
calculateSleepDebt();
