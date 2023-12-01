import React, { useState } from 'react';

function ToggleVisibility() {
	const [visibilityState, setVisibilityState] = useState({
		divOne: true,
		divTwo: true,
		divThree: true,
	});

	function universalToggle(divName) {
		// Shallow copy of visibilityState, because we shouldn't modify it directly
		let nextVisibilityState = { ...visibilityState };

		// Hide everything
		for (let div in nextVisibilityState) {
			nextVisibilityState[div] = true;
		}

		// Show only the element passed as an argument
		nextVisibilityState[divName] = false;

		// Overwrite visibilityState with nextVisibilityState
		// Also re-renders
		setVisibilityState(nextVisibilityState);
	}

	return (
		<section>
			<h3>Toggle Visibility</h3>
			<div>
				<button onClick={() => universalToggle('divOne')}>Show Div One</button>
				<button onClick={() => universalToggle('divTwo')}>Show Div Two</button>
				<button onClick={() => universalToggle('divThree')}>
					Show Div Three
				</button>
			</div>
			<div hidden={visibilityState.divOne}>
				<p>Div One</p>
			</div>
			<div hidden={visibilityState.divTwo}>
				<p>Div Two</p>
			</div>
			<div hidden={visibilityState.divThree}>
				<p>Div Three</p>
			</div>
		</section>
	);
}

export default ToggleVisibility;
