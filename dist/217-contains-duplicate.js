const containsDuplicate = (nums) => {
    const set = new Set();
    for (const number of nums) {
        const setPrevSize = set.size;
        set.add(number);
        if (set.size === setPrevSize) {
            return true;
        }
    }
    return false;
};
