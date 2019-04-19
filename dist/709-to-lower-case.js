const toLowerCase = (str) => {
    let result = '';
    for (const char of str) {
        result += isUpperCase(char)
            ? String.fromCharCode(char.charCodeAt(0) + caseCodeDifference)
            : char;
    }
    return result;
};
const isUpperCase = (char) => {
    return /[A-Z]/.test(char);
};
const caseCodeDifference = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);
