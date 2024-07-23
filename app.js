const overAllButton = document.getElementById("over-btn");


const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = " PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS"

let gameStart = false;

const computerChoice = function (){
   const computerSelection = Math.random();

   if (computerSelection <0.35){
    return ROCK;
   }
   else if(computerSelection <0.65){
    return PAPER;
   }
   else{
    return SCISSORS;
   }
}


const playerChoice = function () {
  const selection = prompt(`${ROCK}, ${PAPER} , ${SCISSORS}?`).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_CHOICE} for you`);
    return DEFAULT_CHOICE;
  }
  return selection;
};
const winnerPart = function(cChoice , pChoice){

  if(cChoice === pChoice){
    return RESULT_DRAW;

  }
  else if (cChoice===ROCK&& pChoice===PAPER ||
     cChoice===PAPER&& pChoice===SCISSORS|| 
     cChoice===SCISSORS&&pChoice===ROCKAKFS){
      return RESULT_PLAYER_WINS;
     }
     else{
      return RESULT_COMPUTER_WINS;
     }

}


overAllButton.addEventListener("click", () => {
  if (gameStart) {
    return
  }
  gameStart = true;
  const playerGetChoice = playerChoice();
  const computerGetChoice = computerChoice();
  const winner = winnerPart(computerGetChoice,playerGetChoice);
  
  // let winnerDisplay = `you pick ${playerGetChoice} and Coumputer pick ${computerGetChoice} so `;
  let winnerDisplay;
  if (winner === RESULT_DRAW){
    winnerDisplay = " DRAW"
  }
  else if (winner === RESULT_PLAYER_WINS){
      winnerDisplay = " The Winner PLAYER"
  }
  else {
    winnerDisplay =   " The Winner COMPUTER"
  }
  uiResult(playerGetChoice,computerGetChoice,winnerDisplay)
  gameStart = false;
// alert(winnerDisplay)
  console.log("Game Start ");
  console.log(winner);
});
