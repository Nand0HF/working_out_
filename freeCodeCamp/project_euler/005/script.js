function smallestMult(n) {
    function gcd(a, b) {
      while (b) {
        [a, b] = [b, a % b];
      }
      return a;
    }

    function lcm(a, b) {
      return (a * b) / gcd(a, b);
    }

    let currentLcm = 1;
    for (let i = 1; i <= n; i++) {
      currentLcm = lcm(currentLcm, i);
    }
    return currentLcm;
  }

  smallestMult(20);