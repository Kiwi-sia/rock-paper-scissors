//play 5 matches
function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(playRound(getPlayerSelection, computerSelection));
        console.log('You have played '+ i + ' times.');
    }
}

//decide who wins in a match
function playRound(getPlayerSelection, computerSelection) {

    //console.log('Computer played ' + computerSelection.toUpperCase());
    //results for each case of thing that player can play
    switch (getPlayerSelection().toUpperCase()) {
        case 'ROCK':
            if (computerSelection.toUpperCase() == 'ROCK') {
                console.log(draw);
            } else if (computerSelection.toUpperCase() == 'CISSORS') {
                console.log(playerWins + ' Rock beats cissors!');
            } else if (computerSelection.toUpperCase() == 'PAPER') {
                console.log(playerLose + ' Paper beats rock!')
            } else {
                console.log(computerError)
            }
            break;

        case 'PAPER':
            if (computerSelection.toUpperCase() == 'ROCK') {
                console.log(playerWins + ' Paper beats rock!');
            } else if (computerSelection.toUpperCase() == 'CISSORS') {
                console.log(playerLose + ' Cissors beat paper!');
            } else if (computerSelection.toUpperCase() == 'PAPER') {
                console.log(draw)
            } else {
                console.log(computerError)
            }
            break;

        case 'CISSORS':
            if (computerSelection.toUpperCase() == 'ROCK') {
                console.log(playerLose + ' Rock beats cissors!');
            } else if (computerSelection.toUpperCase() == 'CISSORS') {
                console.log(draw);
            } else if (computerSelection.toUpperCase() == 'PAPER') {
                console.log(playerWins + ' Cissors beat paper!')
            } else {
                console.log(computerError)
            }
            break;

        default:
            console.log('There was an error in your input. Please choose to play one of the following: Paper, Rock, Cissors');
            break;
    }
}

//static phrases
const computerError = 'There was an error in computer selection';
const playerWins = 'Congratulations! You win!';
const playerLose = 'Sorry, you lose!';
const draw = 'It\'s a draw, play again!';

//const playerSelection = "rock";
const computerSelection = getComputerChoice();

//get match results
console.log(game(getPlayerSelection, computerSelection));

//choose rock/paper/cissors by random for the compter choice
function getComputerChoice() {
    let computerSelection;
    let choice = Math.random();
    choice <= 0.33 ? computerSelection = 'Paper' : (choice <= 0.66 ? computerSelection = 'Rock': computerSelection ='Cissors');
    return computerSelection;
}

//prompt user to choose what to play
function getPlayerSelection() {
    let choice = prompt('Please choose to play one of the following: \nrock, paper, cissors');
    return choice;
}
