import {sum} from "../main/sum";

describe('true is truthy and false is falsy', () => {
    test('true is truthy', () => {
        expect(true).toBe(true);
    });

    test('false is falsy', () => {
        expect(false).toBe(false);
    });
});

describe('sum', () => {
    test('sums up two values', () => {
        expect(sum(2, 4)).toBe(6);
    });
});