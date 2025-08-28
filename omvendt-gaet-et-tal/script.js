"use strict";

const forlavt = document.getElementById("forlavt");
const forhoejt = document.getElementById("forhoejt");
const korrekt = document.getElementById("korrekt");
const reset = document.getElementById("reset");

let min, max, gaet, forsoeg, spilIgang;

function startSpil() {
  min = 0;
  max = 100;
  forsoeg = 0;
  spilIgang = true;
  forlavt.disabled = false;
  forhoejt.disabled = false;
  korrekt.disabled = false;
  reset.disabled = true;
  reset.textContent = "Start igen";
  lavGaet();
}

function nulstilSpil() {
  min = 0;
  max = 100;
  forsoeg = 0;
  spilIgang = false;
  document.querySelector("h2").textContent = "";
  forlavt.disabled = true;
  forhoejt.disabled = true;
  korrekt.disabled = true;
  reset.disabled = false;
  reset.textContent = "Start spil";
}

function lavGaet() {
  if (min > max) {
    document.querySelector("h2").textContent = "Ik snyd bro😑";
    spilIgang = false;
    forlavt.disabled = true;
    forhoejt.disabled = true;
    korrekt.disabled = true;
    reset.disabled = false;
    return;
  }
  gaet = Math.floor((min + max) / 2);
  document.querySelector("h2").textContent = gaet;
  forsoeg++;
}

reset.addEventListener("click", function () {
  if (!spilIgang) {
    startSpil();
  } else {
    nulstilSpil();
  }
});

forlavt.addEventListener("click", function () {
  if (!spilIgang) return;
  min = gaet + 1;
  lavGaet();
});

forhoejt.addEventListener("click", function () {
  if (!spilIgang) return;
  max = gaet - 1;
  lavGaet();
});

korrekt.addEventListener("click", function () {
  if (!spilIgang) return;
  document.querySelector("h2").textContent = `Nemt! Gættede tallet på ${forsoeg} forsøg bro🤣`;
  spilIgang = false;
  forlavt.disabled = true;
  forhoejt.disabled = true;
  korrekt.disabled = true;
  reset.textContent = "Start igen";
  reset.disabled = false;
});

nulstilSpil();
