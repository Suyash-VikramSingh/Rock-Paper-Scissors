let selectors = document.body.querySelectorAll(".selectors");
let score = document.body.querySelectorAll(".score");
let display = document.body.querySelector("#display");
let newGame = document.body.querySelector("#newGame");
let quit = document.body.querySelector("#quit");

let gameStarted = false;
let gameOver = false;

let n = selectors.length;

const moves = ['rock', 'paper', 'scissors'];

let playerScore = 0, compScore  = 0;

function pickRandomNumber() {
    return Math.floor(Math.random() * n);
}

function getResult(p, c) {
  if (p === c) return "draw";
  else if ((p + 1) % 3 === c) return "loss";
  else return "win";
}

function makeChanges(result){
  if(result === "loss") {
    display.innerText = "You loss!";
    score[1].innerText = ++compScore ;
    display.classList.add("result-loss");
  }
  else if(result === "win"){
    display.innerText = "You win!";
    score[0].innerText = ++playerScore ;
    display.classList.add("result-win");
  }
  else {
    display.innerText = "Draw!";
    display.classList.add("result-draw");
  }

  setTimeout(() => {
    display.classList.remove("result-win", "result-loss", "result-draw");
  }, 600);
}

function action(playerChoice){
  if(gameOver) return;

  const compChoice = pickRandomNumber();
  const result = getResult(playerChoice, compChoice);

  selectors[playerChoice].classList.add("pulse");
  setTimeout(() => selectors[playerChoice].classList.remove("pulse"), 300);

  makeChanges(result);

  gameStarted = true;

  if(playerScore === 3 || compScore === 3){
    gameOver = true;
    display.innerHTML = playerScore === 3 ? "You won the game!" : "Computer wins the game!";

    display.classList.add("game-over-text", "bounce");
    setTimeout(() => display.classList.remove("bounce"), 400);
  }
}

for(let i = 0; i < n; i++){
  selector = selectors[i];
  selector.addEventListener("click", () => action(i));
}

// To set new game or quit.
let onNewGame = () => {
  if (gameStarted) {
    compScore  = playerScore = 0;
    gameStarted = false;
    gameOver = false;

    score[0].innerText = 0;
    score[1].innerText = 0;

    display.innerText = "New Game Start...";
    display.classList.add("newgame-flash");

    setTimeout(() => {
      display.classList.remove("newgame-flash");
      display.innerText = "Pick your move!";
    }, 1000);

    gameStarted = false;
  }
};

newGame.addEventListener("click",onNewGame);