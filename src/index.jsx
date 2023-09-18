/** @format */

import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./Components/ContactApp";
import PropTypes from "prop-types";
import "./styles/style.css";
import CounterApp from "./Components/CountState";
import MyFormApps from "./Components/EmailApp";

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		console.log("Component Created!");
	}
	render() {
		return <p>Hello, {this.props.name}!</p>;
	}
}

MyComponent.propTypes = {
	name: PropTypes.string.isRequired, // You can specify the expected prop type here
};

const root = createRoot(document.getElementById("root"));
const component = createRoot(document.getElementById("component"));
const counter = createRoot(document.getElementById("countState"));
const email = createRoot(document.getElementById("emailPage"));
root.render(<ContactApp />);
component.render(
	<div>
		<MyComponent name="Dicoding" />
		<MyComponent name="Kungkang" />
	</div>
);
counter.render(<CounterApp />);
email.render(<MyFormApps />);
