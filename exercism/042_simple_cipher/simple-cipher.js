//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key) {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
    if (key) {
      if (!/^[a-z]+$/.test(key)) {
        throw new Error('Key must consist of only lowercase letters.');
      }
      this.key = key;
    } else {
      this.key = this.generateRandomKey(100);
    }
  }

  generateRandomKey(length) {
    let randomKey = '';
    for (let i = 0; i < length; i++) {
      randomKey += this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
    }
    return randomKey;
  }

  encode(plaintext) {
    let ciphertext = '';
    for (let i = 0; i < plaintext.length; i++) {
      const plainChar = plaintext[i];
      const keyChar = this.key[i % this.key.length];
      const plainIndex = this.alphabet.indexOf(plainChar);
      const keyIndex = this.alphabet.indexOf(keyChar);
      const encodedIndex = (plainIndex + keyIndex) % this.alphabet.length;
      
      ciphertext += this.alphabet[encodedIndex];
    }
    return ciphertext;
 
  }

  decode(ciphertext) {
    let plaintext = '';
    for (let i = 0; i < ciphertext.length; i++) {
      const cipherChar = ciphertext[i];
      const keyChar = this.key[i % this.key.length];
      const cipherIndex = this.alphabet.indexOf(cipherChar);
      const keyIndex = this.alphabet.indexOf(keyChar);
      const decodedIndex = (cipherIndex - keyIndex + this.alphabet.length) % this.alphabet.length;
      plaintext += this.alphabet[decodedIndex];
    }
    return plaintext;
  }
}