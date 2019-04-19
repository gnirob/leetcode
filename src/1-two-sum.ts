const twoSum = (nums: number[], target: number): number[] => {
    const passedNums: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {
        const index1 = passedNums.get(target - nums[i]);

        if (typeof index1 === 'number' && index1 > -1) {
            return [index1, i];
        } else {
            passedNums.set(nums[i], i);
        }
    }

    return [-1, -1];
};
