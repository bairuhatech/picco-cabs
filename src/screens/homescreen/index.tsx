import React from "react";
import Firstsection from "./firstsection/firstsection";
import Formsection from "./formsection/formsection";
import Footer from "../../components/footer/footer";
import Offersection from "./offersection/offersection";

function HomeScreen() {
	return (
		<div>
			<Firstsection />
			<Formsection />
			<Offersection />
			<Footer />
		</div>
	);
}

export default HomeScreen;
