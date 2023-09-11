import React, { useState } from "react";
import classes from "./index.module.scss";
import OneWay from "./Forms/outstation";
import Airports from "./Forms/airpot";
import Container from "react-bootstrap/esm/Container";
import "./index.module.scss";
import Rentals from "./Forms/rentals";
import Roundtrip from "./Forms/roundTrip";

const FirstStep = () => {
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

  return (
    <Container
      fluid
      className={` ${classes["bg-picco-banner"]} position-relative d-flex justify-content-center `}
    >
      <div
        style={{
          zIndex: 3,
          position: "absolute",
          top: 120,
          backgroundColor: "#ffff",
          borderRadius: "12px",
          height: "fit-content",
          width: "80%",
          padding: "20px",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
        // className={`rounded-3 bg-light ${
        //   classes["banner-position-absolute"]
        // } ${!baseUrl ? "shadow" : ""}`}
      >
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
          <OneWay types={formType} />
        ) : formType === "rentals" ? (
          <Rentals types={formType} />
        ) : formType === "roundTrip" ? (
          <Roundtrip types={formType} />
        ) : formType === "airports" ? (
          <Airports types={formType} />
        ) : null}
      </div>
    </Container>
  );
};

export default FirstStep;
