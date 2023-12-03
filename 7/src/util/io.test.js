import { it, expect, vi } from 'vitest';
import writeData from './io';
import { promises as fs } from 'fs';

vi.mock('fs');
vi.mock('path', () => {
	return {
		default: {
			join: (...args) => {
				return args[args.length - 1];
			},
		},
	};
});

it('Should execute writefile method', async () => {
	const testData = 'test';
	const testFileName = 'test.txt';
	await writeData(testData, testFileName);

	expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});
