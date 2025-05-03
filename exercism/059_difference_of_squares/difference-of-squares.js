//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(num) {
    this.numbers = Array.from({ length: num }).map((_, index) => index + 1);
  }

  get sumOfSquares() {
    return this.numbers.reduce((accumulator, currentValue) => accumulator + currentValue ** 2);
  } 
  

  get squareOfSum() {
    return this.numbers.reduce((accumulator, currentValue) => accumulator + currentValue) ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
