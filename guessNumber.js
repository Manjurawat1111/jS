let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random()*10);
}
console.log(generateTarget());

function compareGuesses(humanGuess, computerGuess, targetNumber){
    
   return (Math.abs(targetNumber- computerGuess))>=(Math.abs(targetNumber-humanGuess))?true:false;
}
 
 function updateScore(winner){
  if(winner==='human')
  humanScore++;
  else computerScore++;
 }

 function advanceRound(){
  currentRoundNumber++;
 }

