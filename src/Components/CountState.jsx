/** @format */

import React from "react";

function CounterDisplay({ count }) {
	if (count === 0) {
		return <p>{count}</p>;
	}

	if (count % 5 === 0 && count % 7 === 0) {
		return <p>FizzBuzz</p>;
	}

	if (count % 5 === 0) {
		return <p>Fizz</p>;
	}

	if (count % 7 === 0) {
		return <p>Buzz</p>;
	}

	return <p>{count}</p>;
}

function IncreaseButton({ increase }) {
	return (
		<div style={{ padding: "10px" }}>
			<button onClick={increase}>+ increase</button>
		</div>
	);
}

function DecreaseButton({ decrease }) {
	return (
		<div style={{ padding: "10px" }}>
			<button onClick={decrease}>- increase</button>
		</div>
	);
}

function ResetButton({ reset }) {
	return (
		<div style={{ padding: "10px" }}>
			<button onClick={reset}>- Reset</button>
		</div>
	);
}

class CounterApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
		this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
		this.onResetEventHandler = this.onResetEventHandler.bind(this);
		this.onDecreaseEventHandler = this.onDecreaseEventHandler.bind(this);
	}

	onIncreaseEventHandler() {
		this.setState((previousState) => {
			return {
				count: previousState.count + 1,
			};
		});
	}

	onDecreaseEventHandler() {
		this.setState((previousState) => {
			return {
				count: previousState.count - 1,
			};
		});
	}

	onResetEventHandler() {
		this.setState(() => {
			return {
				count: 0,
			};
		});
	}

	render() {
		return (
			<div style={{ display: "row", gap: "10px", marginTop: "10px" }}>
				<IncreaseButton increase={this.onIncreaseEventHandler} />
				<DecreaseButton decrease={this.onDecreaseEventHandler} />
				<CounterDisplay count={this.state.count} />
				<ResetButton reset={this.onResetEventHandler} />
			</div>
		);
	}
}

export default CounterApp;
