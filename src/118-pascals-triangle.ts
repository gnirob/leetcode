const generate = (numRows: number): number[][] => {
    const result: number[][] = [];

    for (let i = 1; i <= numRows; i++) {
        const row = Array.from({length: i}, (item, index) => {
            if ([0, i - 1].includes(index)) {
                return 1;
            }

            const prevRow = result[i - 2];
            return prevRow[index - 1] + prevRow[index];
        })

        result.push(row);
    }

    return result;
};
