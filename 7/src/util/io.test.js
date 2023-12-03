import { it, expect } from 'vitest';
import writeData from './io';

it('Should execute writefile method', async () => {
	const testData = 'test';
	const fileName = 'test.txt';
	const result = await writeData(testData, fileName);

	expect(result).toBeUndefined();
});
