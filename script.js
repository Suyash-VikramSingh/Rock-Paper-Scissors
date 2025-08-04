let selectors = document.body.querySelectorAll(".selectors");
let score = document.body.querySelectorAll(".score");
let display = document.body.querySelector("#display");
let newGame = document.body.querySelector("#newGame");
let quit = document.body.querySelector("#quit");

let count = 0

let n = selectors.length;

const moves = ['rock', 'paper', 'scissors'];

let p_score = 0 , c_score = 0;

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
    score[1].innerText = ++c_score;
    display.classList.add("result-loss");
  }
  else if(result === "win"){
    display.innerText = "You win!";
    score[0].innerText = ++p_score;
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

function action(p_choice){
  const c_choice = pickRandomNumber();

  const result = getResult(p_choice, c_choice);

  selectors[p_choice].classList.add("pulse");
  setTimeout(() => selectors[p_choice].classList.remove("pulse"), 300);

  makeChanges(result);

  count++;
}

for(let i = 0; i < n; i++){
  selector = selectors[i];
  selector.addEventListener("mousedown", () => action(i));
}

// To set new game or quit.
let onNewGame = () => {
  if (count != 0) {
    c_score = p_score = count = 0;
    score[0].innerText = 0;
    score[1].innerText = 0;

    display.innerText = "New Game Start...";
    display.classList.add("newgame-flash");

    setTimeout(() => {
      display.classList.remove("newgame-flash");
      display.innerText = "Pick your move!";
    }, 1000);

    count = 0;
  }
};

newGame.addEventListener("mousedown",onNewGame);