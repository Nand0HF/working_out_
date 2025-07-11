function digitFactorial() {
  let sum = 0;
  const numbers = [];

  const factorials = [
    1,
    1,
    2,
    6,
    24,
    120,
    720,
    5040,
    40320,
    362880
  ];


  const upperLimit = 2540160;

  for (let i = 3; i <= upperLimit; i++) {
    let currentNumber = i;
    let sumOfDigitFactorials = 0;

    let tempNumber = currentNumber;
    while (tempNumber > 0) {
      const digit = tempNumber % 10;
      sumOfDigitFactorials += factorials[digit];
      tempNumber = Math.floor(tempNumber / 10);
    }

    if (currentNumber === sumOfDigitFactorials) {
      sum += currentNumber;
      numbers.push(currentNumber);
    }
  }

  return { sum, numbers };
}

digitFactorial();