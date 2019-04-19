const createOrderedNumbers = (length, start = 0) => {
    return Array.from({length}, (item, index) => start + index);
};

const diStringMatch = (S) => {
    const original = createOrderedNumbers(S.length + 1);
    const result = [];
    for (const char of S) {
        result.push(original[methodNames[char]]());
    }
    result.push(...original);
    return result;
};
const methodNames = {
    'I': 'shift',
    'D': 'pop'
};
