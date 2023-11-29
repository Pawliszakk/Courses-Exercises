import { expect, it, test } from 'vitest';
import { add } from './math';

it('Should summarise all numbers in an array', () => {
	//ARRANGE

	const numbers = [1, 2, 3];

	//ACT
	const result = add(numbers);

	//ASSERT
	const expectedResult = numbers.reduce((prev, cur) => prev + cur, 0);

	expect(result).toBe(expectedResult);
});

it('Should yield NAN if atleast one invalid number is provided', () => {
	const inputs = [1, 'w'];

	const result = add(inputs);

	expect(result).toBeNaN();
});

it('Should yield correct sum if an array is string numbers', () => {
	const numbers = ['1', '2', '3'];

	const result = add(numbers);

	const expectedResult = numbers.reduce((prev, cur) => +prev + +cur, 0);

	expect(result).toBe(expectedResult);
});
