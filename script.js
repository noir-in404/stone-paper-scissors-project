/* 
Step 1- Plan or pseudocode your solution.
Step 2- Write the code.
Step 3- Test your code to make sure it works.
*/

/* psuedo code to getComputerChoice
1. make a function named getComputerChoice
2. write a function which returns integer between 0,1,2 radomly.
3. make a variable named computerChoice.
4. if function returns 0. store "stone" in computerChoice, 1 for paper and 2 for scissors.
5. returns the computerChoice;
*/

function getComputerChoice(){
    let num_computer = Math.floor(Math.random()*3);
    let computerChoice;
    if(num_computer === 0){
        computerSelect = "stone";
    }
     else if(num_computer === 1){
        computerSelect = "paper";
     }
     else {
        computerSelect = "scissor"
     }
     return computerSelect;
}

/* psuedo code to getHumanChoice
1. make a function getHumanChoice
2. function takes input stone/paper/scissor
3. returns returns humanChoice
*/

function getHumanChoice(){
   let humanSelect = prompt("What's your choice?");
   return humanSelect;
}

// setting the score to zero as default
let computerScore=0;
let humanScore=0

/* psuedo code for playing 1 round
1. make a function named playRound;
2. make 2 parameters in playRound for 2 arguments, humanChoice and computerChoice.
3. make the human choice parameter case-insensitive.
4. write conditional cases for winning/losing or tie.
5. increment score of a winner and display winning/losing/tie message
*/

function playRound(humanChoice, computerChoice){
   humanChoice = humanChoice.toLowerCase();

   if(humanChoice === computerChoice){
      console.log(`You choose: ${humanChoice}`);
      console.log(`Computer choose: ${computerChoice}`);
      console.log("It's a tie");
   }
   else if ((humanChoice==="paper" && computerChoice==="stone") || 
(humanChoice==="stone" && computerChoice==="scissor") ||
(humanChoice==="scissor" && computerChoice==="paper")){
   console.log(`You choose: ${humanChoice}`);
   console.log(`Computer choose: ${computerChoice}`);
   console.log(`You win! ${humanChoice} beats ${computerChoice}`)
   humanScore++;
   }
   else{
      console.log(`You choose: ${humanChoice}`);
      console.log(`Computer choose: ${computerChoice}`);
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
      computerScore++;
   }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);