const singleNumber = (nums) => {
    return nums.reduce((pool, number) => pool ^ number, 0);
};
