function digitFibonacci(n) {
  let beforeLastFibo = 1;
  let lastFibo = 1;
  let fiboIndex = 2;

  while (lastFibo.toString().length < n) {
    let auxFibo = beforeLastFibo;
    beforeLastFibo = lastFibo;
    lastFibo += auxFibo;
    fiboIndex++ ;
  }
  return fiboIndex;
}

digitFibonacci(3);