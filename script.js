const options = ['Rock', 'Paper', 'Scissors'];
var player_score = document.getElementsByClassName("player_score")[0].innerHTML;
var computer_score = document.getElementsByClassName("compute_score")[0].innerHTML;

const resetScoreAndDash = () => {
    if (player_score + computer_score === 5) {
        document.getElementsByClassName("player_score")[0].innerHTML = 0;
        document.getElementsByClassName("compute_score")[0].innerHTML = 0;
        player_score = 0;
        computer_score = 0;

        // remove dashboard
        const player_1 = document.getElementsByClassName("player_selection_1")[0];
        let nodes = player_1.getElementsByTagName("p");

        while (player_1.hasChildNodes()) {
            // console.log(player_1.firstChild);
            player_1.removeChild(player_1.firstChild);
        }

        const player_2 = document.getElementsByClassName("player_selection_2")[0];
        nodes = player_2.getElementsByTagName("p");

        while (player_2.hasChildNodes()) {
            // console.log(player_2.firstChild);
            player_2.removeChild(player_2.firstChild);
        }
    }
}

const computerPlay = () => {
    let random = Math.floor(Math.random() * 3);
    return options[random];
}

const displayDashboard = (playerSelection, computerSelection) => {
    const player_option = document.createElement("p");
    player_option.textContent = playerSelection;
    document.getElementsByClassName("player_selection_1")[0].appendChild(player_option);

    const computer_option = document.createElement("p");
    computer_option.textContent = computerSelection;
    document.getElementsByClassName("player_selection_2")[0].appendChild(computer_option);
}

const playRound = (playerSelection, computerSelection) => {
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

const game = (number) => {
    resetScoreAndDash();
    let playerSelection = options[number];
    let computerSelection = computerPlay();
    displayDashboard(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    if (player_score + computer_score === 5) {
        let message = "Game Over!! Congratulation, you won!";
        if (player_score < computer_score) {
            message = "Game Over!! You lost, better luck next time.";
        }
        document.getElementsByClassName("announcement")[0].innerHTML = message;
    }
}
