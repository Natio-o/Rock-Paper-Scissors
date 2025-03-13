let humanScore = 0;
let compScore = 0;

function getComputerChoice() {
  let choiceNum = Math.random();
  let compChoice = "Rock";

  if (choiceNum < 0.33) {
    compChoice = "Rock";
  } else if (choiceNum >= 0.33 && choiceNum <= 0.66) {
    compChoice = "Paper";
  } else {
    compChoice = "Scissors";
  }

  return compChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Choose your hand?\n1. Rock\n2. Paper\n3. Scissors");
    humanChoice = humanChoice.toLowerCase().trim();
  if (humanChoice === "rock") {
    return "Rock";
  } else if (humanChoice === "paper") {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(humanChoice, compChoice) {
  if (humanChoice === "Rock" && compChoice === "Scissors") {
    console.log("You choose Rock");
    console.log("Computer chooses Scissors");
    console.log("You win!");
    humanScore++;
  } else if (humanChoice === "Rock" && compChoice === "Paper") {
    console.log("You choose Rock");
    console.log("Computer chooses Paper");
    console.log("You lose!");
    compScore++;
  } else if (humanChoice === "Paper" && compChoice === "Scissors") {
    console.log("You choose Paper");
    console.log("Computer chooses Scissors");
    console.log("You lose!");
    compScore++;
  } else if (humanChoice === "Paper" && compChoice === "Rock") {
    console.log("You choose Paper");
    console.log("Computer chooses Rock");
    console.log("You win!");
    humanScore++;
  } else if (humanChoice === "Scissors" && compChoice === "Rock") {
    console.log("You choose Scissors");
    console.log("Computer chooses Rock");
    console.log("You lose!");
    compScore++;
  } else if (humanChoice === "Scissors" && compChoice === "Paper") {
    console.log("You choose Scissors");
    console.log("Computer chooses Paper");
    console.log("You win!");
    humanScore++;
  } else if (humanChoice === compChoice) {
    console.log(`You choose ${humanChoice}`);
    console.log(`Computer chooses ${compChoice}`);
    console.log("Draw");
  }
  console.log(`Score You: ${humanScore} Computer: ${compScore}`);
}

function playGame(){
  for(i=0; i<=4; i++){
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore > compScore) {
    console.log(`You have won the game ${humanScore} - ${compScore}`);
  } else if (humanScore < compScore) {
    console.log(`You have lost the game ${humanScore} - ${compScore}`);
  } else {
    console.log(`The game is a draw ${humanScore} - ${compScore}`);
  }
}

playGame();z