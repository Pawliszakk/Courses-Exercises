import { expect, it } from 'vitest';
import { transformToNumber } from './numbers';

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
