import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting', () => {
	test('Should be initially Good to see you paragraph', () => {
		render(<Greeting />);

		const result = screen.getByText('output', { exact: false });

		expect(result).toBeInTheDocument();
	});

	test('Paragraph should change if button was clicked', async () => {
		render(<Greeting />);

		const button = screen.getByRole('button');

		fireEvent.click(button);

		const changedParagraph = screen.getByText('Changed', { exact: false });

		expect(changedParagraph).toBeInTheDocument();
	});

	test('Old paragraph after click should disappear', () => {
		render(<Greeting />);
		const button = screen.getByRole('button');
		fireEvent.click(button);

		const paragraph = screen.queryByText('output', { exact: false });

		expect(paragraph).not.toBeInTheDocument();
	});
});
