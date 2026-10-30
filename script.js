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
        computerChoice = "stone";
    }
     else if(num_computer === 1){
        computerChoice = "paper";
     }
     else {
        computerChoice = "scissor"
     }
     return computerChoice;
}

/* psuedo code to getHumanChoice
1. make a function getHumanChoice
2. function takes input stone/paper/scissor
3. make a variable num_human.
4. if user inputs stone, store 0 in num_human. 1 for paper and 2 for scissors.
5. returns num_human
*/

function getHumanChoice(){
   let humanChoice = prompt("What's your choice?");
   let num_human;
   if(humanChoice === "stone"){
      num_human=0;
   }
   else if(humanChoice==="paper"){
      num_human= 1;
   }
   else{
      num_human=2;
   }
   return num_human;
}