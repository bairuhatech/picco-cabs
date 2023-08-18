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
  const [name, setName] = useState("");
  const [email, setEmail] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);
  const [step, setstep] = useState("number");
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
      setstep("otp");
      // setOtpInput(true);
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
        // setOtpInput(!otpInput);
        // setEmail(true);
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
      // loginattemptadmin();
      alert("invalid otp");
    }
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

  // const loginattemptadmin = async () => {
  //   try {
  //     const reqBody = {
  //       id: 0,
  //       name: name,
  //       email: email,
  //       phoneNumber: phoneNumber,
  //     };
  //     console.log("Request Body:", reqBody);

  //     const response = await fetch(
  //       "https://piccocabs-server-46642b82a774.herokuapp.com/Loginattempts",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(reqBody),
  //       }
  //     );

  //     const data = await response.json();
  //     console.log("API Response:", data);
  //     message.success("Booking successful!");
  //   } catch (error) {
  //     console.error("API Error:", error);
  //   }
  // };

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
              ) : step === "number" ? (
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
                  <br />
                  {/* {!otpInput && ( */}
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
                      Useradmindata();
                    }}
                  />
                </div>
              ) : step === "success" ? (
                <div className="">Success</div>
              ) : null}

              <br />

              <div>
                {/* {email && (
                  <div className="piccocabsnameemailinputfield-Div">
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

                    <Button text="Submit" />
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CustomModal;
// import React, { useState, useEffect } from "react";
// import { Modal, Input, message } from "antd";
// import piccocabsimg from "../../assets/images/logo.png";
// import { InputGroup, Form } from "react-bootstrap";
// import "./index.scss";
// import Button from "./components/button";
// import { auth } from "../../config/firebase";
// import { useDispatch, useSelector } from "react-redux";
// import { bookingLogin } from "../../store/loginSlice";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
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
//   const [user, setUser] = useState<any>();
//   const [name, setName] = useState(""); // New state for name input
//   const [email, setEmail] = useState(""); // New state for email input
//   const [messageApi, contextHolder] = message.useMessage();
//   const dispatch = useDispatch();

//   // const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       console.log("User details:", user);
//     } else {
//       console.log("No user is signed in.");
//     }
//   });

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
//       let recaptchaVerifier = await new RecaptchaVerifier(auth, "recaptcha", {
//         size: "invisible",
//       });
//       let confirmation: any = await signInWithPhoneNumber(
//         auth,
//         phoneNumber,
//         recaptchaVerifier
//       );
//       console.log(confirmation);
//       setOtpInput(true);
//       setUser(confirmation);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const verifyOtp = async () => {
//     try {
//       if (await user.confirm(otp)) {
//         alert("login successfully");
//         dispatch(bookingLogin(user));
//       }
//     } catch (err: any) {
//       console.log("Error Otp", err);
//       alert("invalid otp");
//     }
//   };

//   return (
//     <>
//       <Modal open={props.isModalOpen} onCancel={props.handleCancel}>
//         <div>
//           <div className="piccocabsmodal_Maindiv">
//             <div className="piccocabsmodal_Maindiv2">
//               <div>
//                 <div className="piccocabsimg-Div">
//                   <img
//                     className="piccocabsimg otp"
//                     src={piccocabsimg}
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
//                   <InputGroup style={{ width: "70%" }}>
//                     <InputGroup.Text className="piccocabsinputfield">
//                       OTP
//                     </InputGroup.Text>
//                     <Form.Control
//                       className="input-otpfield"
//                       placeholder="Enter OTP"
//                       type="number"
//                       style={{ backgroundColor: "#e9ecef" }}
//                       onChange={(e: any) => setOtp(e.target.value)}
//                     />
//                   </InputGroup>
//                   <br />

//                   <Button text="Submit" onClick={verifyOtp} />
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
//                       OTP Sended Succesfully
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

// import React, { useState, useEffect } from "react";
// import { Modal, Input, message } from "antd";
// import piccocabsimg from "../../assets/images/logo.png";
// import { InputGroup, Form } from "react-bootstrap";
// import "./index.scss";
// import Button from "./components/button";
// import { auth } from "../../config/firebase";
// import { useDispatch, useSelector } from "react-redux";
// import { bookingLogin } from "../../store/loginSlice";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import {
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
//   signOut,
// } from "firebase/auth";
// const CustomModal = (props: any) => {
//   const [otp, setOtp] = useState("");

//   const [phonenumber, setPhonenumber] = useState("");
//   const [name, setName] = useState("");
//   const [mail, setMail] = useState(" ");
//   const [error, setError] = useState(false);
//   const [otpInput, setOtpInput] = useState(false);
//   const [user, setUser] = useState<any>();
//   const [messageApi, contextHolder] = message.useMessage();
//   const dispatch = useDispatch();

//   // const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
//   onAuthStateChanged(auth, (user: any) => {
//     if (user) {
//       console.log("User details:", user);
//     } else {
//       console.log("No user is signed in.");
//     }
//   });

//   const sendOtp = async () => {
//     if (phonenumber.length === 0) {
//       setError(true);
//     } else if (phonenumber.length === 12) {
//       setError(false);
//       setOtpInput(true);
//     } else {
//       setError(true);
//     }
//     try {
//       let recaptchaVerifier = await new RecaptchaVerifier(auth, "recaptcha", {
//         size: "invisible",
//       });
//       let confirmation: any = await signInWithPhoneNumber(
//         auth,
//         phonenumber,
//         recaptchaVerifier
//       );
//       console.log(confirmation);
//       setOtpInput(true);
//       setUser(confirmation);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const postNumber = async () => {
//     try {
//       const reqBody = {
//         id: 0,
//         name: name,
//         email: mail,
//         phoneNumber: phonenumber,
//       };
//       console.log("Request Body:", reqBody);

//       const response = await fetch(
//         "https://piccocabs-server-46642b82a774.herokuapp.com/User/find-by-number",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(reqBody),
//         }
//       );

//       const data = await response.json();
//       console.log("API Response:", data);
//       message.success("Booking successful!");
//     } catch (error) {
//       console.error("API Error:", error);
//     }
//   };

// const loginattemptadmin = async () => {
//   try {
//     const reqBody = {
//       id: 0,
//       name: name,
//       email: mail,
//       phoneNumber: phonenumber,
//     };
//     console.log("Request Body:", reqBody);

//     const response = await fetch(
//       "https://piccocabs-server-46642b82a774.herokuapp.com/Loginattempts",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(reqBody),
//       }
//     );

//     const data = await response.json();
//     console.log("API Response:", data);
//     message.success("Booking successful!");
//   } catch (error) {
//     console.error("API Error:", error);
//   }
// };

//   const verifyOtp = async () => {
//     try {
//       if (await user.confirm(otp)) {
//         alert("login successfully");
//         dispatch(bookingLogin(user));
//       }
//     } catch (err: any) {
//       console.log("Error Otp", err);
//       alert("invalid otp");
//     }
//   };

//   return (
//     <>
//       <Modal open={props.isModalOpen} onCancel={props.handleCancel}>
//         <div>
//           <div className="piccocabsmodal_Maindiv">
//             <div className="piccocabsmodal_Maindiv2">
//               <div>
//                 <div className="piccocabsimg-Div">
//                   <img
//                     className="piccocabsimg otp"
//                     src={piccocabsimg}
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
//                       OTP send to {phonenumber}
//                     </p>
//                   </div>
//                   <InputGroup style={{ width: "70%" }}>
//                     <InputGroup.Text className="piccocabsinputfield">
//                       OTP
//                     </InputGroup.Text>
//                     <Form.Control
//                       className="input-otpfield"
//                       placeholder="Enter OTP"
//                       type="number"
//                       style={{ backgroundColor: "#e9ecef" }}
//                       onChange={(e: any) => setOtp(e.target.value)}
//                     />
//                   </InputGroup>
//                   <br />

{
  /* <Button
  text="Submit"
  onClick={() => {
    verifyOtp();
    postNumber();
  }}
/> */
}

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
//                       defaultValue={phonenumber}
//                       placeholder="Enter your mobile number"
//                       style={{ backgroundColor: "#e9ecef" }}
//                       onChange={(e: any) =>
//                         setPhonenumber(`+91 ${e.target.value}`)
//                       }
//                     />
//                   </InputGroup>
//                   <br />
//                   <InputGroup style={{ width: "70%" }}>
//                     <Input
//                       className="form-control"
//                       type="text"
//                       defaultValue={name}
//                       placeholder="Enter Your Name"
//                       style={{ backgroundColor: "#e9ecef" }}
//                       onChange={(e: any) => setName(e.target.value)}
//                     />
//                   </InputGroup>
//                   <br />
//                   <InputGroup style={{ width: "70%" }}>
//                     <Input
//                       className="form-control"
//                       type="text"
//                       placeholder="Enter Your Mail"
//                       style={{ backgroundColor: "#e9ecef" }}
//                       onChange={(e: any) => setMail(e.target.value)}
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
//                     onClick={() => {
//                       sendOtp();
//                       loginattemptadmin();
//                     }}
//                   />
//                   <div id="recaptcha"></div>
//                   {error && (
//                     <p className="piccocabserrornotification">
//                       OTP Sended Succesfully
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

