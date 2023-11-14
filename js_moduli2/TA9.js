'use strict';
const numbers = []
function even(array){
  const even_numbers =[]
  for (let i= 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      even_numbers.push(array[i])
    }
  }
  return even_numbers
}

while (true){
  const num =+prompt("")
  if (numbers.includes(num)){
    alert("already in list")
    break;
  }else if (isNaN(num)){
    alert("invelid number! Try another number")
  }else{
    numbers.push(num)
  }
}

console.log(`${numbers} \n ${even(numbers)}`)
const target = document.querySelector('#target')
target.innerHTML += `<ul> ${even(numbers)} </ul>`;