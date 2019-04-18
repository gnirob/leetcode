const twoSum = (nums, target) => {
    const passedNums = {};
    for (let i = 0; i < nums.length; i++) {
        const index1 = passedNums[target - nums[i]];
        if (index1 > -1) {
            return [index1, i];
        } else {
            passedNums[nums[i]] = i;
        }
    }
};
