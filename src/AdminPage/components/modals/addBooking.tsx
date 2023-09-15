import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { Spin } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";

function AddBookingModal(props: any) {
  const [bookType, setBookType] = useState(props.CarType || "");
  const [tripMode, setTripMode] = useState("");
  const [pickup, setPickup] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [drop, setDrop] = useState("");
  const [Hrs, setHrs] = useState("");
  const [kms, setKms] = useState("");
  const [amount, setAmount] = useState("");
  const [PiccoCar, setPiccoCar] = useState("");
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("");
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    setLoading(true);

    event.preventDefault();

    const newData = {
      userId: 1,
      bookType: "outstations" || "rentals",
      tripStatus: "oneWay" || "roundTrip",
      pickUpDate: pickupDate,
      dropOffDate: "2023-08-02T12:00:00Z",
      pickUpLat: 37.7749,
      pickUpLng: -122.4194,
      pickUpLoc: pickup,
      pickUpCity: "",
      pickUpAddress: "",
      dropOffCity: "",
      dropOffAddress: "",
      dropOffLat: 37.7749,
      dropOffLng: -122.4194,
      dropOffLoc: drop,
      pickUpTime: pickupTime,
      hours: 0,
      kms: 0,
      estimatedAmt: 0,
      returnDate: "2023-08-02T12:00:00Z",
      rentallPack: 1,
      car: "",
      PiccoCar: PiccoCar,
      comments: comment,
      userName: user,
      phoneNumber: "98765432345",
      email: "",
      driver: "",
      adminStatus: "roaming",
      status: "Trip Created",
    };

    try {
      await axios.post(
        "https://piccocabs-server-46642b82a774.herokuapp.com/Booking",
        newData
      );

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
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label className="fw-bold">Pickup Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Pickup Location"
              className="bg-light-300"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label className="fw-bold">Pickup Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="2023-08-02"
              className="bg-light-300"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label className="fw-bold">Pickup Time</Form.Label>
            <Form.Control
              type="text"
              placeholder="Pickup Time"
              className="bg-light-300"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label className="fw-bold">Drop Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Drop"
              className="bg-light-300"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label className="fw-bold">Amount</Form.Label>
            <Form.Control
              type="text"
              placeholder="amount"
              className="bg-light-300"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label className="fw-bold">Picco Car</Form.Label>
            <Form.Control
              type="text"
              placeholder="Picco Car"
              className="bg-light-300"
              value={PiccoCar}
              onChange={(e) => setPiccoCar(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label className="fw-bold">Comments</Form.Label>
            <Form.Control
              type="text"
              placeholder="Comments"
              className="bg-light-300"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label className="fw-bold">User</Form.Label>
            <Form.Control
              type="text"
              placeholder="User Name"
              className="bg-light-300"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label className="fw-bold">Contact</Form.Label>
            <Form.Control
              type="text"
              placeholder="Contact Number"
              className="bg-light-300"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
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

export default AddBookingModal;
