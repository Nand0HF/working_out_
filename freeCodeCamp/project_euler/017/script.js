const UNITS = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
};

const TEENS = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
};

const TENS = {
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
};

function numberToWords(n) {
  if (n === 0) {
    return "";
  }

  if (n >= 1 && n <= 9) {
    return UNITS[n];
  }

  else if (n >= 10 && n <= 19) {
    return TEENS[n];
  }

  else if (n >= 20 && n <= 99) {
    const tensDigit = Math.floor(n / 10) * 10;
    const unitDigit = n % 10;
    if (unitDigit !== 0) {
      return TENS[tensDigit] + UNITS[unitDigit];
    } else {
      return TENS[tensDigit];
    }
  }

  else if (n >= 100 && n <= 999) {
    const hundredsDigit = Math.floor(n / 100);
    const hundreds_part = UNITS[hundredsDigit] + "hundred";
    const remainder = n % 100;

    if (remainder !== 0) {

      return hundreds_part + "and" + numberToWords(remainder);
    } else {
      return hundreds_part;
    }
  }

  else if (n === 1000) {
    return "onethousand";
  }
  return "";
}


function numberLetterCounts(limit) {
    let letterSum = 0;
    for(let num = 1; num <= limit; num++) {
      letterSum += numberToWords(num).length;
    }
    return letterSum;
  }

numberLetterCounts(5);  