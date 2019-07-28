// programa piedra papel o tijera

//this function allows the user choose an option
const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
  return userInput;

} else if (userInput === 'bomb'){
  return userInput;
}
  else {
  console.log('invalid option please choose again remember only between paper, rock or scissors')
 }
}

// this function allows the computer get a option 
const getComputerChoice = () =>{
  const randomNumber = Math.floor(Math.random() * 3) 
  switch (randomNumber){
    case 0:
    return 'paper';
    case 1: 
    return 'rock';
    case 2: 
    return 'scissors';
    break;
   }
}
//this function compare the two options a determine the winner 
const determineWinner = (userInput, computerChoice) => {
 	userInput = userInput.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (userInput === computerChoice){
    return 'tie'
  }
  if (userInput === 'paper'){
    if(computerChoice === 'scissors'){
      return 'computer wins'
    } else {
      return 'you win!'
    }
  }
  if (userInput === 'rock'){
    if(computerChoice === 'paper'){
      return 'computer wins'
    } else {
      return 'you win!'
    }
  }
  if (userInput === 'scissors'){
    if(computerChoice === 'rock'){
      return 'computer wins'
    } else {
      return 'you win!'
    }
  }
  if(userInput === 'bomb'){
    return 'ofcurse you fucking win!!!!!'
  }
}
// this function stars to play the game 
const playGame = () => {
const userChoice = getUserChoice('bomb')
const computerChoice = getComputerChoice()
console.log('you choose' + ' ' + userChoice)
console.log('computer choose' + ' ' + computerChoice)
console.log(determineWinner(userChoice, computerChoice))
}
playGame()
