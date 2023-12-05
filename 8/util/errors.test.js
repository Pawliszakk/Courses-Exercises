import { it, expect, describe } from 'vitest';
import { HttpError, ValidationError } from './errors';

describe('class HttpError', () => {
	it('Should contain provided status code, message and data', () => {
		const testStatus = 200;
		const testMessage = 'Test';
		const testData = { key: 'Test' };

		const result = new HttpError(testStatus, testMessage, testData);

		expect(result.statusCode).toBe(testStatus);
		expect(result.message).toBe(testMessage);
		expect(result.data).toBe(testData);
	});

	it('Should contain undefined if no data is provided', () => {
		const testStatus = 200;
		const testMessage = 'Test';

		const result = new HttpError(testStatus, testMessage);

		expect(result.statusCode).toBe(testStatus);
		expect(result.message).toBe(testMessage);
		expect(result.data).toBeUndefined();
	});
});

describe('class ValidationError', () => {
	it('Should contain provided message', () => {
		const testMessage = 'Hello';

		const result = new ValidationError(testMessage);

		expect(result.message).toBe(testMessage);
	});
});
