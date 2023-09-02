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
  const [showfare, setShowFare] = useState(false);
  const location = useLocation();
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedVeh, setSelectedVeh] = useState<any>(null);
  const isLoggedIn = useSelector((state: any) => state.User.auth);

  const {
    selectedRoute,
    pickUpDate,
    dropOffDate,
    returnDate,
    timeOfPickup,
    tripType,
    Package,
    RentPlace,
    modesSecondary,
    RentalTime,
    RentalDate,
  } = location.state;

  console.log("date vannodaaaaaa", RentalDate);
  console.log("time vannodaaaaaa", RentalTime);
  console.log("trip vannodaaaaaa", tripType);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleBookNow = (carData: any) => {
    setSelectedCar(carData);
    if (isLoggedIn) {
      setShowBooking(true);
    } else {
      setFormModal(true);
    }
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
  const formattedDate = moment(pickUpDate).format("DD-MM-YYYY");
  const rentalFormatDate = moment(RentalDate).format("DD-MM-YYYY");
  const returnFrormat = moment(returnDate).format("DD-MM-YYYY");

  let pack =
    Package?.value === "custom_package" ? (
      <div>
        {Package?.hours}Hr&nbsp;{Package?.kms}kms
      </div>
    ) : (
      <div>{Package?.label}</div>
    );

  const minicontent = (
    <p>
      <b>Includes AC cabs like</b>
      <br />
      <b>Swift, Etios, Polo GT, Civic</b>
    </p>
  );
  const sedanContent = (
    <p>
      <b>Includes AC cabs like</b>
      <br />
      <b>Amaze, Verna, Sunny, Vento</b>
    </p>
  );
  const SuvContent = (
    <p>
      <b>Includes AC cabs like</b>
      <br />
      <b>Fortuner, Ertiga, Innova Crysta, Xylo</b>
    </p>
  );

  const openfare = () => {
    setShowFare(true);
  };
  const closefare = () => {
    setShowFare(false);
  };

  return (
    <div>
      <NavigationBar />
      <div className="cardMain-div">
        {showBooking != true ? (
          <div>
            <div className="subHeader">
              <div className="innerHead">
                <div style={{ fontWeight: 700, fontSize: "20px" }}>
                  TRIP DETAILS
                </div>
                <div style={{ fontSize: "12px" }}>{tripType}</div>
                <div>
                  {RentPlace || selectedRoute?.place}{" "}
                  {RentPlace ? "" : <b>to</b>}
                  &nbsp; {RentPlace ? "" : selectedRoute?.location}
                </div>
              </div>
              <div
                style={{ backgroundColor: "#f7fff9", height: "71px" }}
                className="innerHead2"
              >
                <div className="PickpDate-Div">
                  Pick Up Date: <br />
                  {tripType === "rentals"
                    ? rentalFormatDate
                    : formattedDate}{" "}
                  <div className="PickupTime-Div">
                    Pickup Time: <br />
                    {/* {Package?.label ? "" : "Pickup Time:"} <br /> */}
                    {tripType === "rentals" ? RentalTime : timeOfPickup || ""}
                  </div>
                  {tripType === "roundTrip" ? (
                    <div className="PickpDate-Div">
                      Drop Date: <br />
                      {returnFrormat}{" "}
                    </div>
                  ) : null}
                </div>
                <div className="ModifyButton-Div">
                  <button
                    className="modifyButton"
                    onClick={() => window.history.back()}
                  >
                    Modify
                  </button>
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
                      <Popover
                        placement="rightTop"
                        // title={text}
                        content={minicontent}
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
                      <b>
                        Includes{" "}
                        {tripType === "roundTrip"
                          ? selectedRoute?.kilometer * 2
                          : selectedRoute?.kilometer}{" "}
                        Km
                      </b>
                    </div>
                    <div>
                      <b>
                        {tripType === "roundTrip"
                          ? selectedRoute?.hours * 2
                          : selectedRoute?.hours}
                      </b>{" "}
                      hours to reach
                    </div>
                    <p
                      style={{
                        cursor: "pointer",
                        color: "#0056b3",
                        marginTop: "10px",
                      }}
                      onClick={() => {
                        const carDetails = {
                          name: "Picco Mini",
                          type: "Mini",
                        };
                        setSelectedVeh(carDetails);
                        setShowFare(true);
                      }}
                    >
                      Fare details
                    </p>
                  </div>
                  <div
                    style={{
                      height: "100%",
                      width: "200px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p>
                        {" "}
                        ₹{" "}
                        <b>
                          {tripType === "roundTrip"
                            ? selectedRoute?.miniPrice +
                              selectedRoute?.miniPrice +
                              300
                            : selectedRoute?.miniPrice + 300}
                        </b>
                      </p>
                    </div>
                    {showfare && (
                      <FareModal
                        open={openfare}
                        close={closefare}
                        selectedVeh={selectedVeh}
                      />
                    )}
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
                        handleBookNow({
                          name: "Picco Mini",
                          type: "Mini",
                        })
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
                    <div className="picco-mini">Picco Sedan</div>
                    <div className="piccomini-info">
                      info
                      <Popover
                        placement="rightTop"
                        // title={text}
                        content={sedanContent}
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
                      <b>
                        Includes{" "}
                        {tripType === "roundTrip"
                          ? selectedRoute?.kilometer * 2
                          : selectedRoute?.kilometer}{" "}
                        Km
                      </b>
                    </div>
                    <div>
                      <b>
                        {tripType === "roundTrip"
                          ? selectedRoute?.hours * 2
                          : selectedRoute?.hours}
                      </b>{" "}
                      hours to reach
                    </div>
                    <p
                      style={{
                        cursor: "pointer",
                        color: "#0056b3",
                        marginTop: "10px",
                      }}
                      onClick={() => {
                        const carDetails = {
                          name: "Picco Sedan",
                          type: "Sedan",
                        };
                        setSelectedVeh(carDetails);
                        setShowFare(true);
                      }}
                    >
                      Fare details
                    </p>
                  </div>
                  <div
                    style={{
                      height: "100%",
                      width: "200px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p>
                        {" "}
                        ₹{" "}
                        <b>
                          {tripType === "roundTrip"
                            ? selectedRoute?.sedanPrice +
                              selectedRoute?.sedanPrice +
                              300
                            : selectedRoute?.sedanPrice + 300}
                        </b>
                      </p>
                    </div>
                    {showfare && (
                      <FareModal
                        open={openfare}
                        close={closefare}
                        selectedVeh={selectedVeh}
                      />
                    )}
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
                        handleBookNow({
                          name: "Picco Sedan",
                          type: "Sedan",
                        })
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
                    <div className="picco-mini">Picco SUV</div>
                    <div className="piccomini-info">
                      info
                      <Popover
                        placement="rightTop"
                        // title={text}
                        content={SuvContent}
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
                    <div className="piccocartext-font">6 Seat</div>
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
                      <b>
                        Includes{" "}
                        {tripType === "roundTrip"
                          ? selectedRoute?.kilometer * 2
                          : selectedRoute?.kilometer}{" "}
                        Km
                      </b>
                    </div>
                    <div>
                      <b>
                        {tripType === "roundTrip"
                          ? selectedRoute?.hours * 2
                          : selectedRoute?.hours}
                      </b>{" "}
                      hours to reach
                    </div>
                    <p
                      style={{
                        cursor: "pointer",
                        color: "#0056b3",
                        marginTop: "10px",
                      }}
                      onClick={() => {
                        const carDetails = {
                          name: "Picco SUV",
                          type: "SUV",
                        };
                        setSelectedVeh(carDetails);
                        setShowFare(true);
                      }}
                    >
                      Fare details
                    </p>
                  </div>
                  <div
                    style={{
                      height: "100%",
                      width: "200px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p>
                        {" "}
                        ₹{" "}
                        <b>
                          {tripType === "roundTrip"
                            ? selectedRoute?.suvPrice +
                              selectedRoute?.suvPrice +
                              300
                            : selectedRoute?.suvPrice + 300}
                        </b>
                      </p>
                    </div>
                    {showfare && (
                      <FareModal
                        open={openfare}
                        close={closefare}
                        selectedVeh={selectedVeh}
                      />
                    )}
                  </div>
                </div>
                {formModal && (
                  <CustomModal isModalOpen={show} handleCancel={Cancel} />
                )}
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
                        handleBookNow({
                          name: "Picco SUV",
                          type: "SUV",
                        })
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
          <div className="cardMain-div2">
            {showBooking && <BookingThird selectedCar={selectedCar} />}
          </div>
        )}
      </div>
      ;
    </div>
  );
}

export default BookingForm;
