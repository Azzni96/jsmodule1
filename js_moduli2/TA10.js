let numberofcandidates = +prompt("Enter the number of candidates ")
const candidates = []
for (let i = 0; i<numberofcandidates; i++){
  const name = prompt('Name for candidate' + (i+1));
  const candiate ={
    name:name,
    votes: 0,
  };
  candidates.push(candiate);
}
const voters = prompt('How many voters')
for(let i=0; i<voters; i++){
  const vote = prompt('who do u vote for?')
  for (let candiate of candidates)
  if(candiate.name === vote){
    candiate.votes++;
  }
}
const num = + prompt('number of participants');
const names = [];
for(let i = 0; i < num; i++){
  names.push(prompt('Enter name'))
}
names.sort()

for (let name of names){
  const target = document.querySelector('#target')
  target.innerHTML += `<ul> ${name} </ul>`;
}