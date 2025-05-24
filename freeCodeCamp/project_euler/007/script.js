function isPrime(n) {
    if (n <= 3) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i * i <= n; i = i + 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function nthPrime(n) {
    let primeCounter = 0;
    let possiblePrimes = 2;
    let currentPrime = 2;

    while (primeCounter < n) {
        if (isPrime(possiblePrimes)) {
            primeCounter++ ;
            currentPrime = possiblePrimes;
        }
        possiblePrimes++ ;
    }

    return currentPrime;
}

nthPrime(10001);

