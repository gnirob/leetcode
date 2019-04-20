const moveZeroes = (nums) => {
    let end = nums.length - 1;
    for (let i = 0; i < nums.length; i++) {
        if (i >= end) {
            break;
        }
        if (nums[i] === 0) {
            nums.push(nums.splice(i, 1)[0]);
            i--;
            end--;
        }
    }
};
