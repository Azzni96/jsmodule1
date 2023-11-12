let num1, num2, num3, num4, num5
num1 = parseInt(prompt('Enter numero 1'))
num2 = parseInt(prompt('Enter numero 2'))
num3 = parseInt(prompt('Enter numero 3'))
num4 = parseInt(prompt('Enter numero 4'))
num5 = parseInt(prompt('Enter numero 5'))
const numbers =[num1, num2, num3, num4, num5]
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(`Num:${numbers[i]}`)
}