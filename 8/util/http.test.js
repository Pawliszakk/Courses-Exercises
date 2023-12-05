import { it, expect, vi } from 'vitest';
import { sendDataRequest } from './http';
import { HttpError } from './errors';

const testResponseData = { testKey: 'testData' };

const testFetch = vi.fn((url, cfg) => {
	return new Promise((resolve, reject) => {
		if (typeof cfg.body !== 'string') {
			return reject('not a string');
		}
		const testResponse = {
			ok: true,
			json() {
				return new Promise((resolve, reject) => {
					resolve(testResponseData);
				});
			},
		};
		resolve(testResponse);
	});
});

vi.stubGlobal('fetch', testFetch);

it('Should return any available response data', async () => {
	const testData = { key: 'test' };

	const result = await sendDataRequest(testData);

	expect(result).toEqual(testResponseData);
});

it('Should return any available response data', async () => {
	const testData = { key: 'test' };
	let errorMessage;

	try {
		await sendDataRequest(testData);
	} catch (err) {
		errorMessage = err;
	}
	expect(errorMessage).not.toBe('not a string');
});
it('Should throw an HttpError in case of non-ok responses', () => {
	const testData = { key: 'test' };

	testFetch.mockImplementationOnce((url, cfg) => {
		return new Promise((resolve, reject) => {
			if (typeof cfg.body !== 'string') {
				return reject('not a string');
			}
			const testResponse = {
				ok: false,
				json() {
					return new Promise((resolve, reject) => {
						resolve(testResponseData);
					});
				},
			};
			resolve(testResponse);
		});
	});

	return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
});
