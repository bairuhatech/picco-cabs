import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { Spin, message } from "antd";
import API from "../../../config/api";

function AddCarsModal(props: any) {
	const [brands, setBrand] = useState(props.CarType || "");
	const [models, setModel] = useState(props.CarNumber || "");
	const [piccoCar, setPiccoCar] = useState(props.piccoCar || "");
	const [rcNumber, setRcNumber] = useState(props.setDriverName || "");
	const [Nps, setNps] = useState(props.setPhoneNumber || "");
	const [CurrentBooking, setCurrentBooking] = useState(
		props.setCurrentBooking || ""
	);
	const [History, setHistory] = useState(props.setLanguage || "");
	const [statuses, setStatuses] = useState(props.setStatuses || "");
	const [isLoading, setLoading] = useState(false);

	const handleSubmit = async (event: any) => {
		event.preventDefault();

		const newData = {
			brand: brands,
			model: models,
			piccoCar: piccoCar,
			RcNumber: rcNumber,
			nps: Nps,
			status: statuses,
			currentBooking: CurrentBooking,
			history: History,
		};
		setLoading(true);
		try {
			if (props.purpose === "Edit") {
				await axios.put(
					API.BASE_URL + API.UPDATE_CARS + `${props.locationId}`,
					// `https://piccocabs-server-46642b82a774.herokuapp.com/Cars/${props.locationId}`,
					newData
				);
			} else {
				await axios.post(
					API.BASE_URL + API.CREATE_CARS,
					// "https://piccocabs-server-46642b82a774.herokuapp.com/Cars",
					newData
				);
			}

			props.onSuccess();
			props.hide();
			message.success("SuccessFully added new Car");
			setLoading(false);
		} catch (error) {
			console.error("Error:", error);
		}
	};
	console.log("locationId:", props.locationId);

	return (
		<Modal show={props.show} onHide={props.hide} centered>
			<Form onSubmit={handleSubmit}>
				<Modal.Header closeButton>
					<Modal.Title>{props.purpose}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Group className="mb-3" controlId="formGroupFrom">
						<Form.Label className="fw-bold">Brand</Form.Label>
						<Form.Control
							type="text"
							placeholder="Brand"
							className="bg-light-300"
							value={brands}
							onChange={(e) => setBrand(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formGroupTo">
						<Form.Label className="fw-bold">Model</Form.Label>
						<Form.Control
							type="text"
							placeholder="Model"
							className="bg-light-300"
							value={models}
							onChange={(e) => setModel(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formGroupTo">
						<Form.Label className="fw-bold">Picco Car</Form.Label>
						<Form.Control
							type="text"
							placeholder="Picco Car"
							className="bg-light-300"
							value={piccoCar}
							onChange={(e) => setPiccoCar(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formGroupPrice">
						<Form.Label className="fw-bold">RC Number</Form.Label>
						<Form.Control
							type="text"
							placeholder="RC Number"
							className="bg-light-300"
							value={rcNumber}
							onChange={(e) => setRcNumber(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formGroupPrice">
						<Form.Label className="fw-bold">Year Of Vehicle</Form.Label>
						<Form.Control
							type="number"
							placeholder="Year Of Vehicle"
							className="bg-light-300"
							value={Nps}
							onChange={(e) => setNps(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formGroupPrice">
						<Form.Label className="fw-bold">Current Booking</Form.Label>
						<Form.Control
							type="text"
							placeholder="Current Booking"
							className="bg-light-300"
							value={CurrentBooking}
							onChange={(e) => setCurrentBooking(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formGroupPrice">
						<Form.Label className="fw-bold">History</Form.Label>
						<Form.Control
							type="text"
							placeholder="History"
							className="bg-light-300"
							value={History}
							onChange={(e) => setHistory(e.target.value)}
						/>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={props.hide}>
						Close
					</Button>
					<Button variant="success" type="submit">
						{isLoading ? <Spin /> : props.purpose === "Edit" ? "Update" : "Create"}
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
}

export default AddCarsModal;
