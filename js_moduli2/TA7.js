'use strict';
function diceRoll(sides){
  return Math.floor(Math.random()*sides)+1
}
const target = document.querySelector('#target')
const numofsides = +prompt('Enter number of sides')

for(;;){
  const dice = diceRoll(numofsides)
  target.innerHTML += `<li> ${dice} </li>`;
  if (dice === numofsides){
    break;
  }
}
