'use strict';
const names = ['Ahmed', 'Ali', 'Saad', 'Nihad']
function concat(array){
  let result = ""
  for(let item of array){
    result +=item
  }return result
}
const target = document.querySelector('#target')
target.innerHTML += `<div> ${concat(names)} </div>`;