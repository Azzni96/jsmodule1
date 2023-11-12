const vastaus = confirm('Should I calculate the square root?')
if (vastaus) {
  const numero = prompt("Enter Numero")
  if (numero>=0){
  result = Math.sqrt(numero);
  console.log(result)}
  else {
    console.log("The square root of a negative number is not defined")
  }

}
else {console.log(vastaus)
}