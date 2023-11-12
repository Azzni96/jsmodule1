const num = parseInt(prompt('Enter a number:'));
let Prime = true;

if (num <= 0) {
  Prime = false;
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      Prime = false;
      break;
    }
  }
}

if (Prime) {
  console.log(num + " is a prime number");
} else {
  console.log(num + " is not a prime number");
}
