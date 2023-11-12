const dice_number = + prompt("noppien määrä")
const eyes_number = + prompt("noppien summa")
osuma = 0
for(let j = 0; j < 10; j++){
  summa = 0
  for(let i = 1; i <=dice_number; i++) {
    summa = summa + (Math.floor(Math.random(dice_number) * 6)+1);


}
  if (summa == eyes_number)
      osuma ++
  console.log(osuma)}
todennakoisyys = (osuma/100000)*100
console.log(todennakoisyys)