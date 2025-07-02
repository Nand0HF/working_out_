function d(number) {
  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
        sum += i;
    }
  }
    return sum;
  }

function sumAmicableNum(limit) {
  let amicableSum = 0;
  for (let a = 1; a < limit; a++) {
    let b = d(a);
    if (d(b) === a && a !== b) {
        amicableSum += a;
    }
  }
  return amicableSum;
}

sumAmicableNum(1000);