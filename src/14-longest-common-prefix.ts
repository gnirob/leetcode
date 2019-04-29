const longestCommonPrefix = (strs: string[]): string => {
    const first = strs.shift();

    if (!first) {
        return '';
    }

    let result = '';

    for (let i = 0; i < Infinity; i++) {
        const char = first[i];

        if (!char || strs.some((string) => string[i] !== char)) {
            break;
        }

        result += char;
    }

    return result;
};
