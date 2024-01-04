import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { Spin } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import API from "../../../config/api";

function AddLocationModal(props: any) {
  const [from, setFrom] = useState(props.from || "");
  const [to, setTo] = useState(props.to || "");
  const [kms, setKms] = useState(props.to || "");
  const [hrs, setHrs] = useState(props.to || "");
  const [miniPrice, setMiniPrice] = useState(props.price || "");
  const [sedanPrice, setSedanPrice] = useState(props.price || "");
  const [suvPrice, setSUVPrice] = useState(props.price || "");
  const [innovaPrice, setInnova] = useState(props.price || "");
  const [crystaPrice, setCrysta] = useState(props.price || "");
  const [tempoTrvlr, setTempoTrvlr] = useState(props.price || "");
  const [bigTrvlr, setBigTrvlr] = useState(props.price || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    setLoading(true);

    event.preventDefault();

    const newData = {
      place: from,
      location: to,
      kilometer: kms,
      hours:hrs,
      miniPrice: parseInt(miniPrice),
      sedanPrice: parseInt(sedanPrice),
      suvPrice: parseInt(suvPrice),
      innovaPrice: parseInt(innovaPrice),
      crystaPrice: parseInt(crystaPrice),
      TempoTravellerPrice: parseInt(tempoTrvlr),
      traveller18Price: parseInt(bigTrvlr),
      Active: 1,
      Status: 0,
    };

    try {
      if (props.purpose === "Edit") {
        await axios.put(
          API.BASE_URL + API.UPDATE_PICKUP_LOCATION + props.locationId,
          // `https://piccocabs-server-46642b82a774.herokuapp.com/Pickuplocation/${props.locationId}`,
          newData
        );
      } else {
        await axios.post(
          API.BASE_URL + API.CREATE_PICKUP_LOCATION,
          // "https://piccocabs-server-46642b82a774.herokuapp.com/Pickuplocation",
          newData
        );
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
          <Form.Group className="mb-3" controlId="formGroupTo">
            <Form.Label className="fw-bold">Kilometers</Form.Label>
            <Form.Control
              type="text"
              placeholder="To"
              className="bg-light-300"
              value={kms}
              onChange={(e) => setKms(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupTo">
            <Form.Label className="fw-bold">Hours</Form.Label>
            <Form.Control
              type="text"
              placeholder="To"
              className="bg-light-300"
              value={hrs}
              onChange={(e) => setHrs(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label className="fw-bold">Mini Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Mini Price"
              className="bg-light-300"
              value={miniPrice}
              onChange={(e) => setMiniPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label className="fw-bold">Sedan Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Sedan Price"
              className="bg-light-300"
              value={sedanPrice}
              onChange={(e) => setSedanPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label className="fw-bold">SUV Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="SUV Price"
              className="bg-light-300"
              value={suvPrice}
              onChange={(e) => setSUVPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label className="fw-bold">Innova Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Innova Price"
              className="bg-light-300"
              value={innovaPrice}
              onChange={(e) => setInnova(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label className="fw-bold">Crysta Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Crysta Price"
              className="bg-light-300"
              value={crystaPrice}
              onChange={(e) => setCrysta(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label className="fw-bold">Tempo traveller Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Tempo Traveller Price"
              className="bg-light-300"
              value={tempoTrvlr}
              onChange={(e) => setTempoTrvlr(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label className="fw-bold">Big Traveller Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Big traveller Price"
              className="bg-light-300"
              value={bigTrvlr}
              onChange={(e) => setBigTrvlr(e.target.value)}
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

export default AddLocationModal;
