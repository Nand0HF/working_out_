function sumFactorialDigits(n) {
  let factorialNum = 1n;

  for(let num = n; num > 1 ; num--) {
    factorialNum *= BigInt(num);
  }
  return factorialNum.toString().split('').reduce((acc, num) => acc + Number(num), 0);
}

sumFactorialDigits(10);