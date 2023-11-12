let Year
Year = parseInt(prompt("Enter Year"))
if (Year%4 === 0|| Year%100 === 0 && Year%400 === 0 ) {
  console.log(Year + ", it is leap year")
} else {
    console.log(Year + ", it is not leap year")
}

