//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(real, imaginary) {
    this.realNum = real;
    this.imaNum = imaginary;
  }

  get real() {
    return this.realNum;
  }

  get imag() {
    return this.imaNum;
  }

  add(otherComplex) {
    return new ComplexNumber(this.realNum + otherComplex.realNum, this.imaNum + otherComplex.imaNum);
  }

  sub(otherComplex) {
    return new ComplexNumber(this.realNum - otherComplex.realNum, this.imaNum - otherComplex.imaNum);
  }

  mul(otherComplex) {
    const realPart = (this.realNum * otherComplex.realNum) - (this.imaNum * otherComplex.imaNum);
    const imaginaryPart = (this.imaNum * otherComplex.realNum) + (this.realNum * otherComplex.imaNum);
    return new ComplexNumber(realPart, imaginaryPart);
  }

  div(otherComplex) {
    const denominator = (otherComplex.realNum ** 2) + (otherComplex.imaNum ** 2);
    const realPart = ((this.realNum * otherComplex.realNum) + (this.imaNum * otherComplex.imaNum)) / denominator;
    const imaginaryPart = ((this.imaNum * otherComplex.realNum) - (this.realNum * otherComplex.imaNum)) / denominator;
    return new ComplexNumber(realPart, imaginaryPart);
  }

  get abs() {
    return Math.sqrt((this.realNum ** 2) + (this.imaNum ** 2));
  }

  get conj() {
    if (this.imaNum === 0) {
      return new ComplexNumber(this.realNum, this.imaNum);
    }
    return new ComplexNumber(this.realNum, -this.imaNum);
  }

  get exp() {
    const realPart = Math.exp(this.realNum) * Math.cos(this.imaNum);
    const imaginaryPart = Math.exp(this.realNum) * Math.sin(this.imaNum);
    return new ComplexNumber(realPart, imaginaryPart);
  }
}
