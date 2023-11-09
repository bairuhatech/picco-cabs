import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineSevereCold } from "react-icons/md";
// import { PiFanFill } from "react-icons/lu";
import { MdAirlineSeatReclineNormal } from "react-icons/md"
import smallcarimg from "../../assets/images/car_mini_small.png";
import sedanimg from "../../assets/images/car_sedan_small.png";
import suvimage from "../../assets/images/car_suv_small.png";
import innova from "../../assets/images/car_suv_innova.png";
import crysta from "../../assets/images/car_suv_innova_crysta.png";
import tempo from "../../assets/images/car_tempo.png";
import { Row, Col, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CgNotes } from "react-icons/cg";
import { BiChevronDown } from "react-icons/bi";

import FareModal from "../fareDetails";
import { LuParkingCircle } from "react-icons/lu";
import CustomModal from "../loginForm/index";
import { PiFanFill } from "react-icons/pi";
import { BiSolidBalloon } from "react-icons/bi";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { useSelector } from "react-redux";
import BookingThird from "../BookingThirdStep";
import moment from "moment";
// import { BsFuelPumpDieselFill } from "react-icons/bs";
import NavigationBar from "../navBar";
import {
  BsFuelPumpDieselFill,
  BsInfoCircle,
  BsCarFrontFill,
} from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { Popover, Tooltip } from "antd";
import { HiCurrencyRupee } from "react-icons/hi";
import "./index.scss";
import { ImFileText } from "react-icons/im";
import { BiPackage } from "react-icons/bi";
import ModifyModal from "../../AdminPage/components/modals/modifyModal";

