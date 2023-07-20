import React, { useState } from "react";
import { Button, Modal, Input } from "antd";
import piccocabsimg from "../../assets/images/logo.png";
import { InputGroup, Form } from "react-bootstrap";
import "./index.scss";

const CustomModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);
  const [otpInput, setOtpInput] = useState(false);

  const handleNumberSubmit = () => {
    if (phoneNumber.length === 0) {
      setError(true);
    } else if (phoneNumber.length === 10) {
      setError(false);
      setOtpInput(true);
    } else {
      setError(true);
    }
  };

  const handlePhoneChange = (e: any) => {
    setPhoneNumber(e.target.value);
  };
  return (
    <>
      <Button onClick={showModal}>Open Modal</Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <div className="piccocabsmodal_Maindiv">
            <div className="piccocabsmodal_Maindiv2">
              <div>
                <div className="piccocabsimg-Div">
                  <img
                    className="piccocabsimgotp"
                    src={piccocabsimg}
                    alt="Logo"
                  />
                </div>
              </div>
              <div className="piccocab-text-loginwithotp-Div">
                <h1 className="login-with-otp">Login with OTP</h1>
              </div>
              <br />
              <div className="piccocab-inputfield-Div">
                <InputGroup style={{ width: "70%" }}>
                  <InputGroup.Text className="piccocabsinputfield">
                    +91
                  </InputGroup.Text>

                  <Input
                    className="form-control"
                    type="number"
                    defaultValue={phoneNumber}
                    placeholder="Enter your mobile number"
                    onChange={handlePhoneChange}
                  />
                </InputGroup>
              </div>
              <br />
              {otpInput && (
                <div className="piccocabsotpinputfield-Div">
                  <InputGroup>
                    <InputGroup.Text className="piccocabsinputfield">
                      OTP
                    </InputGroup.Text>
                    <Form.Control
                      className="input-otpfield"
                      placeholder="Enter OTP"
                      type="number"
                    />
                  </InputGroup>
                  <Button
                    className="piccocabssendotp-Button"
                    onClick={handleNumberSubmit}
                  >
                    Submit
                  </Button>{" "}
                </div>
              )}

              <br />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button
                  type="primary"
                  style={{
                    width: "70%",
                    backgroundColor: "rgb(107, 181, 70)",
                    display: "flex",
                    height: 45,
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                  onClick={handleNumberSubmit}
                >
                  Send OTP
                </Button>{" "}
                {error && (
                  <p style={{ color: "red", marginTop: "10px" }}>
                    Please enter your mobile number
                  </p>
                )}
              </div>
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    width: "72%",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <p>
                    We will send you a One Time Password (OTP) on your
                    registered mobile number to reset.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CustomModal;
