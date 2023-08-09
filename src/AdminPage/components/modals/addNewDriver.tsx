import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { Spin } from 'antd';

function AddDriverModal(props: any) {
  const [carType, setCarType] = useState(props.CarType || "");
  const [carNumber, setCarNumber] = useState(props.CarNumber || "");
  const [driverName, setDriverName] = useState(props.setDriverName || "");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const newData = {
      CarType: carType,
      CarNumber: carNumber,
      DriverName: driverName,
      Active: 1,
      Status: 0,
    };

    try {
      if (props.purpose === "Edit") {
        await axios.put(
          `https://piccocabs-server-46642b82a774.herokuapp.com/Driver/${props.locationId}`,
          newData
        );
      } else {
        await axios.post("https://piccocabs-server-46642b82a774.herokuapp.com/Driver", newData);
      }

      props.onSuccess();
      props.hide();
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.hide}>
            Close
          </Button>
          <Button variant="success" type="submit">
            {props.purpose === "Edit" ? "Update" : "Create"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default AddDriverModal;