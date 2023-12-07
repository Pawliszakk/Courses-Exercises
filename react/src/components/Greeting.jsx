import React, { useState } from 'react';
import Output from './Output';

const Greeting = () => {
	const [changedText, setChangedText] = useState(false);

	const changeTextHandler = () => {
		setChangedText(true);
	};

	return (
		<div>
			<h2>Hello world</h2>
			{!changedText && <Output text="output" />}
			{changedText && <Output text="changed" />}
			<button onClick={changeTextHandler}>Change Text!</button>
		</div>
	);
};

export default Greeting;
