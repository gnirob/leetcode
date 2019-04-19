const createOrderedNumbers = (length, start = 0) => {
    return Array.from({length}, (item, index) => start + index);
};

const selfDividingNumbers = (left, right) => {
    return createOrderedNumbers(right - left + 1, left).filter(isSelfDividing);
};
const isSelfDividing = (number) => {
    const chars = number.toString().split('');
    return chars.every((char) => char !== '0' && !(number % Number(char)));
};
