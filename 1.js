function countHandshake(n) {
  let peluang = 0;
  for (i = 0; i < n; i++) {
    peluang += i;
  }
  console.log(peluang);
}

countHandshake(9);
