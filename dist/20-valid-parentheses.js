const isValid = (s) => {
    const map = new Map([[')', '('], [']', '['], ['}', '{']]);
    const stack = [];
    for (const char of s) {
        if (!map.has(char)) {
            stack.push(char);
            continue;
        }
        const top = stack.pop();
        if (top !== map.get(char)) {
            return false;
        }
    }
    return !stack.length;
};
