function multiplesOf3Or5(number) {
    let sum = 0;
    for (let num = 1; num < number; num++) {
        if (num % 3 === 0 || num % 5 === 0) sum += num;
    }
    return sum;
  }

  multiplesOf3Or5(1000);