function sumSquareDifference(n) {
    let  sumOfSquares = n * (n + 1) * (2 * n + 1) / 6
    let squareOfSum = ((n ** 2 + n) / 2) ** 2;

    return squareOfSum - sumOfSquares;
  }

  sumSquareDifference(100);