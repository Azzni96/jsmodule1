let startyear = + prompt("Start year?")
let endyear = + prompt("End year?")
let Yearslista = []
for(Year = startyear; Year<=endyear; Year++) {
  if (Year % 4 === 0 || Year % 100 === 0 && Year % 400 === 0) {
    Yearslista.push(Year)
  }
}
const ul = document.createElement("ul")
Yearslista.forEach((Year) => {
  const li = document.createElement("li");
  li.textContent = Year
  ul.appendChild(li)
})
document.querySelector('#leapYearsList').appendChild(ul);