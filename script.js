

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


function playRound(humanChoice, computerChoice) {

   let humanScore = 0;
   let computerScore = 0;
   
  if (humanChoice === computerChoice) {
    console.log(`You choose: ${humanChoice}`);
    console.log(`Computer choose: ${computerChoice}`);
    console.log("It's a tie, try again");
  } else if (
    (humanChoice === "paper" && computerChoice === "stone") ||
    (humanChoice === "stone" && computerChoice === "scissor") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    console.log(`You choose: ${humanChoice}`);
    console.log(`Computer choose: ${computerChoice}`);
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore = humanScore + 1;
  } else {
    console.log(`You choose: ${humanChoice}`);
    console.log(`Computer choose: ${computerChoice}`);
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore = computerScore + 1;
  }
}

const stoneBtn = document.querySelector("#stoneBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorBtn = document.querySelector("#scissorBtn");
const ul = document.querySelector("#btnList");

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
