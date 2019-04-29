const strStr = (haystack: string, needle: string): number => {
    if (!needle) {
        return 0;
    }

    const {length} = needle;

    for (let i = 0; i <= haystack.length - length; i++) {
        const slice = haystack.slice(i, i + length);

        if (slice === needle) {
            return i;
        }
    }

    return -1;
};
