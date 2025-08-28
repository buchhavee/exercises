"use strict";

const beloeb = 1000;

function momsberegner(beloeb, moms = 25) {
  const total = beloeb * (1 + moms / 100);
  console.log(total);
  console.log(`Moms: ${total - beloeb}`);
}

momsberegner(beloeb);
