import { useState } from 'react';

/* 
Destructuring arguments
Implicitly, this is happening
let {firstName, lastName} = props;
*/
function Greeter({ firstName, lastName }) {
	const [personName, setPersonName] = useState('');

	function handleChange(event) {
		console.log('Form field value:', event.currentTarget.value);
		// personName = event.currentTarget.value;
		setPersonName(event.currentTarget.value);
	}

	// div>label+input:text+p
	return (
		<div>
			<h3>Greeter</h3>
			<label htmlFor="user-name">Please enter your name:</label>
			<input
				type="text"
				name="user-name"
				id="user-name"
				onChange={handleChange}
			/>
			<p>Hello {personName}</p>
		</div>
	);
}

export default Greeter;
