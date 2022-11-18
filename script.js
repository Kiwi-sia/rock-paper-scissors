//starting scores//
let playerScore = 0;
let computerScore = 0;

//adding score to the div//
let currentScore = document.createElement("p");
currentScore.classList.add("score");
document.getElementById("scoreboard").appendChild(currentScore);
getCurrentScore();

//adding match result to the div//
let matchResults = document.createElement("p");
matchResults.classList.add("match");
document.getElementById("scoreboard").appendChild(matchResults);

//adding game winner to the div//
let gameWinner = document.createElement("p");
gameWinner.classList.add("winner");
document.getElementById("scoreboard").appendChild(gameWinner);

//listening for button clicks
let btns = document.querySelectorAll(".button");
btns.forEach((btn) => {
	btn.addEventListener("click", () => {
		let playerSelection = btn.textContent;
		if (playerScore < 5 && computerScore < 5) {
			playRound(playerSelection, getComputerSelection());
		}
	});
});

//clearing the scoreboard
function playAgain() {
	let playAgain = document.createElement("span");
	playAgain.classList.add("button", "play-again");
	playAgain.textContent = "Play again?";
	document.getElementById("scoreboard").appendChild(playAgain);
	playAgain.addEventListener("click", () => {
		document.getElementById("scoreboard").removeChild(playAgain);
		console.log("clicked play again!");
		playerScore = 0;
		computerScore = 0;
		gameWinner.textContent = "";
		matchResults.textContent = "";
		getCurrentScore();
	});
}

//updating scoreboard
function getCurrentScore() {
	currentScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
}

//generating computerSelection
function getComputerSelection() {
	const CHOICES = ["Rock", "Paper", "Scissors"];
	let computerSelection = CHOICES[Math.floor(Math.random() * CHOICES.length)];
	return computerSelection;
}

//play one round//
function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toUpperCase();
	computerSelection = computerSelection.toUpperCase();
	if (computerSelection == playerSelection) {
		matchResults.textContent = `Underwhelming... ${playerSelection.charAt(0)}${playerSelection
			.slice(1)
			.toLowerCase()} versus ${computerSelection.toLowerCase()}, what did you expect?`;
		getCurrentScore();
	} else if (
		(computerSelection == "PAPER" && playerSelection == "ROCK") ||
		(computerSelection == "ROCK" && playerSelection == "SCISSORS") ||
		(computerSelection == "SCISSORS" && playerSelection == "PAPER")
	) {
		computerScore++;
		matchResults.textContent = `Sorry pal, computer's ${computerSelection.toLowerCase()} beats your ${playerSelection.toLowerCase()}!`;
		getCurrentScore();
		if (computerScore == 5) {
			gameWinner.textContent = "Computer won the game!";
			playAgain();
		}
	} else if (
		(playerSelection == "PAPER" && computerSelection == "ROCK") ||
		(playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
		(playerSelection == "SCISSORS" && computerSelection == "PAPER")
	) {
		playerScore++;
		matchResults.textContent = `Yay! You beat computer's ${computerSelection.toLowerCase()} wit your ${playerSelection.toLowerCase()}!`;
		getCurrentScore();
		if (playerScore == 5) {
			gameWinner.textContent = "Player won the game!";
			playAgain();
		}
	}
}
