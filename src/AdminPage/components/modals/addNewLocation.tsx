import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { Spin } from 'antd';

function AddLocationModal(props: any) {
  const [from, setFrom] = useState(props.from || "");
  const [to, setTo] = useState(props.to || "");
  const [price, setPrice] = useState(props.price || "");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const newData = {
      place: from,
      location: to,
      rate: parseFloat(price),
      Active: 1,
      Status: 0,
    };

    try {
      if (props.purpose === "Edit") {
        await axios.put(
          `https://piccocabs-server-46642b82a774.herokuapp.com/Pickuplocation/${props.locationId}`,
          newData
        );
      } else {
        await axios.post("https://piccocabs-server-46642b82a774.herokuapp.com/Pickuplocation", newData);
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
            <Form.Label className="fw-bold">From</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter From"
              className="bg-light-300"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupTo">
            <Form.Label className="fw-bold">To</Form.Label>
            <Form.Control
              type="text"
              placeholder="To"
              className="bg-light-300"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label className="fw-bold">Price(in Rs)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Price"
              className="bg-light-300"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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

export default AddLocationModal;