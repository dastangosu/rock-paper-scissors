function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getComputerChoice() {
  randomNumber = getRndInteger(1, 4);
  if (randomNumber === 1) {
    return "Rock";
  }
  else if (randomNumber === 2) {
    return "Paper";
  }
  else {
    return "Scissors";
  }
}

console.log(getComputerChoice());