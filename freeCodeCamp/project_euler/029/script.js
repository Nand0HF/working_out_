function distinctPowers(n) {
  const terms = [];
  for(let a = 2; a <= n ; a++) {
    for(let b = 2; b <= n ; b++) {
      terms. push(a ** b);
    }
  }
   const termSet = new Set(terms);
  return termSet.size;
}

distinctPowers(30);