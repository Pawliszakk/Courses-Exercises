import { it, expect, describe } from 'vitest';
import { extractPostData } from './posts';

describe('extractPostData()', () => {
	it('Should extract title and content from provided form data', () => {
		const testTitle = 'Test title';
		const testContent = 'test content';

		const testFormObject = {
			title: testTitle,
			content: testContent,
			get(identifier) {
				return this[identifier];
			},
		};

		const result = extractPostData(testFormObject);

		expect(result.title).toBe(testFormObject.title);
		expect(result.content).toBe(testFormObject.content);
	});
});
