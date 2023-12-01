import { useState } from 'react';

function GreeterWithButton() {
	const [personName, setPersonName] = useState('');

	function handleButtonClick() {
		let newName = document.querySelector('#gwb-user-name').value;
		setPersonName(newName);
	}

	return (
		<div>
			<h3>Greeter With Button</h3>
			<label htmlFor="user-name">Please enter your name:</label>
			<input
				type="text"
				name="gwb-user-name"
				id="gwb-user-name"
			/>
			<button onClick={handleButtonClick}>Greet me</button>
			<p>Hello {personName}</p>
		</div>
	);
}

export default GreeterWithButton;
