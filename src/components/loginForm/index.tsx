import React, { useState } from "react";
import { Modal, Input } from "antd";
import piccocabsimg from "../../assets/images/logo.png";
import { InputGroup, Form } from "react-bootstrap";
import "./index.scss";
import Button from "./components/button";

const CustomModal = (props: any) => {
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
      <Modal open={props.isModalOpen} onCancel={props.handleCancel}>
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
              {otpInput ? (
                <div className="piccocabsotpinputfield-Div">
                  <div
                    style={{
                      width: "70%",
                      height: "30px",
                    }}
                  >
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => setOtpInput(false)}
                    >
                      wrong phone number ?
                    </p>
                  </div>
                  <InputGroup style={{ width: "70%" }}>
                    <InputGroup.Text className="piccocabsinputfield">
                      OTP
                    </InputGroup.Text>
                    <Form.Control
                      className="input-otpfield"
                      placeholder="Enter OTP"
                      type="number"
                      style={{ backgroundColor: "#e9ecef" }}
                    />
                  </InputGroup>
                  <br />

                  <Button
                    text="Submit"
                    onClick={() => setOtpInput(!otpInput)}
                  />
                </div>
              ) : (
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
                      style={{ backgroundColor: "#e9ecef" }}
                      onChange={handlePhoneChange}
                    />
                  </InputGroup>
                </div>
              )}

              <br />
              {!otpInput && (
                <div className="piccocabssendotp-input">
                  <Button
                    className="piccocabssendotp-button"
                    text="Send OTP"
                    onClick={handleNumberSubmit}
                  />
                  {error && (
                    <p className="piccocabserrornotification">
                      Please enter your mobile number
                    </p>
                  )}
                </div>
              )}
              <br />
              <div className="piccocabsfootertxt-Div">
                <div className="piccocabsfootertxt">
                  <p>
                    We will send you a One Time Password (OTP) on your
                    registered mobile number to login.
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
