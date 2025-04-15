//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    [this.a, this.b, this.c] = sides.sort((a, b) => a - b);
    this.isTriangle = !(this.a <= 0 || this.a + this.b < this.c);
  }

  get isEquilateral() {
    return this.isTriangle && this.a === this.c;
  }

  get isIsosceles() {
    return this.isTriangle && this.a === this.b || this.b === this.c;
  }

  get isScalene() {
    return this.isTriangle && !this.isIsosceles;
  }
}