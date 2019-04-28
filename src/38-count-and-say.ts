const countAndSay = (n: number): string => {
    let result = '1';

    for (let i = 1; i < n; i++) {
        result = say(result);
    }

    return result;
};

const say = (s: string): string => {
    let count = 0;
    let char = s[0];
    let result = '';

    for (const c of s) {
        if (c === char) {
            count++;
        } else {
            result += `${count}${char}`;
            count = 1;
            char = c;
        }
    }

    return `${result}${count}${char}`;
};
