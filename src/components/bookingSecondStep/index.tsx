import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineSevereCold } from "react-icons/md";
import smallcarimg from "../../assets/images/car_mini_small.png";
import sedanimg from "../../assets/images/car_sedan_small.png";
import suvimage from "../../assets/images/car_suv_small.png";
import { Row, Col, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import FareModal from "../fareDetails";
import CustomModal from "../loginForm/index";
import { useSelector } from "react-redux";
import BookingThird from "../BookingThirdStep";
import moment from "moment";
import NavigationBar from "../navBar";
import { BsInfoCircle } from "react-icons/bs";
import { Popover } from "antd";
import "./index.scss";

function BookingForm(props: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const location = useLocation();
  const isLoggedIn = useSelector((state: any) => state.User.auth);

  const {
    selectedRoute,
    pickUpDate,
    dropOffDate,
    timeOfPickup,
    tripType,
    Package,
    RentPlace,
  } = location.state;

  console.log(">>>>>>>>>>>>>>>>", Package);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [formModal, setFormModal] = useState(false);

  const show = () => {
    setFormModal(true);
  };

  const Cancel = () => {
    setFormModal(false);
  };
  const formattedDate = moment(pickUpDate).format("MMMM Do, YYYY");
  let pack =
    Package?.value === "custom_package" ? (
      <div>
        {Package?.hours}Hr&nbsp;{Package?.kms}kms
      </div>
    ) : (
      <div>{Package?.label}</div>
    );

  const content = <p>car details </p>;

  return (
    <div>
      <NavigationBar />
      <div className="cardMain-div">
        {/* <div className="subHeader">
  <div className="innerHead">
  {RentPlace || selectedRoute?.place}&nbsp; <b>{RentPlace ? "" : "to"}</b>&nbsp; {RentPlace ? "" : selectedRoute?.location}
  </div>
  <div style={{ backgroundColor: "#f7fff9" }} className="innerHead">
    <div className="PickpDate-Div">
      Pick Up Date: <br />
      08-08-2023{" "}
      <div className="PickupTime-Div">
      {Package?.label ? "" : "Pickup Time:"} <br/>
      {timeOfPickup || ""}
      </div>

    </div>
    <div className="ModifyButton-Div">
      <button
        style={{
          width: "30%",
          height: "50%",
          borderRadius: "4px",
          fontWeight: "700",
          border: "2px solid  rgb(107, 181, 70)",
          color: " rgb(107, 181, 70)",
        }}
      >
        Modify
      </button>
    </div>
  </div>
</div> */}
        {/* {isLoggedIn ? ( */}
        {showBooking != true ? (
          <div>
            <div className="subHeader">
              <div
                className="innerHead"
                style={{
                  fontWeight: "600",
                  backgroundColor: "rgb(247, 255, 249)",
                }}
              >
                PICCO JOURNEY
                <br />
                <br />
                {RentPlace || selectedRoute?.place} {RentPlace ? "" : "to"}
                &nbsp; {RentPlace ? "" : selectedRoute?.location}
              </div>
              <div style={{ backgroundColor: "#f7fff9" }} className="innerHead">
                <div className="PickpDate-Div">
                  Pick Up Date: <br />
                  08-08-2023{" "}
                  <div className="PickupTime-Div">
                    {Package?.label ? "" : "Pickup Time:"} <br />
                    {timeOfPickup || ""}
                  </div>
                </div>
                <div className="ModifyButton-Div">
                  <button className="modifyButton">Modify</button>
                </div>
              </div>
            </div>
            <div className="Container-Card">
              <div className="inner-Card">
                <div style={{ display: "flex" }}>
                  <img
                    className="piccominiImg"
                    style={{ height: "70px", marginTop: "8px" }}
                    src={smallcarimg}
                    alt="Picco Mini"
                  />
                  <div className="nameContainer">
                    <div className="picco-mini">Picco Mini</div>
                    <div className="piccomini-info">
                      info
                      <BsInfoCircle size={18} color="#d3d3d3" />
                    </div>
                  </div>
                </div>
                <div style={{ height: "100%", width: "60%", display: "flex" }}>
                  <div
                    style={{
                      height: "100%",
                      width: "200px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div className="piccocartext-font">AC</div>
                    <div className="piccocartext-font">4 Seat</div>
                    <div className="piccocartext-font">2 Bag</div>
                  </div>
                  <div
                    style={{
                      height: "100%",
                      width: "200px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div>
                      <IoNewspaperOutline size={27} color="green" />
                    </div>
                    <div>Incl. All Tax</div>
                  </div>
                  <div
                    style={{
                      height: "100%",
                      width: "200px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ backgroundColor: "" }}>
                      <p>
                        {" "}
                        ₹ <b>{selectedRoute?.rate + 50}</b>
                      </p>
                      <p
                        style={{ cursor: "pointer", color: "#0056b3" }}
                        onClick={() => setIsModalOpen(!isModalOpen)}
                      >
                        Fare details
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="button-Div">
                    <button
                      style={{
                        height: "40px",
                        width: "150px",
                        fontWeight: "700",
                        fontSize: "18px",
                      }}
                      onClick={() =>
                        isLoggedIn ? setShowBooking(true) : setFormModal(true)
                      }
                      className="button"
                    >
                      Book now
                    </button>
                  </div>
                </div>
              </div>
              <div className="inner-Card">
                <div style={{ display: "flex" }}>
                  <img
                    className="piccominiImg"
                    style={{ height: "70px", marginTop: "8px" }}
                    src={sedanimg}
                    alt="Picco Mini"
                  />
                  <div className="nameContainer">
                    <div className="picco-mini">Picco Suv</div>
                    <div className="piccomini-info">
                      info
                      <BsInfoCircle size={18} color="#d3d3d3" />
                    </div>
                  </div>
                </div>
                <div style={{ height: "100%", width: "60%", display: "flex" }}>
                  <div
                    style={{
                      height: "100%",
                      width: "200px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div className="piccocartext-font">AC</div>
                    <div className="piccocartext-font">4 Seat</div>
                    <div className="piccocartext-font">2 Bag</div>
                  </div>
                  <div
                    style={{
                      height: "100%",
                      width: "200px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div>
                      <IoNewspaperOutline size={27} color="green" />
                    </div>
                    <div>Incl. All Tax</div>
                  </div>
                  <div
                    style={{
                      height: "100%",
                      width: "200px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ backgroundColor: "" }}>
                      <p>
                        {" "}
                        ₹ <b>{selectedRoute?.rate + 50}</b>
                      </p>
                      <p
                        style={{ cursor: "pointer", color: "#0056b3" }}
                        onClick={() => setIsModalOpen(!isModalOpen)}
                      >
                        Fare details
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="button-Div">
                    <button
                      style={{
                        height: "40px",
                        width: "150px",
                        fontWeight: "700",
                        fontSize: "18px",
                      }}
                      onClick={() =>
                        isLoggedIn ? setShowBooking(true) : setFormModal(true)
                      }
                      className="button"
                    >
                      Book now
                    </button>
                  </div>
                </div>
              </div>
              <div className="inner-Card">
                <div style={{ display: "flex" }}>
                  <img
                    className="piccominiImg"
                    style={{ height: "70px", marginTop: "8px" }}
                    src={suvimage}
                    alt="Picco Mini"
                  />
                  <div className="nameContainer">
                    <div className="picco-mini">Picco Mini</div>
                    <div className="piccomini-info">
                      info
                      <Popover
                        placement="rightTop"
                        // title={text}
                        content={content}
                        // arrow={mergedArrow}
                      >
                        <BsInfoCircle size={18} color="#d3d3d3" />
                      </Popover>
                    </div>
                  </div>
                </div>
                <div style={{ height: "100%", width: "60%", display: "flex" }}>
                  <div
                    style={{
                      height: "100%",
                      width: "200px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div className="piccocartext-font">AC</div>
                    <div className="piccocartext-font">4 Seat</div>
                    <div className="piccocartext-font">2 Bag</div>
                  </div>
                  <div
                    style={{
                      height: "100%",
                      width: "200px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div>
                      <IoNewspaperOutline size={27} color="green" />
                    </div>
                    <div>Incl. All Tax</div>
                  </div>
                  <div
                    style={{
                      height: "100%",
                      width: "200px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ backgroundColor: "" }}>
                      <p>
                        {" "}
                        ₹ <b>{selectedRoute?.rate + 50}</b>
                      </p>
                      <p
                        style={{ cursor: "pointer", color: "#0056b3" }}
                        onClick={() => setIsModalOpen(!isModalOpen)}
                      >
                        Fare details
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="button-Div">
                    <button
                      style={{
                        height: "40px",
                        width: "150px",
                        fontWeight: "700",
                        fontSize: "18px",
                      }}
                      onClick={() =>
                        isLoggedIn ? setShowBooking(true) : setFormModal(true)
                      }
                      className="button"
                    >
                      Book now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="cardMain-div2">{showBooking && <BookingThird />}</div>
        )}
      </div>
      ;
    </div>
  );
}

export default BookingForm;
