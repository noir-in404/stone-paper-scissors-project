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
*/

function getComputerChoice(){
    let temp = Math.floor(Math.random()*3);
    let computerChoice;
    if(temp === 0){
        computerChoice = "stone";
    }
     else if(temp === 1){
        computerChoice = "paper";
     }
     else {
        computerChoice = "scissor"
     }
}
