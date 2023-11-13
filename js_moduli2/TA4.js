let NumberList = [];
while (true) {
  let Number = +(prompt("Enter the numbers"))
  if (isNaN(Number)) {
    alert("Invalid input! Please enter a number.")
  }else if (Number === 0){
    break;
  }else {
    NumberList.push(Number)
  }
}
NumberList.sort((a, b) => b-a)
for (let number of numberlist){
  console.log(number)
}