// thus ask for users name
let userName = prompt("Hello, What is your name?");

let greeting = document.getElementById('greeting');

// display for greeting
userName 
? document.getElementById('greeting').innerText=`Hello, ${userName}!` 
: document.getElementById('greeting').innerText='Hello stranger!'

// starts socre at 0
let userScore = 0, computerScore = 0;

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: return "rock"
        case 1: return "paper"
        case 2: return "scissors"
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'This Game IS A Tie!'
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            computerScore++
            return "Sorry, computer won!"
        } else {
            return "Congrats you won"
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore++
            return "You Lose"
        } else {
            return "You won"
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++
            return "You Lose"
        } else {
            return "You won"
        }
    }
};

const playGame = (userChoice) => {

    const computerChoice = getComputerChoice();

    // Determine winner
    const result = determineWinner(userChoice, computerChoice);

    // Update score 
    if (result.includes('won')) {
        userScore++;
    } else if (result.includes('computer won')) {
        computerScore++;
    }

    // Display choices and result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
      <p>You chose: ${userChoice}</p>
      <p>The computer chose: ${computerChoice}</p>
      <p>${result}</p>
      <p>Score: ${userName || 'Player'}: ${userScore}, Computer: ${computerScore}</p>
    `
    // Check if there is a winner
    checkWinner();
}

//restart after winner
const checkWinner = () => {
  if (userScore === 3) {
      alert(`${userName || 'Player'} wins the game!`)
      userScore = 0
      computerScore = 0
  } else if (computerScore === 3) {
      alert("Computer wins the game!")
      userScore = 0
      computerScore = 0
  }
}

// start of reset button
const resetGame = () =>{
    userScore = 0
    computerScore = 0
    document.getElementById('result').innerHtml = ''
    resultDiv()
    checkWinner()
}
// Event listeners 
document.getElementById('rockBtn').addEventListener('click', () => playGame('rock'));
document.getElementById('paperBtn').addEventListener('click', () => playGame('paper'));
document.getElementById('scissorsBtn').addEventListener('click', () => playGame('scissors'));
document.getElementById('resetGameBtn').addEventListener('click',resetGame);