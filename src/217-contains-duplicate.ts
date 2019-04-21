const containsDuplicate = (nums: number[]): boolean => {
    const set: Set<number> = new Set();

    for (const number of nums) {
        const setPrevSize = set.size;
        set.add(number);

        if (set.size === setPrevSize) {
            return true;
        }
    }

    return false;
};
