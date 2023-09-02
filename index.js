const back = document.querySelector(".anime");
// const simple = document.querySelector('.simple');
console.log(back.value);
// back.classList.add('animate__animated', 'animate__bounceOutLeft');
back.addEventListener("click", () => {
  back.classList.add("animate__animated", "animate__rotateOut");
  // do something
});
// simple.classList.add('animate__animated', 'animate__rotateIn'/*, 'animate__delay-2s 2s'*/);
// simple.style.background='#af2676';
// simple.style.color='white';
// simple.style.fontSize='25px';
// simple.style.border = '0';
// simple.style.outline = 'none';
// simple.style.borderRadius = '10px';
// simple.style.margin = '10px 167px 0 0';
// simple.style.padding = '10px';
// simple.style.cursor = 'pointer';

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;
choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSOR";
      break;
  }
}
function checkWinner() {
  if (player == computer) {
    return "draw!";
  } else if (computer == "ROCK") {
    return player == "PAPER" ? "you win!" : "you lose!";
  } else if (computer == "PAPER") {
    return player == "SCISSOR" ? "you win!" : "you lose!";
  } else if (computer == "SCISSOR") {
    return player == "ROCK" ? "you win!" : "you lose!";
  }
}
