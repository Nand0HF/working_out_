function powerDigitSum(exponent) {
  let numDig = BigInt(2 ** exponent).toString().split('');
  return numDig.reduce((acc, el) => acc + Number(el), 0);
}

powerDigitSum(15);