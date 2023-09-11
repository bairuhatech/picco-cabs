import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineSevereCold } from "react-icons/md";
import smallcarimg from "../../assets/images/car_mini_small.png";
import sedanimg from "../../assets/images/car_sedan_small.png";
import suvimage from "../../assets/images/car_suv_small.png";
import innova from "../../assets/images/car_suv_innova.png";
import crysta from "../../assets/images/car_suv_innova_crysta.png";
import tempo from "../../assets/images/car_tempo.png";
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
import { BiPackage } from "react-icons/bi";

function BookingForm(props: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [showfare, setShowFare] = useState(false);
  const location = useLocation();
  // console.log("---location---->>", location);
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedVeh, setSelectedVeh] = useState<any>(null);
  const isLoggedIn = useSelector((state: any) => state.User.auth);
  const [Package, setPackage] = useState<any>({
    hrs: "8 Hrs",
    kilometer: "80 Km",
  });
  // console.log("-----Package-----", Package.kilometer);
  const [active, setActive] = useState<any>(80);
  // console.log("-----active-----", active);

  const {
    selectedRoute,
    pickUpDate,
    dropOffDate,
    returnDate,
    timeOfPickup,
    tripType,
    RentPlace,
    modesSecondary,
    RentalTime,
    RentalDate,
    airport,
    selectedValues,
  } = location.state;
  // console.log("-----selectedRoute-----", selectedRoute);
  // console.log("-----tripType-----", tripType);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleBookNow = (carData: any) => {
    console.log("----carData----", carData);
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

  const TempoContent = (
    <p>
      <b>Includes AC cabs like</b>
      <br />
      <b>Tempo Traveller(12+1) Seater</b>
    </p>
  );

  const BigTempoContent = (
    <p>
      <b>Includes AC cabs like</b>
      <br />
      <b>Tempo Traveller(18+1) Seater</b>
    </p>
  );

  const openfare = () => {
    setShowFare(true);
  };
  const closefare = () => {
    setShowFare(false);
  };
  const defaultData = {
    kilometer1: {
      hrs: "4 Hrs",
      kilometer: " 40 Km",
    },
  };
  const kilometerRental = {
    kilometer1: {
      hrs: "4 Hrs",
      kilometer: " 40 Km",
    },
    kilometer2: {
      hrs: "8 Hrs",
      kilometer: "80 Km",
    },
    kilometer3: {
      hrs: "12 Hrs",
      kilometer: "120 Km",
    },
  };

  const rentalHours = {
    hours1: "",
    hours2: "",
    hours3: "s",
  };
  const handleClick = (val: any, field: number) => {
    setPackage(val);
    setActive(field);
  };
  return (
    <>
      <div>
        <div>
          <NavigationBar />
          {!showBooking && tripType === "rentals" && (
  <div className="bkngscndStp-kmCard">
    <div
      className={
        active === 40
          ? "bkngscndStp-curveDivSub"
          : "bkngscndStp-curveDiv"
      }
    ></div>
    <div className="bkngscndStp-innrDiv bg-light">
      <div
        className={
          active === 40
            ? "bkngScndStp-innerDiv1-chng"
            : "bkngScndStp-innerDiv1"
        }
        onClick={() => handleClick(kilometerRental.kilometer1, 40)}
      >
        {kilometerRental?.kilometer1.hrs}
        <div
          style={{
            border: "1px solid green",
            height: "16px",
            marginLeft: 4,
            marginRight: 4,
          }}
        ></div>
        {kilometerRental?.kilometer1.kilometer}
      </div>
      <div
        className={
          active === 80
            ? "bkngScndStp-innerDiv2-chng "
            : "bkngScndStp-innerDiv2"
        }
        onClick={(val) => handleClick(kilometerRental.kilometer2, 80)}
      >
        {kilometerRental?.kilometer2.hrs}
        <div
          style={{
            border: "1px solid green",
            height: "16px",
            marginLeft: 4,
            marginRight: 4,
          }}
        ></div>
        {kilometerRental?.kilometer2.kilometer}
      </div>
      <div
        className={
          active === 120
            ? "bkngScndStp-innerDiv3-chng"
            : "bkngScndStp-innerDiv3"
        }
        onClick={(val) =>
          handleClick(kilometerRental.kilometer3, 120)
        }
      >
        {kilometerRental?.kilometer3.hrs}
        <div
          style={{
            border: "1px solid green",
            height: "16px",
            marginLeft: 4,
            marginRight: 4,
          }}
        ></div>
        {kilometerRental?.kilometer3.kilometer}
      </div>
    </div>
    <div
      className={
        active === 120
          ? "bkngscndStp-curveDiv2Sub"
          : "bkngscndStp-curveDiv2"
      }
    ></div>
  </div>
)}
        </div>
        {Package ? (
          <div className="cardMain-div">
            {showBooking != true ? (
              <div>
                <div className="subHeader">
                  <div className="innerHead">
                    <div style={{ fontWeight: 700, fontSize: "20px" }}>
                      TRIP DETAILS
                    </div>
                    <div style={{ fontSize: "12px" }}>
                      {tripType === "airports"
                        ? airport === "Pickup"
                          ? "Cab From " + selectedRoute?.place + " Airport"
                          : "Cab To " + selectedRoute?.place + " Airport"
                        : tripType}
                    </div>
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
                        {tripType === "rentals"
                          ? RentalTime
                          : timeOfPickup || ""}
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
                        alt="Compact Mini"
                      />
                      <div className="nameContainer">
                        <div className="picco-mini">Compact Mini</div>
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
                    <div
                      style={{ height: "100%", width: "60%", display: "flex" }}
                    >
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
                              : tripType === "rentals"
                              ? Package.kilometer
                              : selectedRoute?.kilometer}{" "}
                            {Package.kilometer ? null : "Km"}
                          </b>
                        </div>
                        <div>
                          <b>
                            {tripType === "roundTrip"
                              ? selectedRoute?.hours * 2
                              : tripType === "rentals"
                              ? Package.hrs
                              : selectedRoute?.hours}
                          </b>{" "}
                          hours to reach
                        </div>
                        {tripType === "roundTrip" ||
                        tripType === "oneWay" ||
                        tripType === "airports" ? (
                          <p
                            style={{
                              cursor: "pointer",
                              color: "#0056b3",
                              marginTop: "10px",
                            }}
                            onClick={() => {
                              const carDetails = {
                                name: "Compact Mini",
                                type: "Mini",
                              };
                              setSelectedVeh(carDetails);
                              setShowFare(true);
                            }}
                          >
                            Fare details
                          </p>
                        ) : null}
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
                                : selectedRoute?.miniPrice + 300 ||
                                  (tripType === "rentals"
                                    ? active === 120
                                      ? 5000
                                      : active === 80
                                      ? 3000
                                      : active === 40
                                      ? 2000
                                      : null
                                    : null)}
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
                          onClick={() => {
                            const price =
                              tripType === "rentals"
                                ? active === 120
                                  ? 5000
                                  : active === 80
                                  ? 3000
                                  : active === 40
                                  ? 2000
                                  : null
                                : null;
                            handleBookNow({
                              name: "Compact Mini",
                              type: "Mini",
                              price: price,
                            });
                          }}
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
                        alt="Compact Mini"
                      />
                      <div className="nameContainer">
                        <div className="picco-mini">Executive Sedan</div>
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
                    <div
                      style={{ height: "100%", width: "60%", display: "flex" }}
                    >
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
                              : tripType === "rentals"
                              ? Package.kilometer
                              : selectedRoute?.kilometer}{" "}
                            {Package.kilometer ? null : "Km"}
                          </b>
                        </div>
                        <div>
                          <b>
                            {tripType === "roundTrip"
                              ? selectedRoute?.hours * 2
                              : tripType === "rentals"
                              ? Package.hrs
                              : selectedRoute?.hours}
                          </b>{" "}
                          hours to reach
                        </div>
                        {tripType === "roundTrip" ||
                        tripType === "oneWay" ||
                        tripType === "airports" ? (
                          <p
                            style={{
                              cursor: "pointer",
                              color: "#0056b3",
                              marginTop: "10px",
                            }}
                            onClick={() => {
                              const carDetails = {
                                name: "Executive Sedan",
                                type: "Sedan",
                              };
                              setSelectedVeh(carDetails);
                              setShowFare(true);
                            }}
                          >
                            Fare details
                          </p>
                        ) : null}
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
                                : selectedRoute?.sedanPrice + 300 ||
                                  (tripType === "rentals"
                                    ? active === 120
                                      ? 5500
                                      : active === 80
                                      ? 3500
                                      : active === 40
                                      ? 2500
                                      : null
                                    : null)}
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
                          onClick={() => {
                            const price =
                              tripType === "rentals"
                                ? active === 120
                                  ? 5500
                                  : active === 80
                                  ? 3500
                                  : active === 40
                                  ? 2500
                                  : null
                                : null;
                            handleBookNow({
                              name: "Executive Sedan",
                              type: "Sedan",
                              price: price,
                            });
                          }}
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
                        alt="Compact Mini"
                      />
                      <div className="nameContainer">
                        <div className="picco-mini">Spacious SUV</div>
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
                    <div
                      style={{ height: "100%", width: "60%", display: "flex" }}
                    >
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
                        <div className="piccocartext-font">6/7 Seat</div>
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
                              : tripType === "rentals"
                              ? Package.kilometer
                              : selectedRoute?.kilometer}{" "}
                            {Package.kilometer ? null : "Km"}
                          </b>
                        </div>
                        <div>
                          <b>
                            {tripType === "roundTrip"
                              ? selectedRoute?.hours * 2
                              : tripType === "rentals"
                              ? Package.hrs
                              : selectedRoute?.hours}
                          </b>{" "}
                          hours to reach
                        </div>
                        {tripType === "roundTrip" ||
                        tripType === "oneWay" ||
                        tripType === "airports" ? (
                          <p
                            style={{
                              cursor: "pointer",
                              color: "#0056b3",
                              marginTop: "10px",
                            }}
                            onClick={() => {
                              const carDetails = {
                                name: "Spacious SUV",
                                type: "SUV",
                              };
                              setSelectedVeh(carDetails);
                              setShowFare(true);
                            }}
                          >
                            Fare details
                          </p>
                        ) : null}
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
                                : selectedRoute?.suvPrice + 300 ||
                                  (tripType === "rentals"
                                    ? active === 120
                                      ? 6000
                                      : active === 80
                                      ? 4000
                                      : active === 40
                                      ? 3000
                                      : null
                                    : null)}
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
                          onClick={() => {
                            const price =
                              tripType === "rentals"
                                ? active === 120
                                  ? 6000
                                  : active === 80
                                  ? 4000
                                  : active === 40
                                  ? 3000
                                  : null
                                : null;
                            handleBookNow({
                              name: "Spacious SUV",
                              type: "SUV",
                              price: price,
                            });
                          }}
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
                        src={innova}
                        alt="Compact Mini"
                      />
                      <div className="nameContainer">
                        <div className="picco-mini">Toyota Innova</div>
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
                    <div
                      style={{ height: "100%", width: "60%", display: "flex" }}
                    >
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
                              : tripType === "rentals"
                              ? Package.kilometer
                              : selectedRoute?.kilometer}{" "}
                            {Package.kilometer ? null : "Km"}
                          </b>
                        </div>
                        <div>
                          <b>
                            {tripType === "roundTrip"
                              ? selectedRoute?.hours * 2
                              : tripType === "rentals"
                              ? Package.hrs
                              : selectedRoute?.hours}
                          </b>{" "}
                          hours to reach
                        </div>
                        {tripType === "roundTrip" ||
                        tripType === "oneWay" ||
                        tripType === "airports" ? (
                          <p
                            style={{
                              cursor: "pointer",
                              color: "#0056b3",
                              marginTop: "10px",
                            }}
                            onClick={() => {
                              const carDetails = {
                                name: "Innova SUV",
                                type: "innova",
                              };
                              setSelectedVeh(carDetails);
                              setShowFare(true);
                            }}
                          >
                            Fare details
                          </p>
                        ) : null}
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
                                ? selectedRoute?.innovaPrice +
                                  selectedRoute?.innovaPrice +
                                  300
                                : selectedRoute?.innovaPrice + 300 ||
                                  (tripType === "rentals"
                                    ? active === 120
                                      ? 6500
                                      : active === 80
                                      ? 4500
                                      : active === 40
                                      ? 3500
                                      : null
                                    : null)}
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
                          onClick={() => {
                            const price =
                              tripType === "rentals"
                                ? active === 120
                                  ? 6500
                                  : active === 80
                                  ? 4500
                                  : active === 40
                                  ? 3500
                                  : null
                                : null;
                            handleBookNow({
                              name: "Innova SUV",
                              type: "innova",
                              price: price,
                            });
                          }}
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
                        src={crysta}
                        alt="Compact Mini"
                      />
                      <div className="nameContainer">
                        <div className="picco-mini">Innova Crysta</div>
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
                    <div
                      style={{ height: "100%", width: "60%", display: "flex" }}
                    >
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
                              : tripType === "rentals"
                              ? Package.kilometer
                              : selectedRoute?.kilometer}{" "}
                            {Package.kilometer ? null : "Km"}
                          </b>
                        </div>
                        <div>
                          <b>
                            {tripType === "roundTrip"
                              ? selectedRoute?.hours * 2
                              : tripType === "rentals"
                              ? Package.hrs
                              : selectedRoute?.hours}
                          </b>{" "}
                          hours to reach
                        </div>
                        {tripType === "roundTrip" ||
                        tripType === "oneWay" ||
                        tripType === "airports" ? (
                          <p
                            style={{
                              cursor: "pointer",
                              color: "#0056b3",
                              marginTop: "10px",
                            }}
                            onClick={() => {
                              const carDetails = {
                                name: "Innova Crysta",
                                type: "Crysta",
                              };
                              setSelectedVeh(carDetails);
                              setShowFare(true);
                            }}
                          >
                            Fare details
                          </p>
                        ) : null}
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
                                ? selectedRoute?.crystaPrice +
                                  selectedRoute?.crystaPrice +
                                  300
                                : selectedRoute?.crystaPrice + 300 ||
                                  (tripType === "rentals"
                                    ? active === 120
                                      ? 7000
                                      : active === 80
                                      ? 5000
                                      : active === 40
                                      ? 4000
                                      : null
                                    : null)}
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
                          onClick={() => {
                            const price =
                              tripType === "rentals"
                                ? active === 120
                                  ? 7000
                                  : active === 80
                                  ? 5000
                                  : active === 40
                                  ? 4000
                                  : null
                                : null;
                            handleBookNow({
                              name: "Innova Crysta",
                              type: "Crysta",
                              price: price,
                            });
                          }}
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
                        src={tempo}
                        alt="Compact Mini"
                      />
                      <div className="nameContainer">
                        <div className="picco-mini">Tempo Traveller</div>
                        <div className="piccomini-info">
                          info
                          <Popover
                            placement="rightTop"
                            // title={text}
                            content={TempoContent}
                            // arrow={mergedArrow}
                          >
                            <BsInfoCircle size={18} color="#d3d3d3" />
                          </Popover>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ height: "100%", width: "60%", display: "flex" }}
                    >
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
                        <div className="piccocartext-font">12 Seat</div>
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
                              : tripType === "rentals"
                              ? Package.kilometer
                              : selectedRoute?.kilometer}{" "}
                            {Package.kilometer ? null : "Km"}
                          </b>
                        </div>
                        <div>
                          <b>
                            {tripType === "roundTrip"
                              ? selectedRoute?.hours * 2
                              : tripType === "rentals"
                              ? Package.hrs
                              : selectedRoute?.hours}
                          </b>{" "}
                          hours to reach
                        </div>
                        {tripType === "roundTrip" ||
                        tripType === "oneWay" ||
                        tripType === "airports" ? (
                          <p
                            style={{
                              cursor: "pointer",
                              color: "#0056b3",
                              marginTop: "10px",
                            }}
                            onClick={() => {
                              const carDetails = {
                                name: "Tempo Traveller",
                                type: "Tempo",
                              };
                              setSelectedVeh(carDetails);
                              setShowFare(true);
                            }}
                          >
                            Fare details
                          </p>
                        ) : null}
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
                                ? selectedRoute?.TempoTravellerPrice +
                                  selectedRoute?.TempoTravellerPrice +
                                  300
                                : selectedRoute?.TempoTravellerPrice + 300 ||
                                  (tripType === "rentals"
                                    ? active === 120
                                      ? 12500
                                      : active === 80
                                      ? 11500
                                      : active === 40
                                      ? 10000
                                      : null
                                    : null)}
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
                          onClick={() => {
                            const price =
                              tripType === "rentals"
                                ? active === 120
                                  ? 12500
                                  : active === 80
                                  ? 11500
                                  : active === 40
                                  ? 10000
                                  : null
                                : null;
                            handleBookNow({
                              name: "Tempo Traveller",
                              type: "Tempo",
                              price: price,
                            });
                          }}
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
                        src={tempo}
                        alt="Compact Mini"
                      />
                      <div className="nameContainer">
                        <div className="picco-mini">Tempo Traveller</div>
                        <div className="piccomini-info">
                          info
                          <Popover
                            placement="rightTop"
                            // title={text}
                            content={BigTempoContent}
                            // arrow={mergedArrow}
                          >
                            <BsInfoCircle size={18} color="#d3d3d3" />
                          </Popover>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ height: "100%", width: "60%", display: "flex" }}
                    >
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
                        <div className="piccocartext-font">18 Seat</div>
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
                              : tripType === "rentals"
                              ? Package.kilometer
                              : selectedRoute?.kilometer}{" "}
                            {Package.kilometer ? null : "Km"}
                          </b>
                        </div>
                        <div>
                          <b>
                            {tripType === "roundTrip"
                              ? selectedRoute?.hours * 2
                              : tripType === "rentals"
                              ? Package.hrs
                              : selectedRoute?.hours}
                          </b>{" "}
                          hours to reach
                        </div>
                        {tripType === "roundTrip" ||
                        tripType === "oneWay" ||
                        tripType === "airports" ? (
                          <p
                            style={{
                              cursor: "pointer",
                              color: "#0056b3",
                              marginTop: "10px",
                            }}
                            onClick={() => {
                              const carDetails = {
                                name: "Big tempo",
                                type: "Bigtempo",
                              };
                              setSelectedVeh(carDetails);
                              setShowFare(true);
                            }}
                          >
                            Fare details
                          </p>
                        ) : null}
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
                                ? selectedRoute?.traveller18Price +
                                  selectedRoute?.traveller18Price +
                                  300
                                : selectedRoute?.traveller18Price + 300 ||
                                  (tripType === "rentals"
                                    ? active === 120
                                      ? 14000
                                      : active === 80
                                      ? 13000
                                      : active === 40
                                      ? 12000
                                      : null
                                    : null)}
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
                          onClick={() => {
                            const price =
                              tripType === "rentals"
                                ? active === 120
                                  ? 14000
                                  : active === 80
                                  ? 13000
                                  : active === 40
                                  ? 12000
                                  : null
                                : null;
                            handleBookNow({
                              name: "Big tempo",
                              type: "Bigtempo",
                              price: price,
                            });
                          }}
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
                {showBooking && (
                  <BookingThird selectedCar={selectedCar} Package={Package} />
                )}
              </div>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default BookingForm;
