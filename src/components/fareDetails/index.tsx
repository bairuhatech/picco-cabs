// import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { IoMdArrowRoundBack } from "react-icons/io";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./index.scss";
import { useLocation } from "react-router";

const FareModal = (props: any) => {
  const location = useLocation();
  console.log("props vannkko======", location);
  const { selectedRoute, tripType } = location.state;

  return (
    <>
      <Modal open={props.open} onCancel={props.close} footer={null}>
        <div>
          <Col
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
            md={12}
          >
            <div className="card-Divss">
              <div className="FaredetailDiv">
                <p style={{ fontSize: "20px" }}>Fare Details</p>
              </div>
              <div className="content-Div">
                <div className="basefare-Div">
                  Base Fare
                  <div
                    style={{ justifyContent: "end", display: "flex" }}
                    className="baseFare-price"
                  >
                    ₹
                    {props.selectedVeh.name === "Compact Mini"
                      ? selectedRoute?.miniPrice +
                        (tripType === "roundTrip"
                          ? selectedRoute.miniPrice
                          : null)
                      : props.selectedVeh.name === "Executive Sedan"
                      ? selectedRoute?.sedanPrice +
                        (tripType === "roundTrip"
                          ? selectedRoute.sedanPrice
                          : null)
                      : props.selectedVeh.name === "Spacious SUV"
                      ? selectedRoute?.suvPrice +
                        (tripType === "roundTrip"
                          ? selectedRoute.suvPrice
                          : null)
                      : props.selectedVeh.name === "Innova SUV"
                      ? selectedRoute?.innovaPrice +
                        (tripType === "roundTrip"
                          ? selectedRoute.innovaPrice
                          : null)
                      : props.selectedVeh.name === "Innova Crysta"
                      ? selectedRoute?.crystaPrice +
                        (tripType === "roundTrip"
                          ? selectedRoute.crystaPrice
                          : null)
                      : props.selectedVeh.name === "Tempo Traveller"
                      ? selectedRoute?.TempoTravellerPrice +
                        (tripType === "roundTrip"
                          ? selectedRoute.TempoTravellerPrice
                          : null)
                      : selectedRoute?.traveller18Price +
                        (tripType === "roundTrip"
                          ? selectedRoute.traveller18Price
                          : null)}
                  </div>
                </div>

                <div className="Driverallowence-Div">
                  Driver Allowance
                  <div
                    style={{ justifyContent: "end", display: "flex" }}
                    className="DriverAloowence"
                  >
                    ₹300
                  </div>
                </div>

                <div className="Totelfare-Div">
                  Totel fare
                  <br />
                  included KM
                  <div
                    style={{ justifyContent: "end", display: "flex" }}
                    className="TotelPrice"
                  >
                    <p style={{ fontSize: "17px" }}>
                      ₹
                      {props.selectedVeh.name === "Compact Mini"
                    ? selectedRoute?.miniPrice +
                      (tripType === "roundTrip"
                        ? selectedRoute.miniPrice
                        : null) +
                      300
                    : props.selectedVeh.name === "Executive Sedan"
                    ? selectedRoute?.sedanPrice +
                      (tripType === "roundTrip"
                        ? selectedRoute.sedanPrice
                        : null) +
                      300
                    : props.selectedVeh.name === "Spacious SUV"
                    ? selectedRoute?.suvPrice +
                      (tripType === "roundTrip"
                        ? selectedRoute.suvPrice
                        : null) +
                      300
                    : props.selectedVeh.name === "Innova SUV"
                    ? selectedRoute?.innovaPrice + 
                    (tripType === "roundTrip"
                        ? selectedRoute.innovaPrice
                        : null) +
                      300
                    : props.selectedVeh.name === "Innova Crysta"
                    ? selectedRoute?.crystaPrice + 
                    (tripType === "roundTrip"
                        ? selectedRoute.crystaPrice
                        : null) +
                      300
                    : props.selectedVeh.name === "Tempo Traveller"
                    ? selectedRoute?.TempoTravellerPrice + 
                    (tripType === "roundTrip"
                        ? selectedRoute.TempoTravellerPrice
                        : null) +
                      300
                    : selectedRoute?.traveller18Price + 
                    (tripType === "roundTrip" ? selectedRoute.traveller18Price : null) +
                    300
                    }
                    </p>{" "}
                    <br />
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="exclusion-Div">
                  <b>Exclusion</b>
                  <ul>
                    <li>toll & permit charge</li>

                    <li>Extra Kilometer Charge</li>

                    <li>Parking charges</li>

                    <li>Multiple pickup/drops</li>

                    <li>State Tax</li>

                    <li>Driver night allowence</li>
                  </ul>
                </div>
                <div className="Amenities-Div">
                  <b>Amenities</b>
                  <ul>
                    <li>Seats</li>

                    <li>Bags</li>

                    <li>AC</li>

                    <li>Mobile Charger</li>

                    <li>Music System</li>

                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </div>
      </Modal>
    </>
  );
};

export default FareModal;
