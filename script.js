// Create an array of possible choices
const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

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

// Retrieves and stores the computer and human choices for a single round
const playRound = function (computerChoice, humanChoice) {
  //Stores the humanChoice and the computerChoice
  const computerSelection = computerChoice();
  const humanSelection = humanChoice();
};
