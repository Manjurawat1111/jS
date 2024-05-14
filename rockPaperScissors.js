console.log('choose any among rock, paper or scissors');
const getUserChoice = userInput => {
  userInput=userInput.toLowerCase()
 if (userInput==='rock'||userInput==='paper'|| userInput==='scissors'){
 return userInput;
 }else 
 console.log('choose any among rock, paper or scissors');
};
 

const getComputerChoice= ()=>{
  let choiceNumber=Math.floor(Math.random()*3);
  switch(choiceNumber){
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;

  };
};

const determineWinner=(userChoice, computerChoice) =>{
  if(userChoice===computerChoice)
  return console.log('It\'s is a tie.');
if(userChoice==='rock'){
  if(computerChoice==='paper')
  console.log('you lost')
else 
console.log('You won')
}
if(userChoice==='paper'){
  if(computerChoice==='scissors'||computerChoice==='rock')
  console.log('you lost')
else 
console.log('You won')
}
if(userChoice==='scissors'){
  if(computerChoice==='rock')
  console.log('you lost')
else 
console.log('You won')
}
};
const playGame=()=>{
  const userChoice=getUserChoice('paper');
  console.log(userChoice);
  let computerChoice= getComputerChoice();
  console.log(computerChoice);
  determineWinner(userChoice, computerChoice);
}
playGame();