// import React, { useState, useEffect } from "react";
// import { Modal, Input, message } from "antd";
// import piccocabsimg from "../../assets/images/logo.png";
// import { InputGroup, Form } from "react-bootstrap";
// import "./index.scss";
// import Button from "./components/button";
// import { auth } from "../../config/firebase";
// import { useDispatch, useSelector } from "react-redux";
// import { bookingLogin } from "../../store/loginSlice";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import {
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
//   signOut,
// } from "firebase/auth";
// // import Step1 from "./step1";
// // import Step2 from "./step2";
// // import Step3 from "./step3";
// const CustomModal = (props: any) => {
//   const [otp, setOtp] = useState("");
//   const [phonenumber, setPhonenumber] = useState("");
//   const [name, setName] = useState("");
//   const [mail, setMail] = useState(" ");
//   const [error, setError] = useState(false);
//   const [otpInput, setOtpInput] = useState(false);
//   const [user, setUser] = useState<any>();
//   const [messageApi, contextHolder] = message.useMessage();
//   const dispatch = useDispatch();
//   const [isOtpVerified, setIsOtpVerified] = useState(false);

//   const [step, setStep] = useState(1);

//   onAuthStateChanged(auth, (user: any) => {
//     if (user) {
//       console.log("User details:", user);
//     } else {
//       console.log("No user is signed in.");
//     }
//   });

