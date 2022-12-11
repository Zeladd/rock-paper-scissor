const variants = ["rock","paper","scissors"];
var computerScore = 0;
var playerScore = 0;

function setScore(playerScore, computerScore) {
    let score = toString(playerScore) + " - " + toString(computerScore) + " (player - computer)";
    return score
}

function getComputerChoice() {
    let choise = Math.floor(Math.random() * 3)
    return variants[choise];
}

function playerSelection() {
    let choise = prompt("Choose rock/paper/scissors");
    return choise.toLowerCase();
}

function playRound(playerChoice, computerChoice) {
    var win;

    if (playerChoice == computerChoice) {
        console.log("It's a draw!")
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        console.log("You lose!")
        win = false;
    } else if(playerChoice == "rock" && computerChoice == "scissors") {
        console.log("You win!")
        win = true;
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        console.log("You win!")
        win = true;
    } else if(playerChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose!")
        win = false;
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose!")
        win = false;
    } else if(playerChoice == "scissors" && computerChoice == "paper") {
        console.log("You win!")
        win = true;
    } else {
        console.log("Please choose between rock/paper/scissors!");
    }

    if (win == true) {
        playerScore += 1;
        console.log(win);
        console.log(setScore(playerScore , computerScore));
        console.log(playerScore);
    } else if (win == "false") {
        computerScore += 1;
        console.log(win);
        console.log(setScore(playerScore , computerScore));
    }
}

function game() {
    console.log("Welcome to rock/paper/scissors game (best of 5)");
    while (playerScore < 3 || computerScore < 3) {
        playRound(playerSelection(), getComputerChoice());
        console.log(score);
    }
    if (playerScore == 3) {
        console.log("Congrats! You won the game");
    } else {
        console.log("The computer won the game :(");
    }
}

game();