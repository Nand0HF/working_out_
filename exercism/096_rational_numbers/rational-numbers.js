//
// This is only a SKELETON file for the 'Rational Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Rational {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
    return this.reduce();
  }

  static gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  add(other) {
    const num = this.numerator * other.denominator + other.numerator * this.denominator;
    const den = this.denominator * other.denominator;
    return new Rational(num, den);
  }

  sub(other) {
    const num = this.numerator * other.denominator - other.numerator * this.denominator;
    const den = this.denominator * other.denominator;
    return new Rational(num, den);
  }

  mul(other) {
    const num = this.numerator * other.numerator;
    const den = this.denominator * other.denominator;
    return new Rational(num, den);
  }

  div(other) {
    if (other.numerator === 0) {
      throw new Error("Cannot divide by zero.");
    }
    const num = this.numerator * other.denominator;
    const den = this.denominator * other.numerator;
    return new Rational(num, den);
  }

  abs() {
    const num = Math.abs(this.numerator);
    const den = Math.abs(this.denominator);
    return new Rational(num, den);
  }

  exprational(power) {
    if (power === 0) {
      return new Rational(1, 1);
    }
    if (this.numerator === 0 && power < 0) {
      throw new Error("Cannot raise zero to a negative power.");
    }

    let num, den;
    if (power > 0) {
      num = this.numerator ** power;
      den = this.denominator ** power;
    } else { 
      const positivePower = Math.abs(power);
      num = this.denominator ** positivePower;
      den = this.numerator ** positivePower;
    }
    return new Rational(num, den);
  }

  expreal(base) {
    let result = base ** (this.numerator / this.denominator);

    const precision = 10; 
    const roundedResult = parseFloat(result.toFixed(precision));

    if (Math.abs(roundedResult - Math.round(roundedResult)) < 0.000000001) {
        return Math.round(roundedResult);
    }

    return roundedResult; 
  }

  reduce() {
    if (this.numerator === 0) {
      this.numerator = 0;
      this.denominator = 1;
      return this;
    }

    const commonDivisor = Rational.gcd(this.numerator, this.denominator);
    let reducedNumerator = this.numerator / commonDivisor;
    let reducedDenominator = this.denominator / commonDivisor;

    if (reducedDenominator < 0) {
      reducedNumerator *= -1;
      reducedDenominator *= -1;
    }

    this.numerator = reducedNumerator;
    this.denominator = reducedDenominator;
    return this;
  }
}
