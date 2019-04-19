const repeatedNTimes = (A: number[]): number => {
    const set = new Set();

    for (const number of A) {
        if (set.has(number)) {
            return number;
        }

        set.add(number);
    }

    throw new Error('Bad argument with no answer.');
};
