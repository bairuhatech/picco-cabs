// import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { IoMdArrowRoundBack } from "react-icons/io";
import React, { useState } from "react";
import { Button, Modal } from "antd";

import "./index.scss";

const FareModal = (props: any) => {
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
                {/* <div className="backarrowDiv">
                      <IoMdArrowRoundBack
                        style={{ width: "30px", height: "30px" }}
                      />
                    </div> */}
                <p style={{ fontSize: "20px" }}>Fare deatails</p>
              </div>
              <div className="content-Div">
                <div className="basefare-Div">
                  base fare
                  <div
                    style={{ justifyContent: "end", display: "flex" }}
                    className="baseFare-price"
                  >
                    ₹35376
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
                    <p style={{ fontSize: "17px" }}>₹35676</p> <br />
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
                  Exclusion
                  <ul>
                    <li>toll & permit charge</li>

                    <li>Hill station charge</li>

                    <li>Parking charges</li>

                    <li>Multiple pickup/drops</li>

                    <li>Break and detours</li>

                    <li>Driver night allowence</li>
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
