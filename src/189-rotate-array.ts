const rotate = <T extends number>(nums: T[], k: number): void => {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop() as T);
    }
};
