import fs from 'fs';
import path from 'path';

import { beforeEach, expect, it, vi } from 'vitest';
import { Window } from 'happy-dom';
import { showError } from './dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentElement = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal('document', document);

beforeEach(() => {
	document.body.innerHTML = '';
	document.write(htmlDocumentElement);
});

it('Should add an error paragraph to the id="errors" div ', () => {
	showError('Test');

	const errorsElement = document.getElementById('errors');
	const errorParagraph = errorsElement.firstElementChild;

	expect(errorParagraph).not.toBeNull();
});

it('Should not be initially paragraph element', () => {
	const errorsElement = document.getElementById('errors');
	const errorParagraph = errorsElement.firstElementChild;

	expect(errorParagraph).toBeNull();
});

it('Should output the provided message in a paragraph element', () => {
	const testMessage = 'test message';

	showError(testMessage);

	const errorsElement = document.getElementById('errors');
	const errorParagraph = errorsElement.firstElementChild;

	expect(errorParagraph.textContent).toBe(testMessage);
});
