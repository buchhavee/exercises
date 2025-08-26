"use strict";

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

let userChoice;
let computerChoice;
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

addEventListenersToButtons();
function addEventListenersToButtons() {
  rockBtn.addEventListener("click", rockClick);
  paperBtn.addEventListener("click", paperClick);
  scissorsBtn.addEventListener("click", scissorsClick);
}

function skjulResult() {
  document.getElementById("win").classList.add("hidden");
  document.getElementById("lose").classList.add("hidden");
  document.getElementById("draw").classList.add("hidden");
}

function rockClick() {
  skjulResult();
  userChoice = "Rock";
  computerGuess();
}

function scissorsClick() {
  skjulResult();
  userChoice = "Scissors";
  computerGuess();
}

function paperClick() {
  skjulResult();
  userChoice = "Paper";
  computerGuess();
}

function computerGuess() {
  const choice_arr = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  computerChoice = choice_arr[randomNumber];

  console.log(computerChoice);
  console.log(userChoice);

  animationStart();
}

function animationStart() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", animationEnd);
}

function animationEnd() {
  player1.removeEventListener("animationend", animationEnd);
  console.log("Animation afsluttet");
  player1.classList.remove("shake");
  player2.classList.remove("shake");
  showResult();
}

function showResult() {
  if (userChoice === computerChoice) {
    console.log("draw");
    document.getElementById("draw").classList.remove("hidden");
  } else if ((userChoice === "Rock" && computerChoice === "Scissors") || (userChoice === "Paper" && computerChoice === "Rock") || (userChoice === "Scissors" && computerChoice === "Paper")) {
    console.log("win");
    document.getElementById("win").classList.remove("hidden");
  } else {
    console.log("lose");
    document.getElementById("lose").classList.remove("hidden");
  }
}