//   const sendOtp = async () => {
//     if (phonenumber.length === 0) {
//       setError(true);
//     } else if (phonenumber.length === 12) {
//       setError(false);
//       setOtpInput(true);
//     } else {
//       setError(true);
//     }
//     try {
//       let recaptchaVerifier = await new RecaptchaVerifier(auth, "recaptcha", {
//         size: "invisible",
//       });
//       let confirmation: any = await signInWithPhoneNumber(
//         auth,
//         phonenumber,
//         recaptchaVerifier
//       );
//       console.log(confirmation);
//       setOtpInput(!otpInput);
//       setUser(confirmation);
//       setStep(2);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const Useradmindata = async () => {
//     try {
//       const reqBody = {
//         id: 0,
//         name: name,
//         email: mail,
//         phoneNumber: phonenumber,
//       };
//       console.log("Request Body:", reqBody);

//       const response = await fetch(
//         "https://piccocabs-server-46642b82a774.herokuapp.com/User/find-by-number",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(reqBody),
//         }
//       );

//       const data = await response.json();
//       console.log("API Response:", data);
//       message.success("Booking successful!");
//     } catch (error) {
//       console.error("API Error:", error);
//     }
//   };
//   const loginattemptadmin = async () => {
//     try {
//       const reqBody = {
//         id: 0,
//         name: name,
//         email: mail,
//         phoneNumber: phonenumber,
//       };
//       console.log("Request Body:", reqBody);

