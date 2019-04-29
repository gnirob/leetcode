const strStr = (haystack, needle) => {
    if (!needle) {
        return 0;
    }
    const {length} = needle;
    for (let i = 0; i < haystack.length; i++) {
        const slice = haystack.slice(i, i + length);
        if (slice === needle) {
            return i;
        }
        if (slice.length < length) {
            return -1;
        }
    }
    return -1;
};
