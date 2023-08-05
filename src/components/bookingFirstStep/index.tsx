import React, { useState } from "react";
import classes from "./index.module.scss";
import OneWay from "./Forms/outstation";
import RoundTrip from "./Forms/rentals";
import Container from "react-bootstrap/esm/Container";
import "./index.module.scss";

const FirstStep = () => {
  const [formType, setFormType] = useState("outstations");

  const radioBtn1ClickHandler = () => {
    setFormType("outstations");
  };

  const radioBtn2ClickHandler = () => {
    setFormType("rentals");
  };

  const baseUrl = document.baseURI.includes("booking");

  return (
    <Container
      fluid
      className={` ${classes["bg-picco-banner"]} position-relative d-flex justify-content-center `}
    >
      <Container
        style={{ height: "82%" }}
        className={`pb-5 pt-4  rounded-3 bg-light ${
          classes["banner-position-absolute"]
        } ${!baseUrl ? "shadow" : ""}`}
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
              className={`btn btn-outline-success px-4 border border-2 border-success fw-bold fs-8 fs-9 `}
              htmlFor="btnradio1"
            >
              OUTSTATION
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
              className="btn btn-outline-success px-4 border border-2 border-success fw-bold fs-8 fs-9 d-none d-md-block"
              htmlFor="btnradio2"
            >
              RENTALS
            </label>
          </div>
        </div>
        <div className="d-sm-none">
          <h6
            className={`text-uppercase my-0 mt-4 text-center ${classes["title-city-cabs"]}`}
          >
            india's premier intercity cabs
          </h6>
        </div>
        {formType === "outstations" ? (
          <OneWay types={formType} />
        ) : formType === "rentals" ? (
          <RoundTrip types={formType} />
        ) : null}
      </Container>
    </Container>
  );
};

export default FirstStep;

// import React, { Fragment } from "react";
// import { useState } from "react";
// import classes from "./index.module.scss";
// import OneWay from "./Forms/oneWay";
// import RoundTrip from "./Forms/roundTrip";
// import Rentals from "./Forms/rentals";
// import Container from "react-bootstrap/esm/Container";

// const FirstStep = () => {
//   const [formType, setFormType] = useState("oneWay");
//   const radioBtn1ClickHandler = () => {
//     setFormType("oneWay");
//   };
//   const radioBtn2ClickHandler = () => {
//     setFormType("roundTrip");
//   };
//   const radioBtn3ClickHandler = () => {
//     setFormType("local");
//   };
//   const radioBtn4ClickHandler = () => {
//     setFormType("rentals");
//   };
//   const baseUrl = document.baseURI.includes("booking");
//   return (
//     <Container
//       fluid
//       className={` ${classes["bg-picco-banner"]} position-relative d-flex justify-content-center `}
//     >
//       <Container
//         style={{ height: "82%" }}
//         className={`pb-5 pt-4  rounded-3 bg-light ${
//           classes["banner-position-absolute"]
//         } ${!baseUrl ? "shadow" : ""}`}
//       >
//         <div className="d-flex justify-content-center">
//           <div
//             className="btn-group"
//             role="group"
//             aria-label="Basic radio toggle button group"
//           >
//             <input
//               type="radio"
//               className="btn-check"
//               name="btnradio"
//               id="btnradio1"
//               autoComplete="off"
//               defaultChecked
//               onClick={radioBtn1ClickHandler}
//             />
//             <label
//               className={`btn btn-outline-success px-4 border border-2 border-success fw-bold fs-8 fs-9 `}
//               htmlFor="btnradio1"
//             >
//               ONE WAY
//             </label>
//             <input
//               type="radio"
//               className="btn-check"
//               name="btnradio"
//               id="btnradio2"
//               autoComplete="off"
//               onClick={radioBtn2ClickHandler}
//             />
//             <label
//               className="btn btn-outline-success px-4 border border-2 border-success fw-bold fs-8 fs-9 d-none d-md-block"
//               htmlFor="btnradio2"
//             >
//               ROUND TRIP
//             </label>
//             <input
//               type="radio"
//               className="btn-check"
//               name="btnradio"
//               id="btnradio3"
//               autoComplete="off"
//               onClick={radioBtn3ClickHandler}
//             />
//             <label
//               className="btn btn-outline-success px-4 border border-2 border-success fw-bold fs-8 fs-9 d-none d-md-block"
//               htmlFor="btnradio3"
//             >
//               OUTSTATIONS
//             </label>
//             <input
//               type="radio"
//               className="btn-check"
//               name="btnradio"
//               id="btnradio4"
//               autoComplete="off"
//               onClick={radioBtn4ClickHandler}
//             />
//             <label
//               className="btn btn-outline-success px-4 border border-2 border-success fw-bold fs-8  fs-9"
//               htmlFor="btnradio4"
//             >
//               RENTALS
//             </label>
//           </div>
//         </div>
//         <div className="d-sm-none">
//           <h6
//             className={`text-uppercase my-0 mt-4 text-center ${classes["title-city-cabs"]}`}
//           >
//             india's premier intercity cabs
//           </h6>
//         </div>
//         {formType === "oneWay" ? (
//           <OneWay />
//         ) : formType === "roundTrip" ? (
//           <RoundTrip />
//         ) : formType === "local" ? (
//           <OneWay />
//         ) : formType === "rentals" ? (
//           <Rentals />
//         ) : null}
//       </Container>
//     </Container>
//   );
// };

// export default FirstStep;
