function fiboEvenSum(n) {
    const fiboNums = [1, 2];
    let sum = 0; let i = 0;

    while (fiboNums[i] + fiboNums[i + 1] <= n) {
      fiboNums.push(fiboNums[i] + fiboNums[i + 1]);
      i++;
    }

    for(let num of fiboNums) {
      if(num % 2 === 0) sum += num;
    }
    return sum;
  }