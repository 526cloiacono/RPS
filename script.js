
// start of greeting
let userName = prompt("Hello, What is your name?");

if (userName) {
    document.getElementById('greeting').innerText = `Hello, ${userName}!`;
} else {
    document.getElementById('greeting').innerText = 'Hello stranger!';
}

// start of rps
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "scissors" ||
      userInput === "paper" ||'bomb'
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
        break;
      case 1:
        return "paper";
        break;
      case 2:
        return "scissors";
        break;
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
      return 'congrats You win'
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb')
  
    const computerChoice = getComputerChoice ()
  
    console.log('you threw' + userChoice)
    console.log( ' the computer threw' + computerChoice)
  
  
    console.log(determineWinner(userChoice, computerChoice))
  }
  
  
  playGame()
  
  
  
  
  