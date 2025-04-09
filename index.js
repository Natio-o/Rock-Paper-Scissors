const score = {
  wins: 0,
  losses: 0,
  ties: 0
};

const buttons = document.querySelectorAll("button");
const AIChoice = document.createElement("p");
document.body.appendChild(AIChoice);

const scoreDisplay = document.createElement("p");
document.body.appendChild(scoreDisplay);

function getComputerChoice() {
  let choiceNum = Math.random();
  let compChoice = "";

  if (choiceNum < 0.33) {
    compChoice = "Rock";
  } else if (choiceNum >= 0.33 && choiceNum <= 0.66) {
    compChoice = "Paper";
  } else {
    compChoice = "Scissors";
  }

  return compChoice;
}

function updateScore() {
  scoreDisplay.textContent = `Your Score ${score.wins} Computer Score ${score.losses} Ties ${score.ties}`;
  if(score.wins == 5){
    scoreDisplay.textContent = 'You win!';
    clearGame()
  } else if(score.losses == 5) {
    scoreDisplay.textContent = 'You lose!';
    clearGame()
  }
}

function clearGame(){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  AIChoice.textContent = '';

}

buttons.forEach(button => {
  button.addEventListener("click", (event) => {
    const targetButton = event.currentTarget;

    if (targetButton.classList.contains("restart")) {
      clearGame();
      scoreDisplay.textContent = `Your Score ${score.wins} Computer Score ${score.losses} Ties ${score.ties}`;
      return;
    }

    const humanChoice = targetButton.classList.contains("rock")
      ? "Rock"
      : targetButton.classList.contains("paper")
      ? "Paper"
      : "Scissors";

    playRound(humanChoice, getComputerChoice());
  });
});

function playRound(humanChoice, compChoice) {
  if (humanChoice === "Rock" && compChoice === "Scissors") {
    AIChoice.textContent = `Computer Chose: ${compChoice}`;
    score.wins += 1;

  } else if (humanChoice === "Rock" && compChoice === "Paper") {
    AIChoice.textContent = `Computer Chose: ${compChoice}`;
    score.losses += 1;

  } else if (humanChoice === "Paper" && compChoice === "Scissors") {
    AIChoice.textContent = `Computer Chose: ${compChoice}`;
    score.losses += 1;
    
  } else if (humanChoice === "Paper" && compChoice === "Rock") {
    AIChoice.textContent = `Computer Chose: ${compChoice}`;
    score.wins += 1;

  } else if (humanChoice === "Scissors" && compChoice === "Rock") {
    AIChoice.textContent = `Computer Chose: ${compChoice}`;
    score.losses += 1;
    
  } else if (humanChoice === "Scissors" && compChoice === "Paper") {
    AIChoice.textContent = `Computer Chose: ${compChoice}`;
    score.wins += 1;
    
  } else if (humanChoice === compChoice) {
    AIChoice.textContent = `Computer Chose: ${compChoice}`;
    score.ties += 1;
  }

  
  updateScore();
}


