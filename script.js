//get computer choice by random
function getComputerChoice() {
  let computerSelection;
  let choice = Math.random();
  choice <= 0.33
    ? (computerSelection = "Paper")
    : choice <= 0.66
    ? (computerSelection = "Rock")
    : (computerSelection = "Cissors");
  return computerSelection;
}
//get user input by prompt
function getPlayerSelection() {
  let playerSelection = prompt(
    "Please choose to play one of the following: \nrock, paper, cissors"
  );
  return playerSelection;
}

//get both selections
const computerSelection = getComputerChoice();
const playerSelection = getPlayerSelection();
//play a round of the game
//declare the round winner

//create a score variable for player-win
let playerWinScore = 0;
//create a score variable for computer-win
let computerWinScore = 0;
//until player-win or computer-win is 5 play a round
//declare who won

//get match results
console.log(playRound(playerSelection, computerSelection));

//play 5 matches
function game() {
  //   for (let i = 1; i <= 5; i++) {
  //   }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();

  if (computerSelection == playerSelection) {
    console.log(draw);
  } else if (
    (computerSelection == "PAPER" && playerSelection == "ROCK") ||
    (computerSelection == "ROCK" && playerSelection == "CISSORS") ||
    (computerSelection == "CISSORS" && playerSelection == "PAPER")
  ) {
    console.log(playerLose);
  } else if (
    (playerSelection == "PAPER" && computerSelection == "ROCK") ||
    (playerSelection == "ROCK" && computerSelection == "CISSORS") ||
    (playerSelection == "CISSORS" && computerSelection == "PAPER")
  ) {
    console.log(playerWins);
  }
}

//static phrases
const computerError = "There was an error in computer selection";
const playerWins = "Congratulations! You win!";
const playerLose = "Sorry, you lose!";
const draw = "It's a draw, play again!";
