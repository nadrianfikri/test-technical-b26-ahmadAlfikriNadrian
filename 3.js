function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function segitiga(n) {
  let prime = '';

  for (let i = 2; i <= n + n; i++) {
    if (isPrime(i)) {
      prime += `${i}  `;
    }
    console.log(prime);
  }

  prime = '';
}

segitiga(8);

// function input(p) {
//   let output = '';
//   for (let i = 1; i <= p; i++) {
//     for (let j = 1; j <= i; j++) {
//       output += `${j}  `;
//     }

//     console.log(output);
//     output = '';
//   }
// }
// input(9);
