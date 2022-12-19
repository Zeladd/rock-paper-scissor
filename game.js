const variants = ["rock","paper","scissors"];
const choises = document.getElementsByTagName("button");
const whiteBoard = document.querySelector("#board");
let pScore = 0;
let cScore = 0;

function getComputerChoice() {
    let choise = Math.floor(Math.random() * 3)
    return variants[choise];
}

function restartGame() {
    pScore = 0;
    cScore = 0;
    const scoreBoard = document.querySelector("#score");
    scoreBoard.textContent = "Player "+ pScore + " - " + cScore + " Computer";
    document.querySelector(".playAgain").remove();
    whiteBoard.textContent = "Best of 5, choose rock/paper/scissors";
    for(let i = 0; i < choises.length; i++) {
        choises[i].addEventListener("click", playRound);
    }
}

function playRound(event) {
    let computerChoice = getComputerChoice();
    let playerSelection = event.target.id;
    const scoreBoard = document.querySelector("#score");

    if(playerSelection === computerChoice) {
        whiteBoard.textContent = "It's a draw!";
    }
    else {
        switch (playerSelection) {
            case "rock":
                if (computerChoice === "scissors") {
                    whiteBoard.textContent = "You win, rock beats scissors!";
                    ++pScore; 
                }
                else {
                    whiteBoard.textContent = "You lose, paper beats rock!";
                    ++cScore;
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    whiteBoard.textContent = "You win, paper beats rock!";
                    ++pScore;
                }
                else {
                    whiteBoard.textContent = "You lose, scissors beats paper!";
                    ++cScore;
                }
                break;
            case "scissors":
                if (computerChoice === "paper") {
                    whiteBoard.textContent = "You win, scissors beats paper!";
                    ++pScore;
                }
                else {
                    whiteBoard.textContent = "You lose, rock beats scissors!";
                    ++cScore;
                }
                break;
        }
        scoreBoard.textContent = "Player "+ pScore + " - " + cScore + " Computer";
        if (pScore == 5 || cScore == 5) {
            if (pScore == 5) {
                whiteBoard.textContent = "You win!!!!! You have beaten the computer!!!";
            }
            if (cScore == 5) {
                whiteBoard.textContent = "You lose.... Humanity lost all it's hope..";
            }
            const playAgain = document.createElement("button");
            document.querySelector("#display").appendChild(playAgain);
            playAgain.textContent ="Play Again?";
            playAgain.className = "playAgain";
            playAgain.addEventListener("click", restartGame);
            for(let i = 0; i < choises.length; i++) {
                choises[i].removeEventListener("click", playRound);
            }
        }
    }
}

for(let i = 0; i < choises.length; i++) {
    choises[i].addEventListener("click", playRound);
}
