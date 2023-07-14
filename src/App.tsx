import React from "react";
import logo from "./logo.svg";
import "./config/styleVariables.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import HomeScreen from "./screens/homeScreen";

function App() {
	return (
		<div className="App">
			<HomeScreen />
		</div>
	);
}

export default App;
