function add(numbers) {
	let sum = 0;

	for (const number of numbers) {
		sum += +number;
	}
	if (isNaN(sum)) {
		return NaN;
	}
	return sum;
}

exports.add = add;
