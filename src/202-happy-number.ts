const isHappy = (n: number, records: Set<number> = new Set()): boolean => {
    if (records.has(n)) {
        return false;
    }

    records.add(n);

    const squareSum = n
        .toString()
        .split('')
        .reduce((pool, char) => pool + Number(char) ** 2, 0);
    return squareSum === 1 ? true : isHappy(squareSum, records);
};
