var userChoice = prompt("Welcome to a game of BlackJack, or is it ");
var computerChoice = Math.random();
if (computerChoice < 0.2) {
    computerChoice = "rock";
} else if (computerChoice <= 0.4) {
    computerChoice = "paper";
} else if (computerChoice <= 0.6) {
    computerChoice = "scissors";
} else if (computerChoice <= 0.8) {
    computerChoice = "lizard";
} else {
    computerChoice = "spock";
}

alert("AI has read your mind and decided to choose " + computerChoice);

var compare = function(choice1, choice2){
    if (choice1 === choice2) {
        alert("Its a tie so u technically lose because this is blackjack rules and ur not the dealer");
    }

//If the user chose rock...
else if (choice1 === "rock") {
    if (choice2 === "scissors") {
        alert("Rock smashes scissors");
    } else if (choice2 === "paper") {
        alert("Paper covers rock");
    } else if (choice2 === "lizard") {
        alert("Rock smashes lizard");
    } else {
        alert("Spock vaporizes rock");
    }
}

//If the user chose paper...
else if (choice1 === "paper") {
    if (choice2 === "scissors") {
        alert("Scissors cuts paper");
    } else if (choice2 === "rock") {
        alert("Paper covers rock");
    } else if (choice2 === "lizard") {
        alert("Lizard eats paper");
    } else {
        alert("Paper disproves Spock");
    }
}

//If the user chose scissors...
else if (choice1 === "scissors") {
    if (choice2 === "paper") {
        alert("Scissors cuts paper");
    } else if (choice2 === "rock") {
        alert("Rock smashes scissors");
    } else if (choice2 === "lizard") {
        alert("Scissors decapitates lizard");
    } else {
        alert("Spock vaporizes scissors");
    }
}

//If the user chose lizard...
else if (choice1 === "lizard") {
    if (choice2 === "scissors") {
        alert("Scissors decapitates Lizard");
    } else if (choice2 === "rock") {
        alert("Rock smashes Lizard");
    } else if (choice2 === "paper") {
        alert("Lizard eats paper");
    } else {
        alert("Lizard poisons Spock");
    }
}

//If the user chose spock...
else if (choice1 === "spock") {
    if (choice2 === "scissors") {
        alert("Spock vaporizes scissors");
    } else if (choice2 === "rock") {
        alert("Spock vaporizes rock");
    } else if (choice2 === "lizard") {
        alert("Lizard poisons Spock");
    } else {
        alert("Paper disproves Spock");
    }
}
};
compare(userChoice, computerChoice);
