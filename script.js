let userscore = 0;
let computerscore = 0;

let msgPara = document.getElementById("play-msg");
let compScore_board=document.getElementById('comp-score');
let userScore_board=document.getElementById('user-score');
let startButton=document.getElementById('start-button');
function computerTurn() {
  const options = ["rock", "paper", "scissor"];
  const indx = Math.floor(Math.random() * 3);
  return options[indx];
}

let turns = document.querySelectorAll(".turn");
turns.forEach((turn) => {
  turn.addEventListener("click", () => {
    const userTurn = turn.getAttribute("id");
    startGame(userTurn);
  });
});

function startGame(userTurn) {
  const compTurn = computerTurn();
  if (userTurn === compTurn) {
    msgPara.innerText = "Draw";
    startButton.style.backgroundColor='rgb(12, 23, 23)';
  } else {
    if (
      (userTurn == "rock" && compTurn == "paper") ||
      (userTurn == "paper" && compTurn == "scissor") ||
      (userTurn == "scissor" && compTurn == "rock")
    ) {
      //couter choice should be paper or scissor
      msgPara.innerText=`You Lose ${compTurn} beats ${userTurn}`;
      computerscore++;
      compScore_board.innerText=computerscore;
      startButton.style.backgroundColor='red';
    }else{
        msgPara.innerText=`You Win ${userTurn} beats ${compTurn}`;
        userscore++;
        userScore_board.innerText=userscore;
      startButton.style.backgroundColor='green';
    }
  }
}
