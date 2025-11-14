// Create an array of possible choices
const choices = ["rock", "paper", "scissors"];

//Define score variables for the computer, human, and ties
// let tieScore = 0;
let computerScore = 0;
let humanScore = 0;
let result = "";
let round = 0;
let gameStart = false;

//ELEMENTS
const gameStartButton = document.querySelector(".game__start-button");

const playerChoiceButtons = document.querySelectorAll(".game__choice-btn");

const gameResult = document.querySelector(".game__result-message");

const gameRoundNumber = document.querySelector(".game__round-number");

const userScore = document.querySelector(".user-score");

const compScore = document.querySelector(".computer-score");

//------------------------------------------------------------------------------

userScore.textContent = `Player: ${humanScore}`;
compScore.textContent = `Computer: ${computerScore}`;
gameRoundNumber.textContent = `Round: ${round}`;

//Returns a random choice between 'rock', 'paper', or 'scissors'
const getComputerChoice = function () {
  const randomChoiceIndex = Math.trunc(Math.floor(Math.random() * choices.length));
  return choices[randomChoiceIndex];
};

//Handles game logic: determines the winner, logs the result, and updates the scores
const gameLogic = function (computerSelection, humanSelection) {
  if (computerSelection === humanSelection) {
    result = `It's a tie round`;
    computerScore += 1;
    humanScore += 1;
  }
  if (computerSelection === "rock" && humanSelection === "scissors") {
    result = `You lose the round! Rock beats Scissors`;
    computerScore += 1;
  }
  if (computerSelection === "paper" && humanSelection === "rock") {
    result = `You lose the round! Paper beats Rock`;

    computerScore += 1;
  }
  if (computerSelection === "scissors" && humanSelection === "paper") {
    result = `You lose the round! Scissors beats Paper`;
    computerScore += 1;
  }
  if (computerSelection === "scissors" && humanSelection === "rock") {
    result = `You win the round! Rock beats Scissors`;
    humanScore += 1;
  }
  if (computerSelection === "rock" && humanSelection === "paper") {
    result = `You win the round! Paper beats Rock`;
    humanScore += 1;
  }
  if (computerSelection === "paper" && humanSelection === "scissors") {
    result = `You win the round! Scissors beats Paper`;
    humanScore += 1;
  }

  userScore.textContent = `Player score: ${humanScore}`;
  compScore.textContent = `Computer score: ${computerScore}`;
  gameRoundNumber.textContent = `Round: ${round}`;

  gameResult.textContent = result;
};

//Logs the winner of the game
const gameWinner = function () {
  if (computerScore === humanScore) {
    result = "This is a tie game. Start a new one!";
  } else if (computerScore > humanScore) {
    result = "You lost the game! Start a new one!";
  } else {
    result = "You won the game! Start a new one!";
  }

  gameResult.textContent = result;
};

// Retrieves and stores the computer and human choices for a single round
const playRound = function (computerChoice, humanChoice) {
  //Stores the humanChoice and the computerChoice
  const computerSelection = computerChoice();
  const humanSelection = humanChoice;

  // Passes both selections to the gameLogic function to determine and log the result
  gameLogic(computerSelection, humanSelection);
};

//Starts the game passing the getHumanChoice on click of any of the choices
const playGame = function (humanChoice) {
  if (round < 5) {
    round += 1;
    playRound(getComputerChoice, humanChoice);
  }

  if (round === 5) {
    gameWinner();
    gameStart = false;
  }
};

//GAMEPLAY

playerChoiceButtons.forEach(function (playerChoice) {
  playerChoice.addEventListener("click", function (event) {
    if (!gameStart) return;

    //Get human choice on click of any of the choice button
    let getHumanChoice = event.target.innerText.toLowerCase();

    playGame(getHumanChoice);
  });
});

//START GAME
gameStartButton.addEventListener("click", function () {
  // tieScore = 0;
  computerScore = 0;
  humanScore = 0;
  round = 0;
  gameStart = true;

  ////////////////
  userScore.textContent = `Player score: ${humanScore}`;
  compScore.textContent = `Computer score: ${computerScore}`;
  gameRoundNumber.textContent = round;
  //////////////////////
  gameResult.textContent = "Make a choice";
});
