import { useState } from 'react';
import ButtonEvents from './ButtonEvents.jsx';
import Greeter from './Greeter.jsx';
import ToggleVisibility from './ToggleVisibility.jsx';
import './App.css';

function App() {
	const [visibilityState, setVisibilityState] = useState({
		buttonEvents: true,
		greeter: true,
		toggleVisibility: true,
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
			<section className="main-app">
				<nav>
					<ul>
						<li onClick={() => universalToggle('buttonEvents')}>
							Button Events
						</li>
						<li onClick={() => universalToggle('greeter')}>Greeter</li>
						<li onClick={() => universalToggle('toggleVisibility')}>
							Toggle Visibility
						</li>
					</ul>
				</nav>
				<div className="container">
					<div hidden={visibilityState.buttonEvents}>
						<ButtonEvents></ButtonEvents>
					</div>
					<div hidden={visibilityState.greeter}>
						<Greeter></Greeter>
					</div>
					<div hidden={visibilityState.toggleVisibility}>
						<ToggleVisibility />
					</div>
				</div>
			</section>
		</main>
	);
}

export default App;
