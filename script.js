//greeting
let userName = prompt("Hello, What is your name?");

if (userName) {
  document.getElementById('greeting').innerText = `Hello, ${userName}!`;
} else {
  document.getElementById('greeting').innerText = 'Hello stranger!';
}

// Strt of Rps
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "scissors" ||
      userInput === "paper" ||
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      console.log("Error, Please Try Again!");
    }
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'This Game IS A Tie!';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return "Sorry, computer won!";
      } else {
        return "Congrats you won";
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return "You Lose";
      } else {
        return "You won";
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return "You Lose";
      } else {
        return "You won";
      }
    }
    if(userChoice === 'bomb'){
      return 'Congrats, You win!';
    }
  };
  
  const playGame = (userChoice) => {
// get user choice
    const validUserChoice = getUserChoice(userChoice);
  
    //get choice from comp
    const computerChoice = getComputerChoice();
//display choice
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
      <p>You chose: ${validUserChoice}</p>
      <p>The computer chose: ${computerChoice}</p>
      <p>${determineWinner(validUserChoice, computerChoice)}</p>
    `;
  };
  