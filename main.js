// COIN FLIP SIMULATOR

//  Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

//  HTML Variables
let outputEl = document.getElementById("output");
let num1El = document.getElementById("face1");
let num2El = document.getElementById("face2");
let num3El = document.getElementById("face3");
let num4El = document.getElementById("face4");
let num5El = document.getElementById("face5");
let num6El = document.getElementById("face6");

// Count Variables
let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;

function btnClicked() {
  // Generate a random number
  let randNum = Math.random();
  console.log(randNum);

  if (randNum < 0.16) {
    outputEl.innerHTML = "<img src='img/1.png'/>";
    num1++;
    num1El.innerHTML = num1;
  } else if (randNum > 0.16 && randNum <= 0.32) {
    outputEl.innerHTML = "<img src='img/2.png'/>";
    num2++;
    num2El.innerHTML = num2;
  } else if (randNum > 0.32 && randNum <= 0.48) {
    outputEl.innerHTML = "<img src='img/3.png'/>";
    num3++;
    num3El.innerHTML = num3;
  } else if (randNum > 0.48 && randNum <= 0.64) {
    outputEl.innerHTML = "<img src='img/4.png'/>";
    num4++;
    num4El.innerHTML = num4;
  } else if (randNum > 0.64 && randNum <= 0.8) {
    outputEl.innerHTML = "<img src='img/5.png'/>";
    num5++;
    num5El.innerHTML = num5;
  } else {
    outputEl.innerHTML = "<img src='img/6.png'/>";
    num6++;
    num6El.innerHTML = num6;
  }
}

// //  HTML Variables
// let outputEl = document.getElementById("output");
// let headsEl = document.getElementById("heads-out");
// let tailsEl = document.getElementById("tails-out");

// // Count Variables
// let numHeads = 0;
// let numTails = 0;

// // Button Event Listener
// document.getElementById("btn").addEventListener("click", btnClicked);

// function btnClicked() {
//   // Generate a random number
//   let randNum = Math.random();
//   console.log(randNum);

//   //  Simulate the coin Flip
//   if (randNum < 0.5) {
//     outputEl.innerHTML = "<img src='img/heads.png'/>";
//     numHeads++;
//     headsEl.innerHTML = numHeads;
//   } else {
//     outputEl.innerHTML = "<img src='img/tails.png'/>";
//     numTails++;
//     tailsEl.innerHTML = numTails;
//   }
// }
