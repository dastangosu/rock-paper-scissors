function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getComputerChoice() {
  let randomNumber = getRndInteger(1, 4);
  if (randomNumber === 1) {
    return "rock";
  }
  else if (randomNumber === 2) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

function playRound(computerSelection, playerSelection) {

  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "rock":
        return "draw";
        break;
      case "paper":
        return "comp";
        break;
      case "scissors":
        return "player"
        break;
    }
  }
  else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "rock":
        return "player";
        break;
      case "paper":
        return "draw";
        break;
      case "scissors":
        return "comp"
        break;
    }
  }
  else {
    switch (computerSelection) {
      case "rock":
        return "comp";
        break;
      case "paper":
        return "player";
        break;
      case "scissors":
        return "draw"
        break;
    }
  }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const player = document.querySelector('#player p');
const computer = document.querySelector('#computer p');
const playerSelection = document.querySelector('#player .selection');
const compSelection = document.querySelector('#computer .selection');

let playerScore = 0;
let compScore = 0;
let gameFinished = false;
let gameWinner;

function announceWinner (winner) {
  setTimeout(function () {
    if (confirm(winner + ' Wins the Game!')) {
      restartGame();
    }
  }, 0)
}
function restartGame() {
  playerScore = 0;
  compScore = 0;
  gameFinished=false;
  player.textContent = 'Player: ' + playerScore;
  computer.textContent = 'Computer: ' + compScore;
  compSelection.textContent = '';
  playerSelection.textContent = '';
}
function evaluateRound(roundWinner) {
  if (!gameFinished) {
    if (roundWinner === "player") {
      playerScore++;
      player.textContent = 'Player: ' + playerScore;
      console.log('Player Wins the Round');
      if (playerScore === 5) {
        gameFinished = true;
        gameWinner = 'Player';
        announceWinner(gameWinner);
        console.log('Player Wins the Game')
      }
    }
    else if (roundWinner === "comp") {
      compScore++;
      computer.textContent = 'Computer: ' + compScore;
      console.log('Computer Wins the Round');
      if (compScore === 5) {
        gameFinished = true;
        gameWinner = 'Computer';
        announceWinner(gameWinner);
        console.log('Computer Wins the Game')
      }
    }
    else {
      console.log('Draw Round!')
    }
  }
  else {
    announceWinner(gameWinner);
  }
}
function convertCompSelection(selection) {
  if(selection === 'rock') {
    return '👊';
  }
  else if(selection === 'paper') {
    return '🖐';
  }
  else {
    return '✌';
  }
}

function game() {
  let roundResult;
  rock.addEventListener('click', function () {
    let computerChoice = getComputerChoice();
    playerSelection.textContent = '👊';
    compSelection.textContent = convertCompSelection(computerChoice);
    roundResult = playRound(computerChoice, 'rock');
    evaluateRound(roundResult);

  });
  paper.addEventListener('click', function () {
    let computerChoice = getComputerChoice();
    playerSelection.textContent = '🖐';
    compSelection.textContent = convertCompSelection(computerChoice);
    roundResult = playRound(computerChoice, 'paper');
    evaluateRound(roundResult);
  });
  scissors.addEventListener('click', function () {
    let computerChoice = getComputerChoice();
    playerSelection.textContent = '✌';
    compSelection.textContent = convertCompSelection(computerChoice);
    roundResult = playRound(computerChoice, 'scissors');
    evaluateRound(roundResult);
  });
}

game();



