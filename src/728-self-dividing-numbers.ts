import {createOrderedNumbers} from './helpers';

const selfDividingNumbers = (left: number, right: number): number[] => {
    return createOrderedNumbers(right - left + 1, left).filter(isSelfDividing);
};

const isSelfDividing = (number: number) => {
    const chars = number.toString().split('');
    return chars.every((char) => char !== '0' && !(number % Number(char)));
};
