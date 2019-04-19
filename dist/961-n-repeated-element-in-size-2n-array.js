const repeatedNTimes = (A) => {
    const set = new Set();
    for (const number of A) {
        if (set.has(number)) {
            return number;
        }
        set.add(number);
    }
};
