import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting', () => {
	test('Should be initially Good to see you paragraph', () => {
		render(<Greeting />);

		const result = screen.getByText('Good to see you', { exact: false });

		expect(result).toBeInTheDocument();
	});

	test('Paragraph should change if button was clicked', async () => {
		const user = userEvent.setup();
		render(<Greeting />);

		const button = screen.getByRole('button');

		user.click(button);

		const changedParagraph = screen.queryByText('Changed', {
			exact: false,
		});

		expect(changedParagraph).not.toBeInTheDocument();
	});
});
