import { describe, it, expect, vi } from 'vitest';
import { generateReportData } from './data';

describe('generateReportData()', () => {
	it('Should execute logfn if provided', () => {
		
        const logger = vi.fn();
		
        generateReportData(logger);

		expect(logger).toBeCalled();
	});
});
