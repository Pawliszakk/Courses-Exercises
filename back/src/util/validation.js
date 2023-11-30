function validateStringNotEmpty(value) {
	if (!value || value.trim().length === 0) {
		throw new Error('Invalid input - must not be empty.');
	}
}

function validateNumber(number) {
	if (!number) {
		throw new Error('No value is provided');
	}

	if (isNaN(number) || typeof number !== 'number') {
		throw new Error('Invalid number input.');
	}
}

exports.validateNumber = validateNumber;
exports.validateStringNotEmpty = validateStringNotEmpty;
