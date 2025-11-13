// Create an array of possible choices
const choices = ["rock", "paper", "scissors"];

//Define score variables for the computer, human, and ties
let tieScore = 0;
let computerScore = 0;
let humanScore = 0;

//Returns a random choice between 'rock', 'paper', or 'scissors'
const getComputerChoice = function () {
  const randomChoiceIndex = Math.trunc(Math.floor(Math.random() * choices.length));
  return choices[randomChoiceIndex];
};

//Returns the player's choice between 'rock', 'paper', or 'scissors'
const getHumanChoice = function () {
  //Prompt the player to enter a choice
  let playerChoice = prompt("Enter your choice:").toLowerCase().trim();

  //Validate input: keep prompting until the player enters a valid choice
  while (!playerChoice || (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors")) {
    playerChoice = prompt("Enter your choice:").toLowerCase().trim();
  }

  return playerChoice;
};

//Handles game logic: determines the winner, logs the result, and updates the scores
const gameLogic = function (computerSelection, humanSelection) {
  if (computerSelection === humanSelection) {
    console.log(`It's a tie`);
    tieScore += 1;
  }
  if (computerSelection === "rock" && humanSelection === "scissors") {
    console.log(`You lose! Rock beats Scissors`);
    computerScore += 1;
  }
  if (computerSelection === "paper" && humanSelection === "rock") {
    console.log(`You lose! Paper beats Rock`);
    computerScore += 1;
  }
  if (computerSelection === "scissors" && humanSelection === "paper") {
    console.log(`You lose! Scissors beats Paper`);
    computerScore += 1;
  }
  if (computerSelection === "scissors" && humanSelection === "rock") {
    console.log(`You win! Rock beats Scissors`);
    humanScore += 1;
  }
  if (computerSelection === "rock" && humanSelection === "paper") {
    console.log(`You win! Paper beats Rock`);
    humanScore += 1;
  }
  if (computerSelection === "paper" && humanSelection === "scissors") {
    console.log(`You win! Scissors beats Paper`);
    humanScore += 1;
  }
};

//Logs the winner of the game
const gameWinner = function () {
  if (computerScore === humanScore) console.log("This is a tie game");
  if (computerScore > humanScore) console.log("You lost the game!");
  if (computerScore < humanScore) console.log("You won the game!");
};

// Retrieves and stores the computer and human choices for a single round
const playRound = function (computerChoice, humanChoice) {
  //Stores the humanChoice and the computerChoice
  const computerSelection = computerChoice();
  const humanSelection = humanChoice();

  // Passes both selections to the gameLogic function to determine and log the result
  gameLogic(computerSelection, humanSelection);
};

//Starts the game
const playGame = function () {
  //Allows 5 rounds per game session - Logic to play 5 rounds
  /*for (let i = 0; i < 5; i++) {
    playRound(getComputerChoice, getHumanChoice);
  }*/

  playRound(getComputerChoice, getHumanChoice);

  //Logs the winner of the game - WINNER
  // gameWinner();

  //Resets game scores
  tieScore = 0;
  computerScore = 0;
  humanScore = 0;
};

//GAMEPLAY

const gameChoiceButtons = document.querySelectorAll(".game__choice-btn");

gameChoiceButtons.forEach(function (playerChoice) {
  playerChoice.addEventListener("click", function (choice) {
    playRound(getComputerChoice, getHumanChoice);
  });
});
