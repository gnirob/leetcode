import createOrderedNumbers from "./helpers/create-ordered-numbers";

const diStringMatch = (S: string): number[] => {
    const original = createOrderedNumbers(S.length + 1);
    const result: number[] = [];

    for (const char of S) {
        const methodName = methodNames.get(char as Char) as MethodName;
        const item = original[methodName]() as number;
        result.push(item);
    }

    result.push(...original);
    return result;
};

const methodNames: Map<Char, MethodName> = new Map([
    ['I', 'shift'],
    ['D', 'pop']
]);

type Char = 'I' | 'D';
type MethodName = 'shift' | 'pop';
