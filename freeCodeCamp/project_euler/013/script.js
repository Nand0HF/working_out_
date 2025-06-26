function largeSum(arr) {
  let auxSum = 0n;

  for (const num of arr) {
    auxSum += BigInt(num);
  }

  const firstTenDigits = auxSum.toString().substring(0, 10);
  return Number(firstTenDigits);
}

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

largeSum(testNums);