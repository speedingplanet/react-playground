import React, { useState } from 'react';

function ButtonEvents() {
	/* 
	Creates a variable, clickCount, initialized to zero
	Creates a custom updater for clickCount, call it to change clickCount

	let result = useState(0);
	let myVariable = result[0];
	let customUpdater = result[1];
	*/
	const [clickCount, setClickCount] = useState(0);

	function handleClick() {
		console.log(`You clicked on the button ${clickCount} times`);
		// clickCount = clickCount + 1;
		setClickCount(clickCount + 1);
	}

	return (
		<div>
			<h3>Button Events</h3>
			<button onClick={handleClick}>Click me</button>
			<p>You clicked on the button {clickCount} times.</p>
		</div>
	);
}

export default ButtonEvents;
