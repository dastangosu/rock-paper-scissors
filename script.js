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
    switch(computerSelection) {
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
    switch(computerSelection) {
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
    switch(computerSelection) {
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

function game() {
  let playerScore = 0;
  let compScore = 0;
  for(let i = 0; i<5; i++) {
    if(playerScore === 3) {
      console.log("Player Wins the Game!") ;
      return;
    }
    else if (compScore ===3) {
      console.log("Computer Wins the Game!");
      return;
    }
    else {
      let playerSelection = prompt("Choose a hand: rock, paper, or scissors?").toLowerCase()
      while(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        playerSelection = prompt("Incorrect input. Choose a hand: rock, paper, or scissors?").toLowerCase()
      }
      let computerSelection = getComputerChoice();
      let roundResult = playRound(computerSelection,playerSelection);
      if(roundResult === "player") {
        console.log("Player wins the round!")
        playerScore++;
      }
      else if (roundResult === "comp") {
        console.log("Computer wins the round!")
        compScore++;
      }
      else {
        console.log("Draw round!")
      }
    }
  }
  if(compScore>playerScore) {
    console.log("Computer Wins the Game!")
  }
  else if (compScore<playerScore) {
    console.log("Player Wins the Game!")
  }
  else {
    console.log("Draw Game!")
  }
}
game();


