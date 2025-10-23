// Returns a random choice between 'rock', 'paper', or 'scissors'
const getComputerChoice = function () {
  // Create an array of possible choices
  const choices = ["rock", "paper", "scissors"];

  const randomChoiceIndex = Math.trunc(Math.floor(Math.random() * choices.length));
  return choices[randomChoiceIndex];
};
