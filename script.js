
const stoneBtn = document.querySelector("#stoneBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorBtn = document.querySelector("#scissorBtn");
const ul = document.querySelector("#btnList");
const body = document.querySelector("body");

const div = document.createElement("div");
const score = document.createElement("span");
const announce = document.createElement("div");
body.appendChild(div);
body.appendChild(score);
body.appendChild(announce);

function getComputerChoice() {
  let num_computer = Math.floor(Math.random() * 3);
  let computerSelect;
  if (num_computer === 0) {
    computerSelect = "stone";
  } else if (num_computer === 1) {
    computerSelect = "paper";
  } else {
    computerSelect = "scissor";
  }
  return computerSelect;
}


ul.addEventListener("click", (event) => {
   let target = event.target;
   
   if(target.id === "stoneBtn"){
      humanSelect = "stone";
   } else if (target.id === "paperBtn"){
      humanSelect = "paper";
   } else if (target.id === "scissorBtn"){
      humanSelect = "scissor";
   }
   playRound(humanSelect, getComputerChoice());
})


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

   let result;

   if (humanChoice === computerChoice) {
    result = `It's a tie, you both choose ${humanChoice}`;
   } else if (
    (humanChoice === "paper" && computerChoice === "stone") ||
    (humanChoice === "stone" && computerChoice === "scissor") ||
    (humanChoice === "scissor" && computerChoice === "paper")
   ) {
    result = (`You win! your ${humanChoice} beats computer's ${computerChoice}`);
    humanScore = humanScore + 1;
   } else {
      result = `You lose! computer's ${computerChoice} beats your ${humanChoice}`;
      computerScore = computerScore + 1;
   }

   
   div.textContent = result;
   score.innerText = `Your score : ${humanScore}
      Computer's score : ${computerScore}`;
   
   if (humanScore === 5) {
      announce.textContent = `You hit 5 scores. you WON the game!`;
   } else if (computerScore === 5) {
      announce.textContent = `Computer hit 5 scores. you LOSE the game!`;
   }


}


