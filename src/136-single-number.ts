const singleNumber = (nums: number[]): number => {
    return nums.reduce((pool, number) => pool ^ number, 0);
};
