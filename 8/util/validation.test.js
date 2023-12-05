import { it, expect } from 'vitest';
import { validateNotEmpty } from './validation';

it('Should throw an error if text length equals 0', () => {
	const value = '';

	const result = () => validateNotEmpty(value);

	expect(result).toThrow();
});

it('Should throw an error if text is blank 0 length', () => {
	const value = '    ';

	const result = () => validateNotEmpty(value);

	expect(result).toThrow();
});

it('Should throw an error with provided message', () => {
	const value = '';
	const testErrorMessage = 'Test';
	const result = () => validateNotEmpty(value, testErrorMessage);

	expect(result).toThrow(testErrorMessage);
});
