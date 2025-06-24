function divisibleTriangleNumber(n) {
    let triangularNum = 0;
    let triangularNumIndex = 1;

    while (true) {
        triangularNum += triangularNumIndex;

        let divisors = 0;
        const limit = Math.sqrt(triangularNum);
        for (let i = 1; i <= limit; i++) {
            if (triangularNum % i === 0) {
                if (i * i === triangularNum) {
                    divisors++;
                } else {
                    divisors += 2;
                }
            }
        }

        if (divisors > n) {
            return triangularNum;
        }
        triangularNumIndex++;
    }
}

divisibleTriangleNumber(500);