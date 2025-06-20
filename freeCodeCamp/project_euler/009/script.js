function specialPythagoreanTriplet(n) {
  let b = 0; let c = 0;

  for(let a = 1; a < n / 3; a++ ) {
    b = Math.floor((n * (n - 2 * a)) / (2 * (n - a)));
    c = n - a - b;
    if(a + b + c === n && a * a + b * b === c * c ) return a * b * c;
  }
}

specialPythagoreanTriplet(1000);