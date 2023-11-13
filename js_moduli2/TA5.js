let numberlist = []
while (true){
  let number = +(prompt("Enter num: "))
  if(numberlist.includes(number)){
    alert("number is already in numberlist")
    break;
  }else {
    numberlist.push(number)
  }
}
numberlist.sort((a, b)=> b-a)
  for (let number of numberlist){
    console.log(number)
  }