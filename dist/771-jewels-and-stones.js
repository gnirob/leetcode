const numJewelsInStones = (J, S) => {
    let result = 0;
    for (let char of S) {
        if (J.includes(char)) {
            result++;
        }
    }
    return result;
};
