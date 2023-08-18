import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { Spin } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";

function AddCarsModal(props: any) {
  const [brands, setBrand] = useState(props.CarType || "");
  const [models, setModel] = useState(props.CarNumber || "");
  const [rcNumber, setRcNumber] = useState(props.setDriverName || "");
  const [Nps, setNps] = useState(props.setPhoneNumber || "");
  const [CurrentBooking, setCurrentBooking] = useState(
    props.setCurrentBooking || ""
  );
  const [History, setHistory] = useState(props.setLanguage || "");
  const [statuses, setStatuses] = useState(props.setStatuses || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    setLoading(true);
    event.preventDefault();

    const newData = {
      brand: brands,
      model: models,
      RcNumber: rcNumber,
      nps: Nps,
      status: statuses,
      currentBooking: CurrentBooking,
      history: History,
    };

    try {
      if (props.purpose === "Edit") {
        await axios.put(
          `https://piccocabs-server-46642b82a774.herokuapp.com/Cars/${props.locationId}`,
          newData
        );
      } else {
        await axios.post(
          "https://piccocabs-server-46642b82a774.herokuapp.com/Cars",
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
            <Form.Label className="fw-bold">NPS</Form.Label>
            <Form.Control
              type="text"
              placeholder="NPS"
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

export default AddCarsModal;
