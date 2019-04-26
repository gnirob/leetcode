const hammingWeight = (n) => {
    let result = 0;
    while (n) {
        result++;
        n &= n - 1;
    }
    return result;
};
