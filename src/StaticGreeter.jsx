function StaticGreeter({ firstName, lastName }) {
	return (
		<div>
			<h3>Static Greeter</h3>
			<p>
				Hello {firstName} {lastName}
			</p>
		</div>
	);
}

export default StaticGreeter;
