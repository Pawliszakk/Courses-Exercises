import { validateNumber, validateStringNotEmpty } from './validation';
import { expect, it, describe } from 'vitest';

describe('validateStringNotEpmty()', () => {
	it('Should throw error if input is empty or no value is provided', () => {
		const value = '';

		const result = () => validateStringNotEmpty(value);

		const result2 = () => validateStringNotEmpty();

		expect(result).toThrow('must not be empty');
		expect(result2).toThrow('must not be empty');
	});
});

describe('validateNumber()', () => {
	it('Should throw error if no value is provided or value is NaN', () => {
		const value = '3wf';

		const result = () => validateNumber(value);

		const result2 = () => validateNumber();

		expect(result).toThrow('Invalid number input');
		expect(result2).toThrow('No value is provided');
	});

	it('Should throw error if value is numeric string', () => {
		const value = '3';

		const result = () => validateNumber(value);

		expect(result).toThrow('Invalid number input');
	});

	it('Should not throw error if number is provided', () => {
		const value = 3;

		const result = () => validateNumber(value);

		expect(result).not.toThrow();
	});

	it('Should not throw error if number is provided', () => {
		const value = 3;

		const result = () => validateNumber(value);

		expect(result).not.toThrow();
	});
});
