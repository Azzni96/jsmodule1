'use strict';
function rollDice() {
 return Math.floor(Math.random() * 6) + 1;
}
let result = 0;
let results = []
while (result !== 6){
 result = rollDice();
 results.push(result)
}
let html = '';
for(let i = 0; i < results.length; i++){
  html += `<li> ${results[i]} </li>`;
}

document.querySelector('#diceRoll').innerHTML = html;