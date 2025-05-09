//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//



export class Palindromes {
  static generate({ minFactor, maxFactor }) {
    if(minFactor > maxFactor)
      throw new Error('min must be <= max');
    
    const palindromes = {};
    let larger = -Infinity;
    let smaller = Infinity;
    
    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = i; j <= maxFactor; j++) {
        let product = i * j;
        if(Palindromes.isPalindrome(product)) {
          if(Object.keys(palindromes).includes(product.toString()))
            palindromes[product].push([i, j]);
          else
            palindromes[product] = [[i, j]];
          if(larger < product) larger = product;
          if(smaller > product) smaller = product;
        }
      }
    }
    return {smallest: {value: (smaller === Infinity ? null : smaller), 
                       factors: palindromes[smaller] || []}, 
            largest: {value: (larger === -Infinity ? null : larger), 
                      factors: palindromes[larger] || []}};
  }
  static isPalindrome = n => {
    const chain = n.toString();
    let len = chain.length / 2;
    for (let index = 0; index < len; index++)
      if(chain[index] !== chain.at(-(index + 1)))
        return false;
    return true;
  }
}