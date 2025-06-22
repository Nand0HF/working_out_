function primeSummation(n) {
  const isPrime = new Array(n).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let p = 2; p * p < n; p++) {
    if (isPrime[p]) {
      for (let multiple = p * p; multiple < n; multiple += p) {
        isPrime[multiple] = false;
      }
    }
  }

  let primeSum = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      primeSum += i;
    }
  }

  return primeSum;
}