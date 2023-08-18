import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { Spin } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";

function AddDriverModal(props: any) {
  const [carType, setCarType] = useState(props.CarType || "");
  const [carNumber, setCarNumber] = useState(props.CarNumber || "");
  const [driverName, setDriverName] = useState(props.setDriverName || "");
  const [phoneNumber, setPhoneNumber] = useState(props.setPhoneNumber || "");
  const [language, setLanguage] = useState(props.setLanguage || "");
  const [dlNumber, setDlNumber] = useState(props.setDlNumber || "");
  const [statuses, setStatuses] = useState(props.setStatuses || "");
  const [currentBooking, setCurrentBooking] = useState(
    props.setCurrentBooking || ""
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    setLoading(true);

    event.preventDefault();

    const newData = {
      CarType: carType,
      CarNumber: carNumber,
      DriverName: driverName,
      phoneNumber: phoneNumber,
      language: language,
      DlNumber: dlNumber,
      status: statuses,
      currentBooking: currentBooking,
    };

    try {
      if (props.purpose === "Edit") {
        await axios.put(
          `https://piccocabs-server-46642b82a774.herokuapp.com/Driver/${props.locationId}`,
          newData
        );
      } else {
        await axios.post(
          "https://piccocabs-server-46642b82a774.herokuapp.com/Driver",
          newData
        );
      }

      props.onSuccess();
      props.hide();
    } catch (error) {
      setLoading(false);

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
            <Form.Label className="fw-bold">Car Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Car Type"
              className="bg-light-300"
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupTo">
            <Form.Label className="fw-bold">Car Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Car Number"
              className="bg-light-300"
              value={carNumber}
              onChange={(e) => setCarNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label className="fw-bold">Driver Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Driver Name"
              className="bg-light-300"
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label className="fw-bold">Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone Number"
              className="bg-light-300"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label className="fw-bold">Language</Form.Label>
            <Form.Control
              type="text"
              placeholder="Language"
              className="bg-light-300"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label className="fw-bold">Driver Licence</Form.Label>
            <Form.Control
              type="text"
              placeholder="Driver Licence"
              className="bg-light-300"
              value={dlNumber}
              onChange={(e) => setDlNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label className="fw-bold">Current Booking</Form.Label>
            <Form.Control
              type="text"
              placeholder="Current Booking"
              className="bg-light-300"
              value={currentBooking}
              onChange={(e) => setCurrentBooking(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.hide}>
            Close
          </Button>
          <Button variant="success" type="submit">
            {loading && (
              <Spin
                indicator={
                  <Loading3QuartersOutlined
                    style={{
                      fontSize: 12,
                      color: "black",
                      marginRight: 4,
                    }}
                    spin
                  />
                }
              />
            )}

            {props.purpose === "Edit" ? "Update" : "Create"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default AddDriverModal;
