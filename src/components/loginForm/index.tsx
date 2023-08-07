// import React, { useState, useEffect } from "react";
// import { Modal, Input, message } from "antd";
// import piccocabsimg  from "../../assets/images/logo.png";
// import { InputGroup, Form } from "react-bootstrap";
// import "./index.scss";
// import Button from "./components/button";
// import { auth } from "../../config/firebase";
// import {
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
//   signOut,
// } from "firebase/auth";
// const CustomModal = (props: any) => {
//   const [otp, setOtp] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [error, setError] = useState(false);
//   const [otpInput, setOtpInput] = useState(false);
//   const [user, setUser] = useState<any>(null);

//   const handlePhoneChange = (e: any) => {
//     if (phoneNumber.length === 0) {
//       setError(true);
//     } else if (phoneNumber.length === 12) {
//       setError(false);
//       setOtpInput(true);
//     } else {
//       setError(true);
//     }
//   };

//   console.log(auth.currentUser, "=========auth.currentUser======");

//   const sendOtp = async () => {
//     if (phoneNumber.length === 0) {
//       setError(true);
//     } else if (phoneNumber.length === 12) {
//       setError(false);
//       setOtpInput(true);
//     } else {
//       setError(true);
//     }
//     try {
//       let recaptchaVerifier = await new RecaptchaVerifier(
//         auth,
//         "recaptcha",
//         {}
//       );
//       let confirmation: any = await signInWithPhoneNumber(
//         auth,
//         phoneNumber,
//         recaptchaVerifier
//       );
//       // setOtpInput(true);
//       console.log(confirmation);
//       setUser(confirmation);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   console.log(">>>>>>>>>>>>>>>>>>>>user>>>>>>>", user);
//   const verifyOtp = async () => {
//     try {
//       await user.confirm(otp);
//       message.success("Successfully logged in with OTP.");
//       props.handleCancel();
//     } catch (err) {
//       console.log(err);
//       message.error("Invalid OTP. Please try again.");
//     }
//   };

//   const logoutOtp = async () => {
//     await signOut(auth);
//   };
//   return (
//     <>
//       <Modal open={props.isModalOpen} onCancel={props.handleCancel}>
//         <div>
//           <div className="piccocabsmodal_Maindiv">
//             <div className="piccocabsmodal_Maindiv2">
//               <div>
//                 <div className="piccocabsimg -Div">
//                   <img
//                     className="piccocabsimg otp"
//                     src={piccocabsimg }
//                     alt="Logo"
//                   />
//                 </div>
//               </div>
//               <div className="piccocab-text-loginwithotp-Div">
//                 <h1 className="login-with-otp">Login with OTP</h1>
//               </div>
//               <br />
//               {otpInput ? (
//                 <div className="piccocabsotpinputfield-Div">
//                   <div
//                     style={{
//                       width: "70%",
//                       height: "30px",
//                       display: "contents",
//                     }}
//                   >
//                     <p
//                       style={{ cursor: "pointer" }}
//                       onClick={() => setOtpInput(false)}
//                     >
//                       OPT send to {phoneNumber}
//                     </p>
//                   </div>
//                   <Form>
//                     <InputGroup>
//                       <InputGroup.Text className="piccocabsinputfield">
//                         OTP
//                       </InputGroup.Text>
//                       <Form.Control
//                         id="aaa"
//                         className="input-otpfield"
//                         placeholder="Enter OTP"
//                         type="number"
//                         style={{ backgroundColor: "#e9ecef" }}
//                         onChange={(e: any) => setOtp(e.target.value)}
//                       />
//                     </InputGroup>
//                     <br />

//                     <Button
//                       for="aaa"
//                       text="Submit"
//                       onClick={verifyOtp}
//                       style="100"
//                     />
//                   </Form>
//                   <span style={{ cursor: "pointer" }}>Resend</span>
//                 </div>
//               ) : (
//                 <div className="piccocab-inputfield-Div">
//                   <InputGroup style={{ width: "70%" }}>
//                     <InputGroup.Text className="piccocabsinputfield">
//                       +91
//                     </InputGroup.Text>

//                     <Input
//                       className="form-control"
//                       type="number"
//                       defaultValue={phoneNumber}
//                       placeholder="Enter your mobile number"
//                       style={{ backgroundColor: "#e9ecef" }}
//                       onChange={(e: any) =>
//                         setPhoneNumber(`+91 ${e.target.value}`)
//                       }
//                     />
//                   </InputGroup>
//                 </div>
//               )}

//               <br />
//               {!otpInput && (
//                 <div className="piccocabssendotp-input">
//                   <Button
//                     className="piccocabssendotp-button"
//                     text="Send OTP"
//                     onClick={sendOtp}
//                   />
//                   <div id="recaptcha"></div>
//                   {error && (
//                     <p className="piccocabserrornotification">
//                       Please enter your mobile number
//                     </p>
//                   )}
//                 </div>
//               )}
//               <br />
//               <div className="piccocabsfootertxt-Div">
//                 <div className="piccocabsfootertxt">
//                   <p>
//                     We will send you a One Time Password (OTP) on your
//                     registered mobile number to login.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default CustomModal;

import React, { useState, useEffect } from "react";
import { Modal, Input, message } from "antd";
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
const CustomModal = (props: any) => {
  const [otp, setOtp] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);
  const [otpInput, setOtpInput] = useState(false);
  const [user, setUser] = useState<any>();
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
      setOtpInput(true);
      setUser(confirmation);
    } catch (err) {
      console.log(err);
    }
  };

  const verifyOtp = async () => {
    try {
      if (await user.confirm(otp)) {
        alert("login successfully");
        dispatch(bookingLogin(user));
      }
    } catch (err: any) {
      console.log("Error Otp", err);
      alert("invalid otp");
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
              {otpInput ? (
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
                      OPT send to {phoneNumber}
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
                      onChange={(e: any) => setOtp(e.target.value)}
                    />
                  </InputGroup>
                  <br />

                  <Button text="Submit" onClick={verifyOtp} />
                  <span style={{ cursor: "pointer" }}>Resend</span>
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
                      onChange={(e: any) =>
                        setPhoneNumber(`+91 ${e.target.value}`)
                      }
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
                    onClick={sendOtp}
                  />
                  <div id="recaptcha"></div>
                  {error && (
                    <p className="piccocabserrornotification">
                      OTP Sended Succesfully
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