//       const response = await fetch(
//         "https://piccocabs-server-46642b82a774.herokuapp.com/Loginattempts",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(reqBody),
//         }
//       );

//       const data = await response.json();
//       console.log("API Response:", data);
//       message.success("Booking successful!");
//     } catch (error) {
//       console.error("API Error:", error);
//     }
//   };

//   const verifyOtp = async () => {
//     try {
//       if (await user.confirm(otp)) {
//         alert("login successfully");
//         dispatch(bookingLogin(user));
//         setIsOtpVerified(true);
//         setStep(3);
//       }
//     } catch (err: any) {
//       console.log("Error Otp", err);
//       alert("invalid otp");
//       loginattemptadmin();
//     }
//   };
//   return (
//     <>
//       <Modal open={props.isModalOpen} onCancel={props.handleCancel}>
//         <div className="piccocabsmodal_Maindiv">
//           <div className="piccocabsmodal_Maindiv2">
//             <div>
//               <div className="piccocabsimg-Div">
//                 <img
//                   className="piccocabsimg otp"
//                   src={piccocabsimg}
//                   alt="Logo"
//                 />
//               </div>
//             </div>
//             <div className="piccocab-text-loginwithotp-Div">
//               <h1 className="login-with-otp">Login with OTP</h1>
//             </div>
//             <br />

//             {step === 1 ? (
//               <div>
//                 <div className="piccocab-inputfield-Div">
//                   <InputGroup style={{ width: "70%" }}>
//                     <InputGroup.Text className="piccocabsinputfield">
//                       +91
//                     </InputGroup.Text>
//                     <Input
//                       className="form-control"
//                       type="number"
//                       defaultValue={phonenumber}
//                       placeholder="Enter your mobile number"
//                       style={{ backgroundColor: "#e9ecef" }}
//                       onChange={(e: any) =>
//                         setPhonenumber(`+91 ${e.target.value}`)
//                       }
//                     />
//                   </InputGroup>
//                   <br />
//                 </div>
//                 <div className="piccocabssendotp-input">
//                   <Button
//                     className="piccocabssendotp-button"
//                     text="Send OTP"
//                     onClick={() => {
//                       sendOtp();
//                     }}
//                   />
//                   <div id="recaptcha"></div>
//                   {error && (
//                     <p className="piccocabserrornotification">
//                       OTP Sent Successfully
//                     </p>
//                   )}
//                 </div>
//                 <br />
//                 <div className="piccocabsfootertxt-Div">
//                   <div className="piccocabsfootertxt">
//                     <p>
//                       We will send you a One Time Password (OTP) on your
//                       registered mobile number to login.
//                     </p>
//                   </div>
//                 </div>
//                 <button onClick={() => setStep(2)}>Next</button>
//               </div>
//             ) : step === 2 ? (
//               <div>
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
//                       OTP send to {phonenumber}
//                     </p>
//                   </div>
//                   <InputGroup style={{ width: "70%" }}>
//                     <InputGroup.Text className="piccocabsinputfield">
//                       OTP
//                     </InputGroup.Text>
//                     <Form.Control
//                       className="input-otpfield"
//                       placeholder="Enter OTP"
//                       type="number"
//                       style={{ backgroundColor: "#e9ecef" }}
//                       onChange={(e: any) => setOtp(e.target.value)}
//                     />
//                   </InputGroup>
//                   <br />

