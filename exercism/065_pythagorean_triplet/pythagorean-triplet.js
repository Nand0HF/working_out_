//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function triplets({ minFactor, maxFactor, sum }) {
  const resultTriplets = [];

  const effectiveMinA = minFactor ? Math.max(1, minFactor) : 1;

  const maxAFromN = Math.floor((sum - 3) / 3);
  const effectiveMaxA = maxFactor ? Math.min(maxAFromN, maxFactor) : maxAFromN;


  for (let a = effectiveMinA; a <= effectiveMaxA; a++) {
    const numerator = sum * sum - 2 * sum * a;
    const denominator = 2 * (sum - a);

    if (denominator !== 0 && numerator % denominator === 0) {
      const b = numerator / denominator;
      const c = sum - a - b;

      if (a * a + b * b === c * c && a < b && b < c) {
        let isValidByFactors = true;
        if (minFactor && (b < minFactor || c < minFactor)) {
          isValidByFactors = false;
        }
        if (maxFactor && (b > maxFactor || c > maxFactor)) {
          isValidByFactors = false;
        }

        if (isValidByFactors) {
          resultTriplets.push(new Triplet(a, b, c));
        }
      }
    }
  }

  return resultTriplets; 
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }
}
