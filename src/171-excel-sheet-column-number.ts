const titleToNumber = (s: string): number => {
    let result = 0;
    const charCodeStart = 'A'.charCodeAt(0);
    const radix = 26;

    for (let i = 0; i < s.length; i++) {
        result +=
            (s[s.length - 1 - i].charCodeAt(0) - charCodeStart + 1) *
            radix ** i;
    }

    return result;
};
