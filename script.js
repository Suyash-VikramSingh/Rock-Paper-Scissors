let rock = document.body.querySelector("#rock");
let paper = document.body.querySelector("#paper");
let scissor = document.body.querySelector("#scissors");
let newGame = document.body.querySelector("#newGame");
let quit = document.body.querySelector("#quit");
let count = 0

const numbers = [1, 2, 3];

// Function to pick a random number from the array
function pickRandomNumber(numbers) {
    // Generate a random index within the range of the array length
    const randomIndex = Math.floor(Math.random() * numbers.length);
    // Return the number at the random index
    return numbers[randomIndex];
}

// possiblities for all the different choices.
let choice, stat, selection;

let onrock = () => {
    choice = pickRandomNumber(numbers);
    if(choice == 1) stat = "loss"; // for paper
    else if(choice == 2) stat = "draw"; // for rock
    else stat = "won"; // for scissor
    selection = rock;

    makeChanges(stat);

    count++;
}
let onpaper = () => {
    choice = pickRandomNumber(numbers);
    if(choice == 1) stat = "won"; // for rock
    else if(choice == 2) stat = "draw"; // for paper
    else stat = "loss"; // for scissor
    selection = "paper";

    makeChanges(stat);

    count++;
}
let onscissor = () => {
    choice = pickRandomNumber(numbers);
    if(choice == 1) stat = "won"; // for paper
    else if(choice == 2) stat = "draw"; // for scissor
    else stat = "loss"; // for rock
    selection = "scissor";

    makeChanges(stat);

    count++;
}

rock.addEventListener("mousedown", onrock);
paper.addEventListener("mousedown",onpaper);
scissor.addEventListener("mousedown",onscissor);

// for showing changes on the website.

let score = document.body.querySelectorAll(".score");
let line = document.body.querySelector("#pick");
let scrY = 0 , scrC = 0;

function makeChanges(result){
    if(result === "loss") {
        line.innerText = "You lost!";
        score[1].innerText = ++scrC;
    }
    else if(result === "won"){
        line.innerText = "You won!";
        score[0].innerText = ++scrY;
    }
    else {
        line.innerText = "Draw!";
    }
}


// To set new game.

let onNewGame = () => {
    if(count != 0){
        score[0].innerText = score[1].innerText = scrC = scrY = count = 0;
        line.innerText = "New Game Start...";
    }
}

newGame.addEventListener("mousedown",onNewGame);