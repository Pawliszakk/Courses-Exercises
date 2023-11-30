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

it('Should yield 0 if an empty array is provided', () => {
	const emptyArray = [];

	const result = add(emptyArray);

	expect(result).toBe(0);
});

it('Should throw an error if no value is provided to function', () => {
	const resultFn = () => {
		add();
	};

	expect(resultFn).toThrow();
});

it('should throw an error if provided multiple numbers instead of array', () => {
	const num1 = 1;
	const num2 = 2;
	const num3 = 3;

	const resultFn = () => {
		add(num1, num2, num3);
	};
	expect(resultFn).toThrow('is not iterable');
});
