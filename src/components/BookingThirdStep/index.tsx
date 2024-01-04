import React, { useState, useEffect } from "react";
import { Form, Input, Button, message, Spin, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import smallcarimg from "../../assets/images/car_mini_small.png";
import "./index.scss";
import BookingForm from "../bookingSecondStep";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useLocation } from "react-router-dom";
import moment from "moment";
import piccologo from "../../assets/images/logo.png";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";
import { Col, Container, Row } from "react-bootstrap";
import API from "../../config/api";


const BookingThird = (props: any) => {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const {
    pickUpLoc,
    dropOffLoc,
    pickUpDate,
    dropOffDate,
    timeOfPickup,
    pickUpTime,
    carDetails,
    tripType,
    selectedRoute,
    RentPlace,
    modes,
    modesecond,
    userfrom,
    userName,
    modesSecondary,
    RentalTime,
    RentalDate,
    airport,
  } = location.state;
  console.log(location)

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const formattedDate = moment(pickUpDate).format("YYYY-MM-DD");

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      const requestBody = {
        userId: 1,
        bookType: modes || modesecond || modesSecondary,
        tripStatus: tripType || "roundTrip",
        pickUpDate: tripType === "rentals" ? RentalDate : formattedDate,
        dropOffDate: "2023-08-02T12:00:00Z",
        pickUpLat: 37.7749,
        pickUpLng: -122.4194,
        pickUpLoc: selectedRoute?.place || RentPlace || userfrom || "",
        pickUpCity: "",
        pickUpAddress: values.PickupAddress,
        dropOffCity: "",
        dropOffAddress: values.DropAddress,
        dropOffLat: 37.7749,
        dropOffLng: -122.4194,
        dropOffLoc: selectedRoute?.location || "",
        pickUpTime: tripType === "rentals" ? RentalTime : timeOfPickup || "",
        hours: tripType === "rentals" ? parseInt(props.Package?.hrs) : 0,
        kms:
          tripType === "rentals"
            ? parseInt(props.Package?.kilometer)
            : parseInt(selectedRoute.kilometer),
        estimatedAmt:
          props.selectedCar.name === "Compact Mini"
            ? selectedRoute?.miniPrice +
            (tripType === "roundTrip" ? selectedRoute.miniPrice : null) ||
            props.selectedCar.price
            : props.selectedCar.name === "Executive Sedan"
              ? selectedRoute?.sedanPrice +
              (tripType === "roundTrip" ? selectedRoute.sedanPrice : null) ||
              props.selectedCar.price
              : props.selectedCar.name === "Spacious SUV"
                ? selectedRoute?.suvPrice +
                (tripType === "roundTrip" ? selectedRoute.suvPrice : null) ||
                props.selectedCar.price
                : props.selectedCar.name === "Innova SUV"
                  ? selectedRoute?.innovaPrice +
                  (tripType === "roundTrip" ? selectedRoute.innovaPrice : null) ||
                  props.selectedCar.price
                  : props.selectedCar.name === "Innova Crysta"
                    ? selectedRoute?.crystaPrice +
                    (tripType === "roundTrip" ? selectedRoute.crystaPrice : null) ||
                    props.selectedCar.price
                    : props.selectedCar.name === "Tempo Traveller"
                      ? selectedRoute?.TempoTravellerPrice +
                      (tripType === "roundTrip"
                        ? selectedRoute.TempoTravellerPrice
                        : null) || props.selectedCar.price
                      : selectedRoute?.traveller18Price +
                      (tripType === "roundTrip"
                        ? selectedRoute.traveller18Price
                        : null) || props.selectedCar.price,
        // ? props.selectedCar.price
        // : null,
        returnDate: "2023-08-02T12:00:00Z",
        rentallPack: 1,
        car: "",
        PiccoCar: props.selectedCar.name,
        AirportStatus: airport || "",
        carType: "",
        comments: values.Comments,
        userName: values.name,
        phoneNumber: values.Phone,
        email: values.email,
        driver: "",
        adminStatus: "roaming",
        status: "Trip Created",
      };
      const response = await fetch(
        API.BASE_URL + API.CREATE_BOOKING,
        // "https://piccocabs-server-46642b82a774.herokuapp.com/Booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();
      setLoading(false);
      setIsModalOpen(true);
      setTimeout(() => {
        setIsModalOpen(false);
        window.history.back();
      }, 2000);
    } catch (error) {
      console.error("API Error:", error);
      setLoading(false);

      try {
        const errorRequestBody = {
          userId: 1,
          bookType: modes || modesecond,
          tripStatus: tripType || "roundTrip",
          pickUpDate: formattedDate,
          dropOffDate: "2023-08-02T12:00:00Z",
          pickUpLat: 37.7749,
          pickUpLng: -122.4194,
          pickUpLoc: selectedRoute?.place || RentPlace || "",
          dropOffLat: 37.7749,
          dropOffLng: -122.4194,
          dropOffLoc: selectedRoute?.location || "",
          pickUpTime: timeOfPickup || "",
          hours: parseInt(props.Package?.hrs) || 0,
          kms: parseInt(props.Package?.kilometer) || 0,
          estimatedAmt:
            props.selectedCar.name === "Compact Mini"
              ? selectedRoute?.miniPrice +
              (tripType === "roundTrip" ? selectedRoute.miniPrice : null)
              : props.selectedCar.name === "Executive Sedan"
                ? selectedRoute?.sedanPrice +
                (tripType === "roundTrip" ? selectedRoute.sedanPrice : null)
                : props.selectedCar.name === "Spacious SUV"
                  ? selectedRoute?.suvPrice +
                  (tripType === "roundTrip" ? selectedRoute.suvPrice : null)
                  : props.selectedCar.name === "Innova SUV"
                    ? selectedRoute?.innovaPrice +
                    (tripType === "roundTrip" ? selectedRoute.innovaPrice : null)
                    : props.selectedCar.name === "Innova Crysta"
                      ? selectedRoute?.crystaPrice +
                      (tripType === "roundTrip" ? selectedRoute.crystaPrice : null)
                      : props.selectedCar.name === "Tempo Traveller"
                        ? selectedRoute?.TempoTravellerPrice +
                        (tripType === "roundTrip"
                          ? selectedRoute.TempoTravellerPrice
                          : null)
                        : selectedRoute?.traveller18Price,
          rentallPack: 1,
          car: 1,
          comments: values.Comments,
          PiccoCar: props.selectedCar.name,
          AirportStatus: airport || "",
          phoneNumber: values.Phone,
          userName: values.name,
          email: values.email,
        };

        const errorResponse = await fetch(
          API.BASE_URL + API.CREATE_BOOKINGATTEMPT,
          // "https://piccocabs-server-46642b82a774.herokuapp.com/booking-attempt",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(errorRequestBody),
          }
        );

        const errorData = await errorResponse.json();
        console.log("Error API Response:", errorData);
      } catch (error) {
        console.error("Error API Error:", error);
      }
    }
  };
  const Data = {
    labelCol: { span: 4 },
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", width: "100%", }}>
        <Container>
          
            <div style={{ width: "100%", textAlign: "center" }}><p className="contactBox-tex1">Let's Get a Safe Ride</p></div>
            <Row className="g-0">
              <Col md={6}>
                <div className="contact-box3">
                  <label className="formLabel">ITINERARY</label>
                    <Input
                      readOnly
                      value={
                        RentPlace
                          ? `${RentPlace} ${selectedRoute?.place}`
                          : `${selectedRoute?.place} to ${selectedRoute?.location}`
                      }
                    />
                    <br/>
                  <label className="formLabel">PICKUP DATE</label>
                    <Input
                      readOnly
                      value={`${moment(formattedDate).format("Do MMMM YYYY")} at ${timeOfPickup}`}
                    />
                    <br/>

                  <label className="formLabel">CAR TYPE</label>
                    <Input readOnly value={props.selectedCar.name} />
                    <br/>

                  <label className="formLabel">KM</label>
                    <Input readOnly value={props?.selectedCar?.distance} />
                    <br/>

                  <label className="formLabel">TOTAL FARE</label>
                    <Input readOnly value={` ₹ ${props?.selectedCar?.price}`} />
                    <br/>

                </div>

              </Col>
              <Col md={6}>
                <div className="contact-box3">
                <Form onFinish={onFinish}>
                  <Form.Item name="name">
                    <Input placeholder="Name"></Input>
                  </Form.Item>
                  <Form.Item name="email">
                    <Input placeholder="Email"/>
                  </Form.Item>
                  <Form.Item name="Phone">
                    <Input placeholder="Phone"></Input>
                  </Form.Item>
                  <Form.Item name="PickupAddress">
                    <Input placeholder="PICKUP ADDRESS"></Input>
                  </Form.Item>
                  <Form.Item name="DropAddress">
                    <Input placeholder="DROP ADDRESS"></Input>
                  </Form.Item>
                  <Form.Item name="Comments">
                    <Input.TextArea
                      style={{ width: "100%" }}
                      rows={3}
                      placeholder="MESSAGE"
                    ></Input.TextArea>
                  </Form.Item>
                  <Button
                    htmlType="submit"
                    className="contactBox-btn"
                        
                  >
                    Book Now
                  </Button>
                  </Form>
                </div>
              </Col>
                {isModalOpen ? (
                <Modal
                  title="Basic Modal"
                  open={isModalOpen}
                  onOk={handleOk}
                  closable={false}
                  width={300}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "200px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      paddingBottom: "20px",
                    }}
                  >
                    <img
                      src={piccologo}
                      style={{ width: "50%", height: "200px" }}
                    />
                    <h6>Booking Successfully.</h6>
                  </div>
                </Modal>
              ) : null}
            </Row>
        </Container>
      </div>
    </>
  );
};

export default BookingThird;
