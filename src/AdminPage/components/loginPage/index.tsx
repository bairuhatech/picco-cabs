// import React from "react";
// import cls from "./index.module.scss";
// import { useNavigate } from "react-router-dom";
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardGroup,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
// } from "@coreui/react";
// import PiccoLogo from "../../../assets/images/logo.png";
// import { FiUser } from "react-icons/fi";
// import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
// import { useSelector } from "react-redux";
// import { useState } from "react";
// import { useDispatch } from "react-redux/es/exports";
// import { userLogin } from "../../../store/loginSlice";
// import { useEffect } from "react";

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({ user_name: "", password: "" });
//   const userNameChangeHandler = (event: any) => {
//     setFormData({ ...formData, user_name: event.target.value });
//   };
//   const passwordChangeHandler = (event: any) => {
//     setFormData({ ...formData, password: event.target.value });
//   };
//   const formSubmitHandler = (event: any) => {
//     event.preventDefault();
//     if (!formData.user_name || !formData.password) {
//       alert("please enter valid input");
//     } else if (formData.user_name === "Picco123" && formData.password === "12345") {
//       dispatch(userLogin(formData));
//       navigate("/adminpanel");
//       setFormData({ user_name: "", password: "" });
//     } else {
//       alert("invalid username or password");
//     }
//   };
//   const [showPassword, setShowPassword] = useState(false);
//   const passwordToggler = () => {
//     setShowPassword(!showPassword);
//   };
//   const isLoggedIn = useSelector((state: any) => state.User.auth);
//   console.log("================isLoggedIn=========================");
//   console.log(isLoggedIn);
//   console.log("==================isLoggedIn=======================");

//   //remove this section
//   const showStatus = () => {
//     alert(isLoggedIn);
//   };

//   return (
//     <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
//       <CContainer style={{ height:"400px"} }>
//         <CRow>
//           <CCol md={8}>
//             <CCardGroup style={{backgroundColor:"#ffff"}}>
//               <CCard className="p-4">
//                 <CCardBody style={{height:"100%"}}>
//                   <CForm onSubmit={formSubmitHandler} style={{height:"100%"}}>
//                     <p className="text-medium-emphasis" onClick={showStatus}>
//                       {isLoggedIn
//                         ? "alread logged in"
//                         : "Sign in to your account"}
//                     </p>
//                     <CInputGroup className="mb-3">
//                       <CFormInput
//                         placeholder="Username"
//                         autoComplete="username"
//                         onChange={userNameChangeHandler}
//                         required
//                         value={formData.user_name}
//                       />
//                       <CInputGroupText>
//                         <FiUser />
//                       </CInputGroupText>
//                     </CInputGroup>
//                     <CInputGroup className="mb-4">
//                       <CFormInput
//                         type={!showPassword ? "password" : "text"}
//                         placeholder="Password"
//                         onChange={passwordChangeHandler}
//                         autoComplete="current-password"
//                         className="bg-none"
//                         required
//                         value={formData.password}
//                       />
//                       <CInputGroupText className="border-start-0">
//                         {!showPassword ? (
//                           <AiFillEyeInvisible onClick={passwordToggler} />
//                         ) : (
//                           <AiFillEye onClick={passwordToggler} />
//                         )}
//                       </CInputGroupText>
//                     </CInputGroup>
//                     <CRow>
//                       <CCol xs={6}>
//                         <CButton
//                           type="submit"
//                           className="px-4 text-light btn-picco"
//                         >
//                           Login
//                         </CButton>
//                       </CCol>
//                       <CCol xs={6} className="text-right">
//                         <CButton color="link" className="px-0 text-picco">
//                           Forgot password?
//                         </CButton>
//                       </CCol>
//                     </CRow>
//                   </CForm>
//                 </CCardBody>
//               </CCard>
//               <CCard
//                 className="text-white bg-secondary py-5 d-md-block d-none"
//                 style={{ width: "100%" }}
//               >
//                 <CCardBody className="text-center">
//                   <div>
//                     <img src={PiccoLogo} className={cls["picco-logo"]}></img>
//                     <p>
//                       Picco Cabs is an emerging indian startup based on Madurai
//                       to provide Hassle free & Top class cabs services at your
//                       doorsteps in lowest prices.
//                     </p>
//                   </div>
//                 </CCardBody>
//               </CCard>
//             </CCardGroup>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   );
// };

// export default Login;
import React from "react";
import cls from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import PiccoLogo from "../../../assets/images/logo.png";
import { FiUser } from "react-icons/fi";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { userLogin } from "../../../store/loginSlice";
import { useEffect } from "react";
import Email from "../../../assets/images/email.svg";
import Password from "../../../assets/images/password.svg";
import "./index.scss";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ user_name: "", password: "" });
  const userNameChangeHandler = (event: any) => {
    setFormData({ ...formData, user_name: event.target.value });
  };
  const passwordChangeHandler = (event: any) => {
    setFormData({ ...formData, password: event.target.value });
  };
  const formSubmitHandler = (event: any) => {
    event.preventDefault();
    if (!formData.user_name || !formData.password) {
      alert("please enter valid input");
    } else if (
      formData.user_name === "Picco123" &&
      formData.password === "12345"
    ) {
      dispatch(userLogin(formData));
      navigate("/adminpanel");
      setFormData({ user_name: "", password: "" });
    } else {
      alert("invalid username or password");
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  const passwordToggler = () => {
    setShowPassword(!showPassword);
  };
  const isLoggedIn = useSelector((state: any) => state.User.auth);
  console.log("================isLoggedIn=========================");
  console.log(isLoggedIn);
  console.log("==================isLoggedIn=======================");

  const showStatus = () => {
    alert(isLoggedIn);
  };

  return (
    <div className="Main-Container">
      <form className="form_container" onSubmit={formSubmitHandler}>
        <img className="logo_container" src={PiccoLogo} alt="PiccoLogo" />
        <div className="title_container">
          <p className="title">Login</p>
          <span className="subtitle">
            Get started with our app, just create an account and enjoy the
            experience.
          </span>
        </div>
        <br />
        <div className="input_container">
          <label className="input_label">Username</label>
          <img src={Email} alt="EmailIcon" className="icon2" />
          <input
            placeholder="Username"
            title="Input title"
            name="input-name"
            type="text"
            className="input_field"
            id="email_field"
            onChange={userNameChangeHandler}
            value={formData.user_name}
            required
          />
        </div>
        <div className="input_container">
          <label className="input_label">Password</label>
          <img src={Password} alt="PasswordIcon" className="icon" />
          <input
            placeholder="Password"
            title="Input title"
            name="input-name"
            type={showPassword ? "text" : "password"}
            className="input_field"
            id="password_field"
            onChange={passwordChangeHandler}
            value={formData.password}
            required
          />
        </div>
        <button title="Sign In" type="submit" className="sign-in_btn">
          <span>Sign In</span>
        </button>
        <p className="note">Terms of use &amp; Conditions</p>
      </form>
    </div>
  );
};

export default Login;
