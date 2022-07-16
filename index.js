let variableCounter = document.getElementById("counter");
let count = 0;

function btnOfIncrement() {
  count += 1;
  variableCounter.innerText = count;
}

let groupPassed = document.getElementById("groupCounter");

function btnSave() {
  let countSave = count + " - ";
  groupPassed.innerText += countSave;
  variableCounter.innerText = 0;
  count = 0;
}

function reset() {
  groupPassed.innerText = "";
  variableCounter.innerText = 0;
}
