const options = ['Rock', 'Paper', 'Scissors'];
var player_score = document.getElementsByClassName("player_score")[0].innerHTML;
var computer_score = document.getElementsByClassName("compute_score")[0].innerHTML;

function game(number) {
    let playerSelection = options[number];
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    if (player_score + computer_score === 5) {
        document.getElementsByClassName("announcement")[0].innerHTML = "Game Over!!";
        setTimeout(resetScore(), 3000); // ?? not working
    }
}

function resetScore() {
    document.getElementsByClassName("player_score")[0].innerHTML = 0;
    document.getElementsByClassName("compute_score")[0].innerHTML = 0;
}

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    return options[random];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    
    if (playerSelection === computerSelection) {
        document.getElementsByClassName("announcement")[0].innerHTML = "It is a tie";
        return;
    }
    switch(playerSelection) {
        case "ROCK":
            if (computerSelection.toUpperCase() === "PAPER") {
                computer_score++;
            } else {
                player_score++;
            }
            break;
        case "PAPER":
            if (computerSelection.toUpperCase() === "SCISSORS") {
                computer_score++;
            } else {
                player_score++;
            }
            break;
        case "SCISSORS":
            if (computerSelection.toUpperCase() === "ROCK") {
                computer_score++;
            } else {
                player_score++;
            }
            break;
        default:
            document.getElementsByClassName("announcement")[0].innerHTML = "Invalid options, pick among Rock, Paper and Scissors";
    }
    if (player_score > computer_score) {
        document.getElementsByClassName("announcement")[0].innerHTML = `${playerSelection} beats ${computerSelection}`;
    } else {
        document.getElementsByClassName("announcement")[0].innerHTML = `${computerSelection} beats ${playerSelection}`;
    }
    document.getElementsByClassName("player_score")[0].innerHTML = player_score;
    document.getElementsByClassName("compute_score")[0].innerHTML = computer_score;
}