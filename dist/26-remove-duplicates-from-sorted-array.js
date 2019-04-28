const removeDuplicates = (nums) => {
    let cursor = 0;
    for (let i = 1; i < nums.length; i++) {
        const number = nums[i];
        if (number !== nums[cursor]) {
            nums[cursor + 1] = number;
            cursor++;
        }
    }
    return cursor + 1;
};
