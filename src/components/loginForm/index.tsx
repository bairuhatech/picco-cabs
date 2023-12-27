import React, { useState, useEffect } from "react";
import { Modal, Input, message, Spin } from "antd";
import piccocabsimg from "../../assets/images/logo.png";
import { InputGroup, Form } from "react-bootstrap";
import "./index.scss";
import Button from "./components/button";
import { auth } from "../../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { bookingLogin } from "../../store/loginSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import { Loading3QuartersOutlined } from "@ant-design/icons";

const CustomModal = (props: any) => {
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);
  const [step, setstep] = useState("number");
  const [otpInput, setOtpInput] = useState(false);
  const [user, setUser] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  // const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User details:", user);
    } else {
      console.log("No user is signed in.");
    }
  });

  const sendOtp = async () => {
    setIsLoading(true);
    if (phoneNumber.length === 0) {
      setError(true);
    } else if (phoneNumber.length === 12) {
      setError(false);
      setOtpInput(true);
    } else {
      setError(true);
    }
    try {
      let recaptchaVerifier = await new RecaptchaVerifier(auth, "recaptcha", {
        size: "invisible",
      });
      let confirmation: any = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        recaptchaVerifier
      );
      console.log(confirmation);
      setstep("otp");
      // setOtpInput(true);
      setUser(confirmation);
    } catch (err) {
      message.error("Unable to send OTP");
      setIsLoading(false);
      console.log(err);
    }
  };

  const verifyOtp = async () => {
    try {
      if (await user.confirm(otp)) {
        alert("login successfully");
        dispatch(bookingLogin(user));
        setstep("email");
      }
    } catch (err: any) {
      console.log("Error Otp", err);
      try {
        const errorRequestBody = {
          id: 0,
          name: "",
          email: "",
          phoneNumber: phoneNumber,
        };

        const errorResponse = await fetch(
          "https://piccocabs-server-46642b82a774.herokuapp.com/Loginattempts",
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
        console.error("Error API Error ", error);
      }
      alert("invalid otp");
    }
  };

  const handleSubmit = () => {
    Useradmindata();

    alert("login successfully");

    props.handleCancel();
  };

  const Useradmindata = async () => {
    try {
      const reqBody = {
        id: 0,
        name: name,
        email: email,
        phoneNumber: phoneNumber,
      };
      console.log("Request Body:", reqBody);

      const response = await fetch(
        "https://piccocabs-server-46642b82a774.herokuapp.com/User/find-by-number",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reqBody),
        }
      );

      const data = await response.json();
      console.log("API Response:", data);
      message.success("Booking successful!");
    } catch (error) {
      console.error("API Error:", error);
    }
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
                    className="piccocabsimg otp"
                    src={piccocabsimg}
                    alt="Logo"
                  />
                </div>
              </div>
              <div className="piccocab-text-loginwithotp-Div">
                <h1 className="login-with-otp">Login with OTP</h1>
              </div>
              <br />
              {/* {otpInput ? ( */}
              {step === "otp" ? (
                <div className="piccocabsotpinputfield-Div">
                  <div
                    style={{
                      width: "70%",
                      height: "30px",
                      display: "contents",
                    }}
                  >
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => setOtpInput(false)}
                    >
                      OTP send to {phoneNumber}
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
                      inputMode="numeric" // Add this line to remove spinner
                      onChange={(e: any) => setOtp(e.target.value)}
                    />
                  </InputGroup>

                  <br />
                  <Button text="Submit" onClick={verifyOtp} />
                  <span style={{ cursor: "pointer" }}>Resend</span>
                </div>
              ) : step === "number" ? (
                <div className="piccocab-inputfield-Div">
                  <InputGroup style={{ width: "70%" }}>
                    <InputGroup.Text className="piccocabsinputfield">
                      +91
                    </InputGroup.Text>
                    <Input
                      className="form-control"
                      type="text" // Change the input type to text
                      defaultValue={phoneNumber}
                      placeholder="Enter your mobile number"
                      style={{ backgroundColor: "#e9ecef" }}
                      onChange={(e: any) =>
                        setPhoneNumber(`+91 ${e.target.value}`)
                      }
                      inputMode="numeric" // Set inputMode to "numeric"
                    />
                  </InputGroup>

                  <br />
                  {/* {!otpInput && ( */}
                  <div className="piccocabssendotp-input">
                    <Button
                      className="piccocabssendotp-button"
                      text={
                        isLoading ? (
                          <Spin
                            indicator={
                              <Loading3QuartersOutlined
                                spin
                                style={{ color: "white" }}
                              />
                            }
                          />
                        ) : (
                          "Send OTP"
                        )
                      }
                      onClick={sendOtp}
                      disabled={isLoading} // Disable the button while loading
                    />
                    <div id="recaptcha"></div>
                    {/* {error && (
                      <p className="piccocabserrornotification">
                        OTP Sended Succesfully
                      </p>
                    )} */}
                  </div>
                  {/* )} */}
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
              ) : step === "email" ? (
                <div
                  className="piccocabsnameemailinputfield-Div"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <InputGroup style={{ width: "70%" }}>
                    <InputGroup.Text className="piccocabsinputfield">
                      Name
                    </InputGroup.Text>
                    <Form.Control
                      className="input-namefield"
                      placeholder="Enter Name"
                      type="text"
                      style={{ backgroundColor: "#e9ecef" }}
                      value={name}
                      onChange={(e: any) => setName(e.target.value)}
                    />
                  </InputGroup>
                  <br />
                  <InputGroup style={{ width: "70%" }}>
                    <InputGroup.Text className="piccocabsinputfield">
                      Email
                    </InputGroup.Text>
                    <Form.Control
                      className="input-emailfield"
                      placeholder="Enter Email"
                      type="email"
                      style={{ backgroundColor: "#e9ecef" }}
                      // value={email}
                      onChange={(e: any) => setEmail(e.target.value)}
                    />
                  </InputGroup>
                  <br />
                  <Button
                    text="Submit"
                    onClick={() => {
                      handleSubmit();
                    }}
                  />
                </div>
              ) : step === "success" ? (
                <div className="">Success</div>
              ) : null}

              <br />

              <div></div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CustomModal;
