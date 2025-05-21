function largestPrimeFactor(number) {
    let largestPrime = 1;
    let divisor = 2;

    while (number % divisor === 0) {
      largestPrime = divisor;
      number /= divisor;
    }

    divisor = 3;
    while (divisor <= Math.sqrt(number)) {
      while (number % divisor === 0) {
        largestPrime = divisor;
        number /= divisor;
      }
      divisor += 2; 
    }

    if (number > 1) {
      largestPrime = number;
    }

    return largestPrime;
  }

  largestPrimeFactor(13195);