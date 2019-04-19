import createOrderedNumbers from "./helpers/create-ordered-numbers";

const diStringMatch = (S: string): number[] => {
    const original = createOrderedNumbers(S.length + 1);
    const result = [];

    for (const char of S) {
        result.push(original[methodNames[char as keyof typeof methodNames]]());
    }

    result.push(...original);
    return result;
};

const methodNames = {
    'I': 'shift',
    'D': 'pop'
};
