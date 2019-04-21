const romanToInt = (s) => {
    let result = 0;
    let prevChar;
    for (const char of s) {
        result += valueMap.get(char);
        if (
            prevChar &&
            prefixMap.has(char) &&
            prefixMap.get(char) === prevChar
        ) {
            result -= valueMap.get(prevChar) * 2;
        }
        prevChar = char;
    }
    return result;
};
const valueMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
]);
const prefixMap = new Map([
    ['V', 'I'],
    ['X', 'I'],
    ['L', 'X'],
    ['C', 'X'],
    ['D', 'C'],
    ['M', 'C']
]);
