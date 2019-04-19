const numJewelsInStones = (J: string, S: string): number => {
    let result = 0;

    for (let char of S) {
        if (J.includes(char)) {
            result++;
        }
    }

    return result;
};
