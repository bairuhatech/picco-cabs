import React from "react";
import logo from "./logo.svg";
import "./config/styleVariables.scss";
import FirstStep from "./components/bookings/bookingForms/bookingFirstStep/firstStep";
import Footer from "./screens/footer/footer";

function App() {
	return (
		<div className="App">
			<FirstStep />
			<Footer />
		</div>
	);
}

export default App;
