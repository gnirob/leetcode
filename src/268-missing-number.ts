const missingNumber = (nums: number[]): number => {
    const sumWhenNoMissing = (nums.length + 1) * nums.length / 2;
    return sumWhenNoMissing - sum(nums);
};

const sum = (numbers: number[]) => {
    return numbers.reduce((pool, number) => pool + number, 0);
};
