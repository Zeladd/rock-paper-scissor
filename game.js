const variants = ["rock","paper","scissors"];

function getComputerChoice() {
    let choise = Math.floor(Math.random() * 3)
    return variants[choise];
}

function playerSelection() {
    let choise = prompt("Choose rock/paper/scissors");
    while (variants.includes(choise) === false) {
        choise = prompt("Choose rock/paper/scissors");
    }
    return choise.toLowerCase();
}

function playRound(playerSelection, computerChoice) {
    if(playerSelection === computerChoice) {
        return "It's a draw!";
    }
    else {
        switch (playerSelection) {
            case "rock":
                if (computerChoice === "scissors") {
                    return "You win, rock beats scissors!";
                }
                else {
                    return "You lose, paper beats rock!";
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    return "You win, paper beats rock!";
                }
                else {
                    return "You lose, scissors beats paper!";
                }
                break;
            case "scissors":
                if (computerChoice === "paper") {
                    return "You win, scissors beats paper!";
                }
                else {
                    return "You lose, rock beats scissors!";
                }
                break;
        }
    }
}
function game() {
    let pScore = 0;
    let cScore = 0;
    console.log("Welcome to rock/paper/scissors game (best of 5)");
    console.log(pScore.toString() + " - " + cScore.toString() + " (Player - Computer)");
    for(let i = 0; i < 5; i++) {
        let winningStatement = playRound(playerSelection(), getComputerChoice());
        if (winningStatement.includes("You win")) {
            pScore += 1; 
        }
        else if (winningStatement.includes("You lose")) {
            cScore +=1;
        }
        console.log(winningStatement);
        console.log(pScore.toString() + " - " + cScore.toString() + " (Player - Computer)");
    }
}

game();