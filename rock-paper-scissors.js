/* BEGIN 1. UNDERSTANDING (Problem Outline and Strategy)

Welcome to Rock Paper Scissors, The Odin Project game!
 The point of this program is to simulate the classic rock,
 paper, scissors game that most played as kids.

 I will be following the 'Programmer Mindset' philosophy
 to problem solving which involves doing 3 main things
 when approaching a problem (and specifically a coding
 problem):

 First: Understand the problem. (I am doing this here in
    this larger introductory comment section);

 Second: Plan (I will do this by outlining more specific
    comments of everything the code needs to do, based
    on my understanding as outlined in this introductory
    comment section)

 Third: Break down (I will do this by translating the parts
    of comments to code that are easiest)

 So far, in learning more about coding, and having a
 background in Japanese-English translation, I have come
 to view programming to be less a matter of "speaking" a
 foreign language so much as translating between human
 logic and computer logic; from human language and desire
 to computer language and execution. So to "solve" a coding
 problem seems to me to require an adequate "translation."

 As for the game of rock-paper-scissors itself:

 The basic rules are simple:
 1. Rock beats scissors
 2. Scissor beats paper
 3. Paper beats rock.

 The extent of this project is to create variables to store
 the inputs from both the player who will be inputting his
 or her choice of rock, scissor, or paper; he or she will
 be playing against a computer (function) that will
 randomly generate a numerical value that will be assigned
 rock, scissor, or paper in a random 1/3 chance ratio.

 Upon the player beating the computer, a simple "Yay!
 You won~!" message will be printed, and upon losing a
 simple "Oh no, the computer won :(" message will be
 printed.

 That sums up the basic understanding of the problem,
 next will be for outlining each step of the code in
 comments as part of phase 2: Planning.*/


 /* BEGIN 2. PLAN (Comment outlining of everything needed)*/


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

 // Create function playerSelection and use the player's entered
 // value of either rock, paper, or scissors. Reject all other entries.
 // Alow the entry of 1 for rock, 2 for paper, and 3 for scissors
 // Create a variable/subfunction that removes the need to have case
 // sensitive typing of rock, paper, or scissors (i.e., a function
 // that will take the player's input and turn it into all lowercase
 // and that is what the main function will be checking against
 // for the true/false statements)
 // Ensure that this function is repeated at the end/start
 // of each new round

 let playerSelection = "";
 let computerSelection = "";


function playerPlay() {

  // put buttons into a node list and loop, take clicked button to return playerChoice value
  const buttons = document.querySelectorAll('button.gameButton');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playerSelection = button.id;
      const playerChoicePar = document.createElement('p');
      playerChoicePar.textContent = "Player Choice: " + playerSelection[0].toUpperCase() + playerSelection.substring(1);
      results.appendChild(playerChoicePar);
      return playerSelection;
    });
  });
}


// Make global values playerScore and computerScore that survive each new round (i.e., not erased but saved globally)
let playerScore = 0;
let computerScore = 0;


// Define function / rule for winning and keeping track of score and determining winner for 5 rounds of game
// Make each round reset the computer choice and get new input from the player.

const startPar = document.createElement('p');

const newGame = document.querySelector('#start');
newGame.addEventListener('click', () => {
  if (startPar.textContent === "Do you choose Rock, Paper, or Scissors?") return;
  else {
    startPar.textContent = "Do you choose Rock, Paper, or Scissors?";
    results.appendChild(startPar);
    for (let i = 0; i < 5; i++) {
      const playerSelection = playerPlay();
      const computerSelection = computerPlay();
      const currentRound = playRound(playerSelection, computerSelection);
      const currentRoundPrint = document.createElement('p');
      currentRoundPrint.textContent = currentRound;
      results.appendChild(currentRoundPrint);
   }
  }


  /* Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and
  computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock" */

const scorePar = document.createElement('p');

function checkPlayerSelection() {
  if (playerSelection !== 'paper' || playerSelection !== 'rock' || playerSelection !== 'scissors') {
    window.setTimeout(checkPlayerSelection, 100);
  } else {
    return true;
  }
}

function playRound(playerSelection, computerSelection) {
  if (checkPlayerSelection() === true) {
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
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
}


/*

// Implement a reset button which clears/resets the game, could also integrate
into New Game button when pressed

  const resestGame = querySelector('#reset');
  resetGame.addEventListener('click', () => {
    document.getElementsByClassName('results').reset();
  });
*/
   // Prints win or lose message based on final score after running 5 rounds of game
    if (playerScore > computerScore) {
       const youWon = document.createElement('p');
       youWon.textContent = "Congratulations! You won the game! :)";
       results.appendChild(youWon);
   } else if (computerScore > playerScore) {
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

const results = document.querySelector('div.results');


// define rock and listens for rock button click then saves rock value to playerSelection
const rock = document.querySelector('#rock');


// define rock and listens for rock button click then saves rock value to playerSelection
const paper = document.querySelector('#paper');


// define rock and listens for rock button click then saves rock value to playerSelection
const scissors = document.querySelector('#scissors');

// Reset playerScore and computerScore back to zero at end of 5 rounds / one game set
playerScore = 0;
computerScore = 0;
