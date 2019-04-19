const removeOuterParentheses = (S: string): string => {
    const primers = toPrimers(S);
    return primers.map((primer) => primer.slice(1, -1)).join('');
};

const toPrimers = (s: string) => {
    const result = [];
    let overflow = 0;
    let start = 0;

    for (const [key, paren] of Object.entries(s)) {
        overflow += paren === '(' ? 1 : -1;

        if (!overflow) {
            const nextIndex = Number(key) + 1;
            result.push(s.slice(start, nextIndex));
            start = nextIndex;
        }
    }

    return result;
};