function BookingForm(props: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [showfare, setShowFare] = useState(false);
  const location = useLocation();
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedVeh, setSelectedVeh] = useState<any>(null);
  // const [onClick, setOnClick] = useState(false);
  const [isDetailVisible, setIsDetailVisible] = useState<any>(false);
  const [isCheckVisible, setIscheckVisible] = useState<any>();
  const [selectedSection, setSelectedSection] = useState("inclusion");
  const [selectedCard, setSelectedCard] = useState(null);

  const isLoggedIn = useSelector((state: any) => state.User.auth);
  const [Package, setPackage] = useState<any>({
    hrs: "8 Hrs",
    kilometer: "80 Km",
  });
  const [active, setActive] = useState<any>(80);
  const [modify, setModify] = useState(false);

  const handleClick = (item: any) => {
    setIsDetailVisible(!isDetailVisible);
    setIscheckVisible(item);
  };
  const title = <div></div>

  const handleClickRentals = (val: any, field: number) => {
    setPackage(val);
    setActive(field);
  };

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

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleBookNow = (item: any) => {
    // setSelectedCar(carData);
    setSelectedCar(item);

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

  const openfare = () => {
    setShowFare(true);
  };
  const closefare = () => {
    setShowFare(false);
  };

  // const toggleDetailVisibility = () => {
  //   setIsDetailVisible(!isDetailVisible);
  // };

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
  const newData = [
    {
      id: 1,
      Image: smallcarimg,
      name: " Mini",
      seat: 4,
      price:
        tripType === "roundTrip"
          ? selectedRoute?.miniPrice * 2 + 300
          : tripType === "rentals" && Package.kilometer === "80 Km"
          ? 3000
          : Package.kilometer === "120 Km"
          ? 6000
          : Package.kilometer === " 40 Km"
          ? 1500
          : selectedRoute?.miniPrice,
      hours:
        tripType === "roundTrip"
          ? selectedRoute?.hours * 2
          : tripType === "rentals" && Package.kilometer === "80 Km"
          ? 8
          : Package.kilometer === "120 Km"
          ? 12
          : Package.kilometer === " 40 Km"
          ? 4
          : selectedRoute?.hours,
      distance:
        tripType === "roundTrip"
          ? selectedRoute?.kilometer * 2
          : tripType === "rentals" && Package.kilometer === "80 Km"
          ? 80
          : Package.kilometer === "120 Km"
          ? 120
          : Package.kilometer === " 40 Km"
          ? 40
          : selectedRoute?.kilometer,
      tooltip: "Compact mini: Small and portable.",
    },
    {
      id: 2,
      Image: sedanimg,
      name: "sedan",
      seat: 4,
      price:
        tripType === "roundTrip"
          ? selectedRoute?.sedanPrice * 2 + 300
          : tripType === "rentals" && Package.kilometer === "80 Km"
          ? 5000
          : Package.kilometer === "120 Km"
          ? 7000
          : Package.kilometer === " 40 Km"
          ? 3500
          : selectedRoute?.sedanPrice + 300,
      hours:
        tripType === "roundTrip"
          ? selectedRoute?.hours * 2
          : tripType === "rentals" && Package.kilometer === "80 Km"
          ? 8
          : Package.kilometer === "120 Km"
          ? 12
          : Package.kilometer === " 40 Km"
          ? 4
          : selectedRoute?.hours,
      distance:
        tripType === "roundTrip"
          ? selectedRoute?.kilometer * 2
          : tripType === "rentals" && Package.kilometer === "80 Km"
          ? 80
          : Package.kilometer === "120 Km"
          ? 120
          : Package.kilometer === " 40 Km"
          ? 40
          : selectedRoute?.kilometer,
      tooltip: "Four-door, enclosed passenger car style.",
    },
    {
      id: 3,
      Image: suvimage,
      name: "suv",
      seat: 4,
      price:
        tripType === "roundTrip"
          ? selectedRoute?.suvPrice * 2 + 300
          : tripType === "rentals" && Package.kilometer === "80 Km"
          ? 6000
          : Package.kilometer === "120 Km"
          ? 8000
          : Package.kilometer === " 40 Km"
          ? 3500
          : selectedRoute?.suvPrice + 300,
      hours:
        tripType === "roundTrip"
          ? selectedRoute?.hours * 2
          : tripType === "rentals" && Package.kilometer === "80 Km"
          ? 8
          : Package.kilometer === "120 Km"
          ? 12
          : Package.kilometer === " 40 Km"
          ? 4
          : selectedRoute?.hours,
      distance:
        tripType === "roundTrip"
          ? selectedRoute?.kilometer * 2
          : tripType === "rentals" && Package.kilometer === "80 Km"
          ? 80
          : Package.kilometer === "120 Km"
          ? 120
          : Package.kilometer === " 40 Km"
          ? 40
          : selectedRoute?.kilometer,
      tooltip: "Sport Utility Vehicle for versatility.",
    },
    {
      id: 4,
      Image: innova,
      name: "Innova",
      seat: 4,
      price:
        tripType === "roundTrip"
          ? selectedRoute?.innovaPrice * 2 + 300
          : tripType === "rentals" && Package.kilometer === "80 Km"
          ? 7000
          : Package.kilometer === "120 Km"
          ? 9000
          : Package.kilometer === " 40 Km"
          ? 4500
          : selectedRoute?.innovaPrice + 300,
      hours:
        tripType === "roundTrip"
          ? selectedRoute?.hours * 2
          : tripType === "rentals" && Package.kilometer === "80 Km"
          ? 8
          : Package.kilometer === "120 Km"
          ? 12
          : Package.kilometer === " 40 Km"
          ? 4
          : selectedRoute?.hours,
      distance:
        tripType === "roundTrip"
          ? selectedRoute?.kilometer * 2
          : tripType === "rentals" && Package.kilometer === "80 Km"
          ? 80
          : Package.kilometer === "120 Km"
          ? 120
          : Package.kilometer === " 40 Km"
          ? 40
          : selectedRoute?.kilometer,
      tooltip: "Toyota's versatile MPV (Multi-Purpose Vehicle).",
    },
    {
      id: 5,
      Image: crysta,
      name: "Crysta",
      seat: 4,
      price:
        tripType === "roundTrip"
          ? selectedRoute?.crystaPrice * 2 + 300
          : tripType === "rentals" && Package.kilometer === "80 Km"
          ? 8000
          : Package.kilometer === "120 Km"
          ? 11000
          : Package.kilometer === " 40 Km"
          ? 5500
          : selectedRoute?.crystaPrice + 300,
      hours:
        tripType === "roundTrip"
          ? selectedRoute?.hours * 2
          : tripType === "rentals" && Package.kilometer === "80 Km"
          ? 8
          : Package.kilometer === "120 Km"
          ? 12
          : Package.kilometer === " 40 Km"
          ? 4
          : selectedRoute?.hours,
      distance:
        tripType === "roundTrip"
          ? selectedRoute?.kilometer * 2
          : tripType === "rentals" && Package.kilometer === "80 Km"
          ? 80
          : Package.kilometer === "120 Km"
          ? 120
          : Package.kilometer === " 40 Km"
          ? 40
          : selectedRoute?.kilometer,
      tooltip: "Toyota Innova Crysta: An upgraded version.",
    },
    {
      id: 6,
      Image: tempo,
      name: "Tempo-12",
      seat: 12,
      price:
        tripType === "roundTrip"
          ? selectedRoute?.TempoTravellerPrice * 2 + 300
          : tripType === "rentals" && Package.kilometer === "80 Km"
          ? 9000
          : Package.kilometer === "120 Km"
          ? 12000
          : Package.kilometer === " 40 Km"
          ? 6500
          : selectedRoute?.TempoTravellerPrice + 300,
      hours:
        tripType === "roundTrip"
          ? selectedRoute?.hours * 2
          : tripType === "rentals" && Package.kilometer === "80 Km"
          ? 8
          : Package.kilometer === "120 Km"
          ? 12
          : Package.kilometer === " 40 Km"
          ? 4
          : selectedRoute?.hours,
      distance:
        tripType === "roundTrip"
          ? selectedRoute?.kilometer * 2
          : tripType === "rentals" && Package.kilometer === "80 Km"
          ? 80
          : Package.kilometer === "120 Km"
          ? 120
          : Package.kilometer === " 40 Km"
          ? 40
          : selectedRoute?.kilometer,
      tooltip: "Tempo: Commercial passenger-carrying vehicle.",
    },
    {
      id: 7,
      Image: tempo,
      name: "Tempo-18",
      seat: 18,
      price:
        tripType === "roundTrip"
          ? selectedRoute?.traveller18Price * 2 + 300
          : tripType === "rentals" && Package.kilometer === "80 Km"
          ? 11000
          : Package.kilometer === "120 Km"
          ? 14000
          : Package.kilometer === " 40 Km"
          ? 8000
          : selectedRoute?.traveller18Price + 300,
      hours:
        tripType === "roundTrip"
          ? selectedRoute?.hours * 2
          : tripType === "rentals" && Package.kilometer === "80 Km"
          ? 8
          : Package.kilometer === "120 Km"
          ? 12
          : Package.kilometer === " 40 Km"
          ? 4
          : selectedRoute?.hours,
      distance:
        tripType === "roundTrip"
          ? selectedRoute?.kilometer * 2
          : tripType === "rentals" && Package.kilometer === "80 Km"
          ? 80
          : Package.kilometer === "120 Km"
          ? 120
          : Package.kilometer === " 40 Km"
          ? 40
          : selectedRoute?.kilometer,
      tooltip: "Tempo with 18 seats: Large passenger vehicle.",
    },
  ];

  const handleSectionClick = (sectionName: any) => {
    setSelectedSection(sectionName);
  };

  const handleCardDetailsClick = (index: any) => {
    setSelectedCard(index);
  };

  return (
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
                onClick={() =>
                  handleClickRentals(kilometerRental.kilometer1, 40)
                }
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
                onClick={(val) =>
                  handleClickRentals(kilometerRental.kilometer2, 80)
                }
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
                  handleClickRentals(kilometerRental.kilometer3, 120)
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
                        ? "Cab From " + (selectedRoute?.place + " Airport")
                        : "Cab To " + (selectedRoute?.place + " Airport")
                      : tripType === "oneWay"
                      ? "One Way"
                      : tripType === "roundTrip"
                      ? "Round Trip"
                      : tripType === "rentals"
                      ? "Rental"
                      : tripType === "airports"
                      ? "Airport"
                      : null}
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
                      onClick={() => {
                        setModify(true);
                      }}
                    >
                      Modify
                    </button>
                    {modify ? (
                      <ModifyModal
                        show={modify}
                        selectedRoute={selectedRoute}
                        pickUpDate={pickUpDate}
                        timeOfPickup={timeOfPickup}
                        dropOffDate={dropOffDate}
                        onHide={() => {
                          setModify(false);
                        }}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="Container-Card">
                {newData.map((item: any, index: any) => {
                  return (
                    <>
                      <div className="inner-Card" key={index}>
                        <div style={{ display: "flex" }}>
                          <img
                            className="piccominiImg"
                            style={{ height: "70px", marginTop: "8px" }}
                            src={item?.Image}
                            alt="Compact Mini"
                          />
                          <div className="nameContainer">
                            <div className="picco-mini">{item?.name}</div>
                            <div className="piccomini-info">
                              {/* info */}
                              <Popover
                                placement="rightTop"
                                // title={text}
                                // content={minicontent}
                                // arrow={mergedArrow}
                              >
                                <Tooltip
                                  placement="bottom"
                                  title={item.tooltip}
                                >
                                  <BsInfoCircle size={18} color="#d3d3d3" />
                                </Tooltip>
                              </Popover>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            height: "100%",
                            width: "60%",
                            display: "flex",
                          }}
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
                            <div className="piccocartext-font">
                              AC{" "}
                              <PiFanFill
                                style={{
                                  width: "20px",
                                  height: "15",
                                }}
                              />
                              <img src="FaSnowflake" alt="" />
                            </div>
                            <div className="piccocartext-font">
                              {item?.seat}Seat
                              <MdAirlineSeatReclineNormal
                                style={{
                                  width: "20px",
                                  height: "15",
                                }}
                              />
                            </div>
                            <div className="piccocartext-font">
                              2 Bag
                              <BiSolidBalloon
                                style={{
                                  width: "20px",
                                  height: "15px",
                                }}
                              />
                            </div>
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
                              <b>Includes {item?.distance} Km</b>
                            </div>
                            <div>
                              <b>{item?.hours}</b> hours to reach
                            </div>
                            <p
                              key={item.id}
                              style={{
                                cursor: "pointer",
                                color: "#0056b3",
                                marginTop: "10px",
                              }}
                              onClick={() => handleClick(item)}
                            >
                              Details
                              <BiChevronDown size={25} />
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
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <p>
                                {" "}
                                ₹ <b key={index}>{item?.price}</b>
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
                          <CustomModal
                            isModalOpen={show}
                            handleCancel={Cancel}
                          />
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
                                // handleBookNow({
                                //   name: "Compact Mini",
                                //   type: "Mini",
                                // })
                                handleBookNow(item)
                              }
                              className="button"
                            >
                              Book now
                            </button>
                          </div>
                        </div>
                      </div>
                      {isDetailVisible && (
                        <>
                          {isCheckVisible.id === item.id ? (
                            <div className="DetailModal-Main" key={index}>
                              <div
                                style={{
                                  width: "50%",
                                  height: "50%",
                                  padding: "5px",
                                  // backgroundColor: "blue",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                              >
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="btnradio"
                                  id="btnradio10"
                                  autoComplete="off"
                                  defaultChecked={
                                    selectedSection === "inclusion"
                                  }
                                  onClick={() =>
                                    handleSectionClick("inclusion")
                                  }
                                />
                                <label
                                  style={{
                                    width: "100px",
                                    fontWeight: 500,
                                    fontSize: "15px",
                                    height: "35px",
                                    // backgroundColor: "red",
                                  }}
                                  className={`btn btn-outline-success border border-2 border-success`}
                                  htmlFor="btnradio10"
                                >
                                  <p style={{ fontSize: "13px" }}>INCLUSION</p>
                                </label>
                                {/* /* //*** */}

                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="btnradio"
                                  id="btnradio30"
                                  autoComplete="off"
                                  defaultChecked={
                                    selectedSection === "exclusions"
                                  }
                                  onClick={() =>
                                    handleSectionClick("exclusions")
                                  }
                                />
                                <label
                                  style={{
                                    width: "100px",
                                    fontWeight: 500,
                                    fontSize: "15px",
                                    height: "35px",
                                  }}
                                  className="btn btn-outline-success border border-2 border-success  "
                                  htmlFor="btnradio30"
                                >
                                  <p style={{ fontSize: "13px" }}>EXCLUSION</p>
                                </label>

                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="btnradio"
                                  id="btnradio90"
                                  autoComplete="off"
                                  defaultChecked={
                                    selectedSection === "facilities"
                                  }
                                  onClick={() =>
                                    handleSectionClick("facilities")
                                  }
                                />
                                <label
                                  style={{
                                    width: "100px",
                                    fontWeight: 500,
                                    fontSize: "15px",
                                    height: "35px",
                                  }}
                                  className="btn btn-outline-success border border-2 border-success "
                                  htmlFor="btnradio90"
                                >
                                  <p style={{ fontSize: "13px" }}>FACILITIES</p>
                                </label>

                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="btnradio"
                                  id="btnradio98"
                                  autoComplete="off"
                                  defaultChecked={selectedSection === "T&C"}
                                  onClick={() => handleSectionClick("T&C")}
                                />
                                <label
                                  style={{
                                    width: "100px",
                                    fontWeight: 500,
                                    fontSize: "15px",
                                    height: "35px",
                                  }}
                                  className="btn btn-outline-success border border-2 border-success "
                                  htmlFor="btnradio98"
                                >
                                  <p style={{ fontSize: "13px" }}>T&C</p>
                                </label>
                              </div>

                              {/* Render fields based on the selected section */}
                              {selectedSection === "inclusion" && (
                                <div>
                                  <div className="inclusion-DIV">
                                    <div className="Basefare-DIV">
                                      <BsFuelPumpDieselFill />
                                      Base Fare
                                    </div>
                                    <div className="Driver-Div">
                                      <AiFillCar className="car-img" />
                                      Driver Allowance
                                    </div>
                                    <div className="StateTax-Div">
                                      <HiCurrencyRupee className="currency-img" />
                                      State Tax & Toll
                                    </div>
                                    <div className="GST-Div">
                                      <CgNotes className="GSTimg" />
                                      GST (5%)
                                    </div>
                                  </div>{" "}
                                </div>
                              )}
                              {selectedSection === "exclusions" && (
                                <div>
                                  <div className="Exclusion-item-Div">
                                    <div className="pay-DIV">
                                      <HiCurrencyRupee
                                        style={{
                                          width: "25px",
                                          height: "35px",
                                        }}
                                      />
                                      Pay ₹14/km after 2142 km
                                    </div>
                                    <div className="MultiptlPickup-Div">
                                      <BsCarFrontFill
                                        style={{
                                          width: "25px",
                                          height: "35px",
                                        }}
                                      />{" "}
                                      Multiple pickups/drops
                                    </div>
                                    <div className="parking-Div">
                                      <LuParkingCircle
                                        style={{
                                          width: "34px",
                                          height: "25px",
                                        }}
                                      />{" "}
                                      Parking
                                    </div>
                                  </div>
                                </div>
                              )}
                              {selectedSection === "facilities" && (
                                <div>
                                  <div className="facilities-DIV">
                                    <div className="seates-Div">
                                      <MdOutlineAirlineSeatReclineExtra
                                        style={{
                                          width: "30px",
                                          height: "25px",
                                        }}
                                      />
                                      4 seater
                                    </div>
                                    <div className="bags-Div">
                                      <BiSolidBalloon
                                        style={{
                                          width: "30px",
                                          height: "25px",
                                        }}
                                      />
                                      2 bags
                                    </div>
                                    <div className="AC_Div">
                                      <PiFanFill
                                        style={{
                                          width: "30px",
                                          height: "25px",
                                        }}
                                      />
                                      AC
                                    </div>
                                  </div>
                                </div>
                              )}
                              {selectedSection === "T&C" && (
                                <div>
                                  <div className="TandCtext-Div">
                                    • Your Trip has a KM limit as well as an
                                    Hours limit. If your usage exceeds these
                                    limits, you will be charged for the excess
                                    KM and/or hours used. <br />• The KM and
                                    Hour(s) usage will be calculated starting
                                    from your pick-up point and back to the
                                    pick-up point.
                                    <br /> • The Airport entry charge, if
                                    applicable, is not included in the fare and
                                    will be charged extra.
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : null}
                        </>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="cardMain-div2">
              {showBooking && <BookingThird selectedCar={selectedCar} />}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default BookingForm;
