const createOrderedNumbers = (length, start = 0) => {
    return Array.from({length}, (item, index) => start + index);
};

const diStringMatch = (S) => {
    const original = createOrderedNumbers(S.length + 1);
    const result = [];
    for (const char of S) {
        const methodName = methodNames.get(char);
        const item = original[methodName]();
        result.push(item);
    }
    result.push(...original);
    return result;
};
const methodNames = new Map([['I', 'shift'], ['D', 'pop']]);
