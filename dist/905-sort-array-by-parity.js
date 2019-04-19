const sortArrayByParity = (A) => {
    const result = [];
    for (const number of A) {
        result[number % 2 ? 'push' : 'unshift'](number);
    }
    return result;
};
