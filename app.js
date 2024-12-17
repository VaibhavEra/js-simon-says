let gameSeq = [];
let userSeq = [];

let gameStart = false;
let level = 0;

const colors = ["red", "yellow", "blue", "purple"];

const heading = document.querySelector("h2");

const body = document.querySelector("body");
body.addEventListener("keypress", () => {
  if (gameStart == false) {
    gameStart = true;
    increaseLVL();
  }
});

function increaseLVL() {
  level++;
  heading.textContent = `Level: ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = colors[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  flashBtn(randBtn);
}

function flashBtn(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 200);
}
function userflashBtn(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 200);
}

const buttons = document.querySelectorAll(".buttons");

function btnPress() {
  let btn = this;
  userflashBtn(btn);

  let userBtn = btn.getAttribute("id");
  userSeq.push(userBtn);

  checkAns();
}

buttons.forEach((buttons) => {
  buttons.addEventListener("click", btnPress);
});

function checkAns() {
  let idx = level - 1;

  if (gameSeq[idx] == userSeq[idx]) increaseLVL();
  else gameOver();
}

function gameOver() {
  heading.textContent = `Game Over!, Your Score was: ${level}. Press any Key to restart`;
  body.classList.add("gameOver");
  setTimeout(() => {
    body.classList.remove("gameOver");
  }, 200);
  resetGame();
}

function resetGame() {
  gameSeq = [];
  userSeq = [];
  gameStart = false;
  level = 0;
}
