//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(p, g) {
    if (!this.isPrime(p) || !this.isPrime(g)) {
      throw new Error('Constructor arguments must be prime.');
    }
    if (p <= 1 || g <= 1) {
      throw new Error('Constructor arguments must be greater than 1.');
    }
    this.p = p;
    this.g = g;
  }

  isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  getPublicKey(privateKey) {
    if (
      privateKey <= 1 ||
      privateKey >= this.p
    ) {
      throw new Error(
        `Private key must be greater than 1 and less than ${this.p}.`,
      );
    }
    return this.power(this.g, privateKey, this.p);
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return this.power(theirPublicKey, myPrivateKey, this.p);
  }

  power(base, exp, mod) {
    let res = 1;
    base %= mod;
    while (exp > 0) {
      if (exp % 2 === 1) res = (res * base) % mod;
      exp >>= 1;
      base = (base * base) % mod;
    }
    return res;
  }
}