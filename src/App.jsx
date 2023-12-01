import { useState } from 'react';
import ButtonEvents from './ButtonEvents.jsx';
import Greeter from './Greeter.jsx';

function App() {
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
		<main>
			<header>
				<h1>Our React Playground</h1>
			</header>
			<section>
				<div>
					<button onClick={() => universalToggle('divOne')}>
						Show Div One
					</button>
					<button onClick={() => universalToggle('divTwo')}>
						Show Div Two
					</button>
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
		</main>
	);
}

export default App;
