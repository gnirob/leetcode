const isValid = <T extends string>(s: T): boolean => {
    const map = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    const stack: T[] = [];

    for (const char of s) {
        if (!map.has(char)) {
            stack.push(char as T);
            continue;
        }

        const top = stack.pop();

        if (top !== map.get(char)) {
            return false;
        }
    }

    return !stack.length;
};
