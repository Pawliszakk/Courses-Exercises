import { describe, expect, it } from 'vitest';
import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber()', () => {
	it('Should change string value to a number value', () => {
		const numericString = '2';

		const result = transformToNumber(numericString);

		expect(result).toBe(+numericString);
	});

	it('Should yield NaN for non transformable values', () => {
		const input1 = 'wiowa2';
		const input2 = {};

		const result = transformToNumber(input1);
		const result2 = transformToNumber(input2);

		expect(result).toBeNaN();
		expect(result2).toBeNaN();
	});
});

describe('cleanNumbers()', () => {
	it('Should transform array of numeric strings to array of numbers', () => {
		const numbers = ['1', '2', '3', '6'];

		const result = cleanNumbers(numbers);

		expect(result[3]).toBe(6);
		expect(result[3]).toBeTypeOf('number');
	});

	it('Should yield error if wrong input value is provided', () => {
		const val1 = [''];

		const result = () => cleanNumbers(val1);

		expect(result).toThrow();
	});
});
