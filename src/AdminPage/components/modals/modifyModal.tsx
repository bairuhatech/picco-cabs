import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import OutStation from "../../../components/bookingFirstStep/Forms/outstation";
import Airports from "../../../components/bookingFirstStep/Forms/airpot";
import Rentals from "../../../components/bookingFirstStep/Forms/rentals";
import Roundtrip from "../../../components/bookingFirstStep/Forms/roundTrip";
import { Modal } from "antd";
import { Col, Row } from "react-bootstrap";

function ModifyModal(props: any) {
  const [width, setWidth] = React.useState("");

  const [formType, setFormType] = useState("outstations");

  const radioBtn1ClickHandler = () => {
    setFormType("outstations");
  };

  const radioBtn2ClickHandler = () => {
    setFormType("rentals");
  };

  const radioBtn3ClickHandler = () => {
    setFormType("airports");
  };

  const radioBtn4ClickHandler = () => {
    setFormType("roundTrip");
  };

  const baseUrl = document.baseURI.includes("booking");

  const Views: any = {
    outstations: OutStation,
    rentals: Rentals,
    roundTrip: Roundtrip,
    airports: Airports,
  };
  const CurrentView = Views[formType];
  console.log("CurrentView", CurrentView);

  useEffect(() => {
    const MediaQuary = window.matchMedia("(max-width:600px)");
    if (MediaQuary.matches) {
      setWidth("97%");
    } else {
      setWidth("100%");
    }
  }, []);

  const propsedvalue = props.selectedRoute;
  const selectedDate = props.pickUpDate;
  const selectedTime = props.timeOfPickup;
  const dropDate = props.dropOffDate;
  const onClose = props.onHide;


  return (
    <Modal open={props.show} onCancel={props.onHide} width={1000} centered>
       
      <div
        style={{
          zIndex: 3,
          // top: 120,
          backgroundColor: "#ffff",
          borderRadius: "12px",
          height: "fit-content",
          width: width,
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <div className="d-flex justify-content-center">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <Row
              style={{
                display: "flex",
              }}
            >
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="formType"
                  id="oneWay"
                  autoComplete="off"
                  defaultChecked
                  onClick={radioBtn1ClickHandler}
                />
                <label
                  style={{
                    width: "150px",
                    fontWeight: 500,
                    fontSize: "15px",
                    height: "35px",
                  }}
                  className={`btn btn-outline-success border border-2 border-success`}
                  htmlFor="oneWay"
                >
                  ONE WAY
                </label>
                &nbsp; &nbsp;
                <input
                  type="radio"
                  className="btn-check"
                  name="formType"
                  id="roundTrip"
                  autoComplete="off"
                  onClick={radioBtn4ClickHandler}
                />
                <label
                  style={{
                    width: "150px",
                    fontWeight: 500,
                    fontSize: "15px",
                    height: "35px",
                  }}
                  className="btn btn-outline-success border border-2 border-success "
                  htmlFor="roundTrip"
                >
                  ROUND TRIP
                </label>
              </Col>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="formType"
                  id="rentals"
                  autoComplete="off"
                  onClick={radioBtn2ClickHandler}
                />
                <label
                  style={{
                    width: "150px",
                    fontWeight: 500,
                    fontSize: "15px",
                    height: "35px",
                  }}
                  className="btn btn-outline-success border border-2 border-success "
                  htmlFor="rentals"
                >
                  RENTALS
                </label>
                &nbsp; &nbsp;
                <input
                  type="radio"
                  className="btn-check"
                  name="formType"
                  id="airports"
                  autoComplete="off"
                  onClick={radioBtn3ClickHandler}
                />
                <label
                  style={{
                    width: "150px",
                    fontWeight: 500,
                    fontSize: "15px",
                    height: "35px",
                  }}
                  className="btn btn-outline-success border border-2 border-success "
                  htmlFor="airports"
                >
                  AIRPORTS
                </label>
              </Col>
            </Row>
          </div>
        </div>
    
        {formType === "outstations" ? (
          <OutStation types={formType} 
            selectedProps={propsedvalue}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onClose={onClose}
          />
        ) : formType === "rentals" ? (
          <Rentals types={formType} 
            selectedProps={propsedvalue}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onClose={onClose}
          />
        ) : formType === "roundTrip" ? (
          <Roundtrip types={formType}
          selectedProps={propsedvalue}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            dropDate={dropDate}
            onClose={onClose}
           />
        ) : formType === "airports" ? (
          <Airports types={formType} 
          selectedProps={propsedvalue}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onClose={onClose}
          />
        ) : null}
        {/* Render the corresponding form based on the selected formType */}
      </div>
    </Modal>
  );
}
export default ModifyModal;
