let startYear = parseInt(prompt("Enter start year:"));
let endYear = parseInt(prompt("Enter end year:"));
let yearList = [];

for (let year = startYear; year <= endYear; year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    yearList.push(year);
  }
}

const ul = document.createElement("ul");

yearList.forEach((year) => {
  const li = document.createElement("li");
  li.textContent = year;
  ul.appendChild(li);
});

document.querySelector('#leapYearsList').appendChild(ul);
