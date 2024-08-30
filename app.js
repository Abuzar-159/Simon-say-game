//press any key to start the game
let gameSeq = [];
let userSeq = [];
let btns = ["red", "blue", "yellow", "green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let allbtns = document.querySelectorAll(".btn");

document.addEventListener("keypress", function () {
  if (started == false) {
    // console.log("the game is started");
    started = true;
    levelup();
  }
});
// step 2 for level up  and for random flash in initial state

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

// for level up
function levelup() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  //random btn to flash

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  // console.log(randColor);
  //   console.log(randIdx);
  //   console.log(randClr);
  //   console.log(randBtn);
  gameFlash(randBtn);
}

// to check weather the gameseq and the user seq is the same

function checkAns(idx) {
  //   console.log(level);
  // let idx = level - 1;

  if (userSeq[idx] === gameSeq[idx]) {
    console.log(gameSeq);
    console.log(userSeq);
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelup, 1000);

      document.querySelector("body").style.backgroundColor = "green";
      setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "white";
      }, 100);
    }
  } else {
    h2.innerHTML = `<span style = "color:red">Game Over!</span> <span style = "color: green"><b>Your score is ${level}</b></span> <br><br>Press any key to start `;
    reset();

    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 200);
  }
}

// step 3 for the btn press
function btnPress() {
  // console.log(this);
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  //   console.log(userColor);
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  level = 0;
  gameSeq = [];
  userSeq = [];
}