//                   <Button
//                     text="Submit"
//                     onClick={() => {
//                       verifyOtp();
//                     }}
//                   />

//                   <span style={{ cursor: "pointer" }}>Resend</span>
//                 </div>
//                 <button onClick={() => setStep(1)}>Back</button>
//                 <button onClick={() => setStep(3)}>Next</button>
//               </div>
//             ) : step === 3 ? (
//               <div className="piccocabsfield-Div">
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                 >
//                   <InputGroup style={{ width: "70%" }}>
//                     <Input
//                       className="form-control"
//                       type="text"
//                       defaultValue={name}
//                       placeholder="Enter Your Name"
//                       style={{ backgroundColor: "#e9ecef" }}
//                       onChange={(e: any) => setName(e.target.value)}
//                     />
//                   </InputGroup>
//                   <br />
//                   <InputGroup style={{ width: "70%" }}>
//                     <Input
//                       className="form-control"
//                       type="text"
//                       defaultValue={mail}
//                       placeholder="Enter Your Email"
//                       style={{ backgroundColor: "#e9ecef" }}
//                       onChange={(e: any) => setMail(e.target.value)}
//                     />
//                   </InputGroup>
//                   <br />

//                   <Button
//                     text="Submit"
//                     onClick={() => {
//                       Useradmindata();
//                     }}
//                   />
//                 </div>
//                 <button onClick={() => setStep(2)}>Back</button>
//                 <button onClick={() => props.onClick()}>Next</button>
//               </div>
//             ) : null}

//             {/* <div className="piccocabsfield-Div">
//               {isOtpVerified ? (
//                 <div>
//                   <InputGroup style={{ width: "70%" }}>
//                     <Input
//                       className="form-control"
//                       type="text"
//                       defaultValue={name}
//                       placeholder="Enter Your Name"
//                       style={{ backgroundColor: "#e9ecef" }}
//                       onChange={(e: any) => setName(e.target.value)}
//                     />
//                   </InputGroup>
//                   <br />
//                   <InputGroup style={{ width: "70%" }}>
//                     <Input
//                       className="form-control"
//                       type="text"
//                       defaultValue={mail}
//                       placeholder="Enter Your Mail"
//                       style={{ backgroundColor: "#e9ecef" }}
//                       onChange={(e: any) => setMail(e.target.value)}
//                     />
//                   </InputGroup>
//                   <br />
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
//                       defaultValue={phonenumber}
//                       placeholder="Enter your mobile number"
//                       style={{ backgroundColor: "#e9ecef" }}
//                       onChange={(e: any) =>
//                         setPhonenumber(`+91 ${e.target.value}`)
//                       }
//                     />
//                   </InputGroup>
//                   <br />
//                 </div>
//               )}
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
//                       OTP send to {phonenumber}
//                     </p>
//                   </div>
//                   <InputGroup style={{ width: "70%" }}>
//                     <InputGroup.Text className="piccocabsinputfield">
//                       OTP
//                     </InputGroup.Text>
//                     <Form.Control
//                       className="input-otpfield"
//                       placeholder="Enter OTP"
//                       type="number"
//                       style={{ backgroundColor: "#e9ecef" }}
//                       onChange={(e: any) => setOtp(e.target.value)}
//                     />
//                   </InputGroup>
//                   <br />
//                   <br />

//                   <Button text="Submit" onClick={verifyOtp} />
//                   <span style={{ cursor: "pointer" }}>Resend</span>
//                 </div>
//               ) : (
//                 <div className="piccocabssendotp-input">
//                   <Button
//                     className="piccocabssendotp-button"
//                     text="Send OTP"
//                     onClick={() => {
//                       sendOtp();
//                       postNumber();
//                     }}
//                   />
//                   <div id="recaptcha"></div>
//                   {error && (
//                     <p className="piccocabserrornotification">
//                       OTP Sent Successfully
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
//             </div>  */}
//           </div>
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default CustomModal;
