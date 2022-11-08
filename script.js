//get input from player
function getPlayerSelection() {
  let playerSelection = prompt(
    "Please choose to play one of the following: \nrock, paper, cissors"
  );
  return playerSelection;
}

//generate computers response
function getComputerSelection() {
  let computerSelection;
  let choice = Math.random();
  choice <= 0.33
    ? (computerSelection = "Paper")
    : choice <= 0.66
    ? (computerSelection = "Rock")
    : (computerSelection = "Cissors");
  return computerSelection;
}

//play one round
//write what beat what
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();
  winner = "";

  if (computerSelection == playerSelection) {
    console.log(draw);
    console.log(
      `${playerSelection}`.charAt(0) +
        `${playerSelection}`.slice(1).toLowerCase() +
        " versus " +
        `${computerSelection}`.toLowerCase() +
        ", what did you expect?"
    );
  } else if (
    (computerSelection == "PAPER" && playerSelection == "ROCK") ||
    (computerSelection == "ROCK" && playerSelection == "CISSORS") ||
    (computerSelection == "CISSORS" && playerSelection == "PAPER")
  ) {
    console.log(playerLoses);
    console.log(
      "Sorry pal, " +
        `${computerSelection}`.toLowerCase() +
        " beats " +
        `${playerSelection}`.toLowerCase() +
        "!"
    );
    return (winner = "computer");
  } else if (
    (playerSelection == "PAPER" && computerSelection == "ROCK") ||
    (playerSelection == "ROCK" && computerSelection == "CISSORS") ||
    (playerSelection == "CISSORS" && computerSelection == "PAPER")
  ) {
    console.log(playerWins);
    console.log(
      "You did it! You beat his " +
        `${computerSelection}`.toLowerCase() +
        " with your " +
        `${playerSelection}`.toLowerCase() +
        "!"
    );
    return (winner = "player");
  }
}

//play a match up to 5 battles
function playFive() {
  let playerWon = 0;
  let computerWon = 0;

  let keepGoing = true;

  while (keepGoing) {
    playRound(getPlayerSelection(), getComputerSelection());
    if (winner == "player") {
      playerWon++;
      console.log("This round's winner is " + winner);
    } else if (winner == "computer") {
      computerWon++;
      console.log("This round's winner is " + winner);
    } else if (winner == "") {
      console.log("No winner for this round!");
    }
    if (playerWon == 5 || computerWon == 5) {
      keepGoing = false;
    }
    console.log(
      "Current score is: player - " + playerWon + ", computer - " + computerWon
    );
  }
  console.log(
    winner.charAt(0).toUpperCase() + winner.slice(1) + " won the game!!!"
  );
  console.log(gameEnd);
}

//static declarations
const playerLoses = "You lost!";
const playerWins = "You won!";
const draw = "It's a draw!";
const gameEnd = "Well played! Come again soon!";

//play one round
//playRound(getPlayerSelection(), getComputerSelection());

//play five rounds
playFive();
