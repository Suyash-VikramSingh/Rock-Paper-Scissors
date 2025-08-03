let rock = document.body.querySelector("#rock");
let paper = document.body.querySelector("#paper");
let scissor = document.body.querySelector("#scissors");
let newGame = document.body.querySelector("#newGame");
let quit = document.body.querySelector("#quit");
let count = 0

function pickRandomNumber(n) {
    return Math.floor(Math.random() * n);
}

// possiblities for all the different choices.
let calResult = (p_choice) => {
  let c_choice = pickRandomNumber(3);
  let curr_res;

  if(p_choice === c_choice) curr_res = "draw"
  else if((p_choice+1) % 3 === c_choice) curr_res = "loss";
  else curr_res = "win";

  count++;

  makeChanges(curr_res, c_choice);
}

rock.addEventListener("mousedown", () => {
  rock.classList.add("pulse");
  setTimeout(() => rock.classList.remove("pulse"), 300);
  calResult(0);
});
paper.addEventListener("mousedown", () => {
  paper.classList.add("pulse");
  setTimeout(() => paper.classList.remove("pulse"), 300);
  calResult(1);
});
scissor.addEventListener("mousedown", () => {
  scissor.classList.add("pulse");
  setTimeout(() => scissor.classList.remove("pulse"), 300);
  calResult(2);
});

// for showing changes on the website.
let score = document.body.querySelectorAll(".score");
let line = document.body.querySelector("#pick");
let p_score = 0 , c_score = 0;

function makeChanges(result, c_choice){
  if(result === "loss") {
    line.innerText = "You loss!";
    score[1].innerText = ++c_score;
    line.classList.add("result-loss");
  }
  else if(result === "win"){
    line.innerText = "You win!";
    score[0].innerText = ++p_score;
    line.classList.add("result-win");
  }
  else {
    line.innerText = "Draw!";
    line.classList.add("result-draw");
  }

  setTimeout(() => {
    line.classList.remove("result-win", "result-loss", "result-draw");
  }, 600);
}


// To set new game or quit.
let onNewGame = () => {
  if (count != 0) {
    c_score = p_score = count = 0;
    score[0].innerText = 0;
    score[1].innerText = 0;

    line.innerText = "New Game Start...";
    line.classList.add("newgame-flash");

    setTimeout(() => {
      line.classList.remove("newgame-flash");
      line.innerText = "Pick your move!";
    }, 1000);

    count = 0;
  }
};

newGame.addEventListener("mousedown",onNewGame);