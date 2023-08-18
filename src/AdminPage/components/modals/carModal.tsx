import React, { useState, useEffect } from "react";
import { Modal, Input, Button, Select, Radio, Spin } from "antd";
import { Row, Col } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import AddCarsModal from "./addCars";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import piccologo from "../../../assets/images/logo.png";

function CarModal(props: any) {
	const [data, setData] = useState<any>([]);
	const [selectedStatus, setSelectedStatus] = useState<any>([]);
	const [modalShow, setModalShow] = useState<any>(false);
	const [selectedRow, setSelectedRow] = useState<any>({});
	const [carData, setCarData] = useState<any>({});
	const [loading, setLoading] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

	useEffect(() => {
		fetchData();
	}, []);

	const selectRowData = (item: any) => {
		setCarData(item);
	};


	const DriverAndCar = async (index: any) => {
		setLoading(true);

		try {
			let updatingItem: any = data[index];
			console.log(updatingItem);

			console.log("updatingItem --> ", updatingItem);
			console.log("Driver ---> ", props?.setDriverData?.DriverName);
			console.log("Car ---> ", carData.RcNumber);

			let reqBody = {
				driver: props?.setDriverData?.DriverName || "",
                car: `${carData.brand} ${carData.model}`,
			};

			const response = await axios.put(
				"https://piccocabs-server-46642b82a774.herokuapp.com/Booking/" +
					props.booking.id,
				reqBody
			);
			console.log("response=======rishadddd=======>>>", response);
			setLoading(false);
			props.onHide();
			alert("Driver and Car selected successfully");
		} catch (err) {}
	};
	const handleCreateCar = () => {
		setModalShow(true);
	};

	async function fetchData() {
		setIsLoading(true);
		try {
			const response = await axios.get(
				"https://piccocabs-server-46642b82a774.herokuapp.com/Cars/Details"
			);
			setSelectedStatus(response.data);
			setData(response.data);
			console.log("data vaerumm=========", data);
			setIsLoading(false);
		} catch (error) {
			console.error("Error:", error);
		}
	}
	const handleSelect = async (value: any, index: number) => {
		let updatingStatus: any = selectedStatus[index];
		console.log("updatingStatus", updatingStatus);
		updatingStatus.status = value;
		let reqBody = { ...updatingStatus };
		delete reqBody.id;
		if (value) {
			try {
				const response = await axios.put(
					"https://piccocabs-server-46642b82a774.herokuapp.com/Cars/" +
						updatingStatus.id +
						"",
					reqBody
				);

				console.log("Response:", response.data);
			} catch (error) {
				console.error("Error:", error);
			}
		}
	};
	const handleModalClose = () => {
		setModalShow(false);
	};
	const handleModalSuccess = () => {
		fetchData();
		setModalShow(false);
	};
	const handleRadioChange = (index: any) => {
		setSelectedRow(index);
	};
	const handleOk = () => {
		setIsSuccessModalOpen(false);
	};
	return (
		<Modal open={props.show} onCancel={props.onHide} width={1000}>
			<div>
				<h5 style={{ textAlign: "center" }}>Pick a Best Car</h5>
				<br />
				<Row>
					<Col md={7}></Col>
					<Col md={3}>
						<div>
							<Input
								allowClear
								suffix={
									<Button
										type="text"
										icon={<BiSearch />}
										style={{ border: "none", backgroundColor: "transparent" }}
									/>
								}
							/>
						</div>
					</Col>
					<Col md={2}>
						<button
							style={{
								border: "1px solid green",
								color: "green",
								backgroundColor: "green",
							}}
							className="btn btn-picco align-self-center me-3 text-light"
							onClick={() => handleCreateCar()}>
							<FaPlus className="text-light" />
							Add Car
						</button>
					</Col>
				</Row>
				<br />
				{isLoading ? (
					<div
						style={{
							width: "100%",
							height: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Spin size="large" style={{ color: "red" }} />
					</div>
				) : (
					<table className="table table-striped align-self-start table-hover">
						<thead>
							<tr>
								<th scope="col">Select</th>
								<th scope="col">#</th>
								<th scope="col">Brand</th>
								<th scope="col">Model</th>
								<th scope="col">RC Number</th>
								<th scope="col">NPS</th>
								<th scope="col">Status</th>
								<th scope="col">Current Booking</th>
								<th scope="col">History</th>
							</tr>
						</thead>
						<tbody>
							{data.map((item: any, index: number) => (
								<tr key={item.id}>
									<th>
										<Radio
											onChange={() => handleRadioChange(index)}
											checked={selectedRow === index}
											onClick={() => {
												selectRowData(item);
											}}
										/>
									</th>
									<th scope="row">{item.id}</th>
									<td>{item.brand}</td>
									<td>{item.model}</td>
									<td>{item.RcNumber}</td>
									<td>{item.nps}</td>
									<td>
										<Select
											style={{ width: "130px" }}
											defaultValue={item.status}
											onChange={(value) => handleSelect(value, index)}>
											<Select.Option value="Active">Active</Select.Option>
											<Select.Option value="InActive">InActive</Select.Option>
										</Select>
									</td>
									<td>{item.currentBooking}</td>
									<td>{item.history}</td>							
								</tr>
							))}
						</tbody>
					</table>
				)}
				<div style={{ display: "flex", justifyContent: "end" }}>
					<Button
						style={{
							backgroundColor: "green",
							border: "none",
							borderRadius: "4px",
							height: "35px",
							color: "#ffff",
						}}

						loading={loading}
						onClick={DriverAndCar}>
						Save & Continue
					</Button>
				</div>
			</div>{" "}
			{isSuccessModalOpen ? (
				<Modal
					title="Basic Modal"
					open={isSuccessModalOpen}
					onOk={handleOk}
					closable={false}
					style={{ maxWidth: "25%" }}>
					<div
						style={{
							width: "100%",
							height: "200px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
							paddingBottom: "20px",
						}}>
						<img src={piccologo} style={{ width: "50%", height: "200px" }} />
						<h6>Booking Successfully.</h6>
					</div>
				</Modal>
			) : null}
			<AddCarsModal
				show={modalShow}
				hide={handleModalClose}
				onSuccess={handleModalSuccess}
			/>
		</Modal>
	);
}

export default CarModal;