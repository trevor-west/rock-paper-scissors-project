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

function playerPlay() {
   console.log ("Do you choose 'Rock' (1), 'Paper' (2), or 'Scissors' (3)?");
   let playerChoice = prompt("Do you choose 'Rock' (1), 'Paper' (2), or 'Scissors' (3)?");
   if (playerChoice.toLowerCase() === "rock" || parseInt(playerChoice) === 1) {
      playerChoice = "Rock";
   } else if (playerChoice.toLowerCase() === "paper" || parseInt(playerChoice) === 2) {
      playerChoice = "Paper";
   }
   else if (playerChoice.toLowerCase() === "scissors" || parseInt(playerChoice) === 3) {
      playerChoice = "Scissors";
   }
   else if (playerChoice.toLowerCase() !== "rock" || playerChoice.toLowerCase() !== "scissors" ||
         playerChoice.toLowerCase() !== "paper" || parseInt(playerChoice) !== 1 ||
         parseInt(playerChoice) !== 2 || parseInt(playerChoice) !== 3) {
      alert("Please try to enter your value again :)")
      playerSelection();
   }
   else {
      console.log("Not sure what's going on, hold on to yer butts ;)")
   }
   return playerChoice;
}


/* Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and
computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock" */

function playRound(playerSelection, computerSelection) {
   if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
      console.log("It's a draw!");
      playerScore;
      computerScore;
      return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection
      + ". " + "Your Score: " + playerScore + ". " + "Computer Score: " + computerScore);
   } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors") {
      console.log("Rock beats scissors! You lose :(");
      playerScore;
      computerScore = computerScore + 1;
      return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection
      + ". " + "Your Score: " + playerScore + ". " + "Computer Score: " + computerScore);
   } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "rock") {
      console.log("Rock beats scissors! You win :D");
      playerScore = playerScore + 1;
      computerScore;
      return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection
      + ". " + "Your Score: " + playerScore + ". " + "Computer Score: " + computerScore);
   } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper") {
      console.log("Scissors beats paper! You lose :(");
      playerScore;
      computerScore = computerScore + 1;
      return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection
      + ". " + "Your Score: " + playerScore + ". " + "Computer Score: " + computerScore);
   } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissors") {
      console.log("Scissors beats paper! You win :D");
      playerScore = playerScore + 1;
      computerScore;
      return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection
      + ". " + "Your Score: " + playerScore + ". " + "Computer Score: " + computerScore);
   } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
      console.log("Paper beats rock! You lose :(");
      playerScore;
      computerScore = computerScore + 1;
      return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection
      + ". " + "Your Score: " + playerScore + ". " + "Computer Score: " + computerScore);
   } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "paper") {
      console.log("Paper beats rock! You win :D");
      playerScore = playerScore + 1;
      computerScore;
      return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection
      + ". " + "Your Score: " + playerScore + ". " + "Computer Score: " + computerScore);
   } else {
      console.log("I'm not sure what, but something went wrong :(");
   }
}

// Make global values playerScore and computerScore that survive each new round (i.e., not erased but saved globally)
let playerScore = 0;
let computerScore = 0;


// Define function / rule for winning and keeping track of score and determining winner for 5 rounds of game
// Make each round reset the computer choice and get new input from the player.

/*
function game() {
 for (let i = 0; i < 5; i++) {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    const currentRound = playRound(playerSelection, computerSelection);
    console.log(currentRound);
 }
*/

let playerSelection = "";
let computerSelection = "";

// define rock and listens for rock button click then saves rock value to playerSelection
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  playerSelection = "rock";
  console.log(playerSelection);
});

// define rock and listens for rock button click then saves rock value to playerSelection
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  playerSelection = "paper";
  console.log(playerSelection);
});

// define rock and listens for rock button click then saves rock value to playerSelection
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  playerSelection = "scissors";
  console.log(playerSelection);
});


/*
document.getElementById('paper').addEventListener('click', function(e){

});
document.getElementById('scissors').addEventListener('click', function(e){

});
*/



// Prints win or lose message based on final score after running 5 rounds of game
 if (playerScore > computerScore) {
   console.log("Congratulations! You won the game! :)");
} else if (computerScore > playerScore) {
   console.log("The computer won... you lose the game :(");
} else if (computerScore === playerScore) {
   console.log("Tie game! :o");
} else {
   console.log("An unforeseen error has occurred, please do 15 pushups and do 5 deep breaths, then reload the program.");
}
// Reset playerScore and computerScore back to zero at end of 5 rounds / one game set
playerScore = 0;
computerScore = 0;
