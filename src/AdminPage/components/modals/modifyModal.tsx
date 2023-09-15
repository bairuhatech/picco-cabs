import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import OutStation from "../../../components/bookingFirstStep/Forms/outstation";
import Airports from "../../../components/bookingFirstStep/Forms/airpot";
import Rentals from "../../../components/bookingFirstStep/Forms/rentals";
import Roundtrip from "../../../components/bookingFirstStep/Forms/roundTrip";
import { Modal } from "antd";

function ModifyModal(props: any) {
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

  const propsedvalue = props.selectedRoute;
  const selectedDate = props.pickUpDate;
  const selectedTime = props.timeOfPickup;
  const dropDate = props.dropOffDate;
  const onClose = props.onHide;

  const baseUrl = document.baseURI.includes("booking");

  return (
    <Modal open={props.show} onCancel={props.onHide} width={1000} centered>
      <div>
        <div className="d-flex justify-content-center">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
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
              htmlFor="btnradio1"
            >
              ONE WAY
            </label>
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio3"
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
              htmlFor="btnradio3"
            >
              ROUND TRIP
            </label>
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
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
              htmlFor="btnradio2"
            >
              RENTALS
            </label>
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio4"
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
              htmlFor="btnradio4"
            >
              AIRPORTS
            </label>
          </div>
        </div>
        {formType === "outstations" ? (
          <OutStation
            types={formType}
            selectedProps={propsedvalue}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onClose={onClose}
          />
        ) : formType === "rentals" ? (
          <Rentals
            types={formType}
            selectedProps={propsedvalue}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onClose={onClose}
          />
        ) : formType === "roundTrip" ? (
          <Roundtrip
            types={formType}
            selectedProps={propsedvalue}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            dropDate={dropDate}
            onClose={onClose}
          />
        ) : formType === "airports" ? (
          <Airports
            types={formType}
            selectedProps={propsedvalue}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onClose={onClose}
          />
        ) : null}
      </div>
      {/* </Container> */}
    </Modal>
  );
}
export default ModifyModal;
