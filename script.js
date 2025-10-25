// Create an array of possible choices
const choices = ["rock", "paper", "scissors"];

// Returns a random choice between 'rock', 'paper', or 'scissors'
const getComputerChoice = function () {
  const randomChoiceIndex = Math.trunc(Math.floor(Math.random() * choices.length));
  return choices[randomChoiceIndex];
};

// Returns the player's choice between 'rock', 'paper', or 'scissors'
const getHumanChoice = function () {
  //Prompt the player to enter a choice
  let playerChoice = prompt("Enter your choice:").toLowerCase().trim();

  //Validate input: keep prompting until the player enters a valid choice
  while (!playerChoice || (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors")) {
    playerChoice = prompt("Enter your choice:").toLowerCase().trim();
  }

  return playerChoice;
};

// Contains the game rules and logs the result based on both player choices

const gameLogic = function (computerSelection, humanSelection) {
  if (computerSelection === humanSelection) {
    console.log(`It's a tie`);
  }
  if (computerSelection === "rock" && humanSelection === "scissors") {
    console.log(`You lose! Rock beats Scissors`);
  }
  if (computerSelection === "paper" && humanSelection === "rock") {
    console.log(`You lose! Paper beats Rock`);
  }
  if (computerSelection === "scissors" && humanSelection === "paper") {
    console.log(`You lose! Scissors beats Paper`);
  }
  if (computerSelection === "scissors" && humanSelection === "rock") {
    console.log(`You win! Rock beats Scissors`);
  }
  if (computerSelection === "rock" && humanSelection === "paper") {
    console.log(`You win! Paper beats Rock`);
  }
  if (computerSelection === "paper" && humanSelection === "scissors") {
    console.log(`You win! Scissors beats Paper`);
  }
};

// Retrieves and stores the computer and human choices for a single round
const playRound = function (computerChoice, humanChoice) {
  //Stores the humanChoice and the computerChoice
  const computerSelection = computerChoice();
  const humanSelection = humanChoice();

  // Passes both selections to the gameLogic function to determine and log the result
  gameLogic(computerSelection, humanSelection);
};
