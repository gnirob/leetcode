const toLowerCase = (str: string): string => {
    let result = '';

    for (const char of str) {
        result += isUpperCase(char)
            ? String.fromCharCode(char.charCodeAt(0) + caseCodeDifference)
            : char;
    }

    return result;
};

const isUpperCase = (char: string) => {
    return /[A-Z]/.test(char);
};

const caseCodeDifference = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);
