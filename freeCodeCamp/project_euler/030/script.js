function digitnPowers(n) {
let totalSum = 0;

let limitDigits = 1;
while (true) {
    const maxSumForDigits = limitDigits * Math.pow(9, n);
    if (Math.pow(10, (limitDigits - 1)) > maxSumForDigits) {
        break;
    }
    limitDigits++;
}

const upperBound = (limitDigits - 1) * Math.pow(9, n) + 1;

for (let i = 2; i < upperBound; i++) {
    const numStr = String(i);
    let currentSum = 0;
    for (let j = 0; j < numStr.length; j++) {
        const digit = parseInt(numStr[j]);
        currentSum += Math.pow(digit, n);
    }

    if (currentSum === i) {
        totalSum += i;
    }
}

return totalSum;
}
