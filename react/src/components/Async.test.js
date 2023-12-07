import React from 'react';
import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async Component', () => {
	test('Renders posts if request succeds', async () => {
		window.fetch = jest.fn();
		window.fetch.mockResolvedValueOnce({
			json: async () => {
				return [
					{
						id: 'p1',
						title: 'First Post',
					},
					{
						id: 'p2',
						title: 'Second Post',
					},
				];
			},
		});

		render(<Async />);

		const listItemElements = await screen.findAllByRole('listitem');

		expect(listItemElements).not.toHaveLength(0);
	});
});
