function spiralDiagonals(n) {
    let sum = 1;
    let currentNumber = 1;

    for (let s = 3; s <= n; s += 2) {
        const tr = s * s;
        const tl = tr - (s - 1);
        const bl = tl - (s - 1);
        const br = bl - (s - 1);
        sum += tr + tl + bl + br;
    }

    return sum;
}

spiralDiagonals(1001);