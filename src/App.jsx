import { useState } from 'react';
import ButtonEvents from './ButtonEvents.jsx';
import Greeter from './Greeter.jsx';

function App() {
	const [visibilityState, setVisibilityState] = useState({
		divOne: 'hidden',
		divTwo: 'hidden',
		divThree: 'hidden',
	});

	function universalToggle(divName) {
		// Shallow copy of visibilityState, because we shouldn't modify it directly
		let nextVisibilityState = { ...visibilityState };

		// Hide everything
		for (let div in nextVisibilityState) {
			nextVisibilityState[div] = 'hidden';
		}

		// Show only the element passed as an argument
		nextVisibilityState[divName] = 'visible';

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
					{/* <button onClick={handleButtonClick}>Toggle visibility</button> */}
					<button onClick={() => valeriaToggle('divOne')}>Show Div One</button>
					<button onClick={() => valeriaToggle('divTwo')}>Show Div Two</button>
					<button onClick={() => valeriaToggle('divThree')}>
						Show Div Three
					</button>
				</div>
				{/* <div hidden> */}
				<div style={{ visibility: visibilityState.divOne }}>
					<p>Div One</p>
				</div>
				<div style={{ visibility: visibilityState.divTwo }}>
					<p>Div Two</p>
				</div>
				<div style={{ visibility: visibilityState.divThree }}>
					<p>Div Three</p>
				</div>
			</section>
		</main>
	);
}

export default App;
