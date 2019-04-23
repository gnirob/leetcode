const maxProfit = (prices: number[]): number => {
    let result = 0;
    let minPrice = Infinity;

    for (const price of prices) {
        if (price < minPrice) {
            minPrice = price;
            continue;
        }

        const profit = price - minPrice;

        if (profit > result) {
            result = profit;
        }
    }

    return result;
};
