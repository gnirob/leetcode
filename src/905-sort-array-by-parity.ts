const sortArrayByParity = (A: number[]): number[] => {
    const result: number[] = [];

    for (const number of A) {
        result[number % 2 ? 'push' : 'unshift'](number);
    }

    return result;
};
