function largestPalindromeProduct(n) {
    let maxFactor = 0;
    for (let i = 0; i < n; i++) {
      maxFactor = maxFactor * 10 + 9;
    }

    let minFactor = 1;
    for (let i = 0; i < n - 1; i++) {
      minFactor *= 10;
    }

    let largestPalProd = 0;

    for (let i = maxFactor; i >= minFactor; i--) {
      if (i * i <= largestPalProd) {
          break;
      }

      for (let j = i; j >= minFactor; j--) {
        const product = i * j;

        if (product <= largestPalProd) {
          break;
        }

        const productStr = String(product);
        const reversedProductStr = productStr.split('').reverse().join('');

        if (productStr === reversedProductStr) {
          largestPalProd = product;
        }
      }
    }

    return largestPalProd;
  }

  largestPalindromeProduct(3);