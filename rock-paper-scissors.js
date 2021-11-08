// Create function computerPlay and use the stored random
// value to determine rock, paper, or scissors.
// Ensure that this function is repeated at the end/start
// of each new round so that the computer always has a
// different value (so game doesn't suck/isn't predictable every time)
function computerPlay() {
   const gameArray = ['Rock', 'Paper', 'Scissors'];
   const random = Math.floor(Math.random() * gameArray.length);
   return gameArray[random];
}


const results = document.querySelector('div.results');


// define rock and listens for rock button click then saves rock value to playerSelection
const rock = document.querySelector('#rock');


// define rock and listens for rock button click then saves rock value to playerSelection
const paper = document.querySelector('#paper');


// define rock and listens for rock button click then saves rock value to playerSelection
const scissors = document.querySelector('#scissors');


const scorePar = document.createElement('p');


// Reset button which clears/resets the game, for now just resets score to 0



// function to call playRound function with correct playerSelection on button click
/*
Create three buttons, one for each selection. Add an event listener to the buttons
that calls your playRound function with the correct playerSelection every time a
button is clicked. (you can keep the console.logs for this step)
*/


const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
let computerSelection = computerPlay();


rockButton.addEventListener('click', () => {
  playRound('Rock', computerSelection);
});

paperButton.addEventListener('click', () => {
  playRound('Paper', computerSelection);
});

scissorsButton.addEventListener('click', () => {
  playRound('Scissors', computerSelection);
});

// Make global values playerScore and computerScore that survive each new round (i.e., not erased but saved globally)
let playerScore = 0;
let computerScore = 0;


// Define function / rule for winning and keeping track of score and determining winner for 5 rounds of game
// Make each round reset the computer choice and get new input from the player.

const startPar = document.createElement('p');


function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  if (playerScore >= 5) {
    winScore();
  } else if (computerScore >= 5) {
    loseScore();
  } else if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
      const drawPar = document.createElement('p');
      drawPar.textContent = "It's a draw!";
      results.appendChild(drawPar);
      playerScore;
      computerScore;
      scorePar.textContent = "Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection
      + ". " + "Your Score: " + playerScore + ". " + "Computer Score: " + computerScore;
      results.appendChild(scorePar);
      } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors") {
      const scissorsLose = document.createElement('p');
      scissorsLose.textContent = "Rock beats scissors! You lose :(";
      results.appendChild(scissorsLose);
      playerScore;
      computerScore = computerScore + 1;
      scorePar.textContent = "Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection
      + ". " + "Your Score: " + playerScore + ". " + "Computer Score: " + computerScore;
      results.appendChild(scorePar);
    } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "rock") {
      const rockWin = document.createElement('p');
      rockWin.textContent = "Rock beats scissors! You win :D";
      results.appendChild(rockWin);
      playerScore = playerScore + 1;
      computerScore;
      scorePar.textContent = "Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection
      + ". " + "Your Score: " + playerScore + ". " + "Computer Score: " + computerScore;
      results.appendChild(scorePar);
    } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper") {
      const paperLose = document.createElement('p');
      paperLose.textContent = "Scissors beats paper! You lose :(";
      results.appendChild(paperLose);
      playerScore;
      computerScore = computerScore + 1;
      scorePar.textContent = "Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection
      + ". " + "Your Score: " + playerScore + ". " + "Computer Score: " + computerScore;
      results.appendChild(scorePar);
    } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissors") {
      const scissorsWin = document.createElement('p');
      scissorsWin.textContent = "Scissors beats paper! You win :D";
      results.appendChild(scissorsWin);
      playerScore = playerScore + 1;
      computerScore;
      scorePar.textContent = "Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection
      + ". " + "Your Score: " + playerScore + ". " + "Computer Score: " + computerScore;
      results.appendChild(scorePar);
    } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
      const rockLose = document.createElement('p');
      rockLose.textContent = "Paper beats rock! You lose :(";
      results.appendChild(rockLose);
      playerScore;
      computerScore = computerScore + 1;
      scorePar.textContent = "Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection
      + ". " + "Your Score: " + playerScore + ". " + "Computer Score: " + computerScore;
      results.appendChild(scorePar);
    } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "paper") {
      const paperWin = document.createElement('p');
      paperWin.textContent = "Paper beats rock! You win :D";
      results.appendChild(paperWin);
      playerScore = playerScore + 1;
      computerScore;
      scorePar.textContent = "Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection
      + ". " + "Your Score: " + playerScore + ". " + "Computer Score: " + computerScore;
      results.appendChild(scorePar);
    } else {
      const unknownPar = document.createElement('p');
      unknownPar.textContent = "I'm not sure what, but something went wrong :(";
      results.appendChild(unknownPar);
    }
}

function winScore() {
  const youWon = document.createElement('p');
  youWon.textContent = "Congratulations! You won the game! :)";
  results.appendChild(youWon);
}

function loseScore() {
  const youLost = document.createElement('p');
  youLost.textContent = "The computer won... you lose the game :(";
  results.appendChild(youLost);
}

game();

/*
   // Prints win or lose message based on final score after running 5 rounds of game
function checkGameStatus
    if (playerScore >= 5) {
       const youWon = document.createElement('p');
       youWon.textContent = "Congratulations! You won the game! :)";
       results.appendChild(youWon);
   } else if (computerScore >= 5) {
       const youLost = document.createElement('p');
       youLost.textContent = "The computer won... you lose the game :(";
       results.appendChild(youLost);
   } else if (computerScore === playerScore) {
       const tieGame = document.createElement('p');
       tieGame.textContent = "Tie game! :o";
       results.appendChild(tieGame);
   } else {
       const errorPar = document.createElement('p');
       errorPar.textContent = "An unforeseen error has occurred, please do 15 pushups and do 5 deep breaths, then reload the program.";
       results.appendChild(errorPar);
   }
  });
*/
