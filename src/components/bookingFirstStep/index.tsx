import React, { useEffect, useState } from "react";
import classes from "./index.module.scss";
import OneWay from "./Forms/outstation";
import Airports from "./Forms/airpot";
import Container from "react-bootstrap/esm/Container";
import "./index.module.scss";
import Rentals from "./Forms/rentals";
import Roundtrip from "./Forms/roundTrip";
import { Col, Row } from "react-bootstrap";

const FirstStep = () => {
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
    outstations: OneWay,
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
      setWidth("80%");
    }
  }, []);

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
          width: width,
          padding: "20px",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
        id="anshab"
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
          <OneWay types={formType} />
        ) : formType === "rentals" ? (
          <Rentals types={formType} />
        ) : formType === "roundTrip" ? (
          <Roundtrip types={formType} />
        ) : formType === "airports" ? (
          <Airports types={formType} />
        ) : null}
        {/* Render the corresponding form based on the selected formType */}
      </div>
    </Container>
  );
};

export default FirstStep;
