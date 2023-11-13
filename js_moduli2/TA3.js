let dogsname = document.getElementById("Names dogs")
let Names = []
for (let i = 0; i<6; i++) {
  let name = prompt("the names of six dogs")
  Names.push(name)
}
for (let i = 0; i<Names.length; i++){
  let DogsList = document.createElement("li")
  DogsList.textContent = Names[i]
  dogsname.appendChild(DogsList)
}
