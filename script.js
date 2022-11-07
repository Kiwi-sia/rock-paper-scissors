//choose rock/paper/cissors by random for the compter choice
function getComputerChoice() {
    let computerSelection;
    let choice = Math.random() * 100;
    choice <= 33 ? computerSelection = 'Paper' : (choice <= 66 ? computerSelection = 'Rock': computerSelection ='Cissors');
    return computerSelection;
}

//decide who wins based on the game rules
function playRound(playerSelection, computerSelection) {

}



const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
