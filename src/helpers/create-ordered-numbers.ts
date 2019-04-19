const createOrderedNumbers = (length: number, start = 0) => {
    return Array.from({length}, (item, index) => start + index);
};

export default createOrderedNumbers;
