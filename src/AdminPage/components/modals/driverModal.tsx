import React, { useState, useEffect } from "react";
import { AutoComplete, Modal, Input, Button, Select, Radio, Spin } from "antd";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { Row, Col } from "react-bootstrap";
import "./index.scss";
import AddDriverModal from "./addNewDriver";
import CarModal from "./carModal";

function DriverModal(props: any) {
	const [selected, setSelected] = useState<any>({});
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<any>([]);
	const [selectedStatus, setSelectedStatus] = useState<any>([]);
	const [modalShow, setModalShow] = useState<any>(false);
	const [modalPurpose, setModalPurpose] = useState<any>("");
	const [selectedCar, setSelectedCar] = useState<any>({});
	const [selectedRow, setSelectedRow] = useState(null);
	const [carModal, setCarModal] = useState(false);
	const [driverData, setDriverData] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);
	async function fetchData() {
		setIsLoading(true);
		try {
			const response = await axios.get(
				"https://piccocabs-server-46642b82a774.herokuapp.com/Driver/location"
			);
			setSelectedStatus(response.data);
			setData(response.data);
			setIsLoading(false);
			console.log("data vannoda=========", data);
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
					"https://piccocabs-server-46642b82a774.herokuapp.com/Driver/" +
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
	const handleCreate = () => {
		setSelectedCar({});
		setModalPurpose("Create");
		setModalShow(true);
	};
	const handleModalClose = () => {
		setModalShow(false);
		setSelectedCar({});
	};
	const handleModalSuccess = () => {
		fetchData();
		setModalShow(false);
		setSelectedCar({});
	};
	const handleRadioChange = (index: any) => {
		setSelectedRow(index);
	};
	const selectRowData = (item: any) => {
		console.log("item=============", item);
		setDriverData(item);
		console.log("driverData==========>>>>>>>>>>>>", driverData);
	};
	const goingToCarModal = () => {
		setCarModal(true);
		// props.onHide();
		// props.onOk();
	};
	return (
		<Modal
			width={1000}
			open={props.show}
			onOk={props.onOk}
			onCancel={props.onHide}>
			<div>
				<h5 style={{ textAlign: "center" }}>Assign a Best Driver</h5>
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
							onClick={() => handleCreate()}>
							<FaPlus className="text-light" />
							Add Driver
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
								<td scope="col">Car Type</td>
								<td scope="col">Car Number</td>
								<td scope="col">Driver Name</td>
								<td scope="col">Phone Number</td>
								<td scope="col">Language</td>
								<th scope="col">Licence No:</th>
								<td scope="col">Status</td>
								<td scope="col">Current Booking</td>
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
									<td>{item.CarType}</td>
									<td>{item.CarNumber}</td>
									<td>{item.DriverName}</td>
									<td>{item.phoneNumber}</td>
									<td>{item.language}</td>
									<td>{item.DlNumber}</td>
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
								</tr>
							))}
						</tbody>
					</table>
				)}
				<div style={{ display: "flex", justifyContent: "end" }}>
					<button
						style={{
							backgroundColor: "green",
							border: "none",
							borderRadius: "4px",
							height: "35px",
							color: "#ffff",
						}}
						// onClick={() => {
						// 	setCarModal(true);
						// 	props.onHide();
						// }}
						onClick={goingToCarModal}>
						Save & Continue
					</button>
					{carModal ? (
						<CarModal
							booking={props.booking}
							show={carModal}
							onHide={() => {
								setCarModal(false);
							}}
							setDriverData={driverData}
						/>
					) : null}
				</div>
			</div>
			<AddDriverModal
				show={modalShow}
				hide={handleModalClose}
				purpose={modalPurpose}
				carType={selectedCar.CarType}
				locationId={selectedCar}
				to={selectedCar.CarNumber}
				price={selectedCar.DriverName}
				onSuccess={handleModalSuccess}
			/>
		</Modal>
	);
}

export default DriverModal;