import { useState } from 'react';
import ButtonEvents from './ButtonEvents.jsx';
import Greeter from './Greeter.jsx';

function App() {
	const [visibilityState, setVisibilityState] = useState({
		divOne: 'hidden',
		divTwo: 'hidden',
	});

	function handleShowDivOne() {
		setVisibilityState({
			divOne: 'visible',
			divTwo: 'hidden',
		});
	}
	function handleShowDivTwo() {
		setVisibilityState({
			divOne: 'hidden',
			divTwo: 'visible',
		});
	}

	return (
		<main>
			<header>
				<h1>Our React Playground</h1>
			</header>
			<section>
				<div>
					{/* <button onClick={handleButtonClick}>Toggle visibility</button> */}
					<button onClick={handleShowDivOne}>Show Div One</button>
					<button onClick={handleShowDivTwo}>Show Div Two</button>
				</div>
				{/* <div hidden> */}
				<div style={{ visibility: visibilityState.divOne }}>
					<p>Div One</p>
				</div>
				<div style={{ visibility: visibilityState.divTwo }}>
					<p>Div Two</p>
				</div>
			</section>
		</main>
	);
}

export default App;
