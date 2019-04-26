const plusOne = (digits: number[]): number[] => {
    let extra = 1;

    for (let i = digits.length - 1; i >= 0; i--) {
        if (!extra) {
            break;
        }

        const newValue = digits[i] + extra;

        if (newValue <= 9) {
            digits[i] = newValue;
            extra = 0;
        } else {
            digits[i] = 0;
            extra = 1;
        }
    }

    if (extra) {
        digits.unshift(1);
    }

    return digits;
};
