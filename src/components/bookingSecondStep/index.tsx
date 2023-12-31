import React, { useEffect, useState } from "react";
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
          <div className="cardMain-div1 ">
            <Row className="card1">
              <Col xs={6} sm={4}>
                <div style={{ fontWeight: 700, fontSize: "17px" }}>
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
              </Col>
              <Col xs={6} sm={4}>
                <div className="PickpDate-Div1">
                  <div>
                    Pick Up Date:
                    <br />
                    {tripType === "rentals"
                      ? rentalFormatDate
                      : formattedDate}{" "}
                  </div>
                  <div>
                    Pickup Time:
                    <br />
                    {tripType === "rentals" ? RentalTime : timeOfPickup || ""}
                  </div>
                </div>
                {tripType === "roundTrip" ? (
                  <div className="PickpDate-Div">
                    Drop Date: <br />
                    {returnFrormat}{" "}
                  </div>
                ) : null}
              </Col>

            </Row>
          </div>
          {showBooking != true ? (

            <div className="card-div">
              <div className="subHeader1">
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
              </div>
              <div className="Container-Card">
                {newData.map((item: any, index: any) => {
                  return (
                    <>
                      <div className="inner-Card" key={index}>
                        <div className="inner-Card1">
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
                                <Popover
                                  placement="rightTop"
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
                          <div className="picco-textDiv"
                          >
                            <div className="picco-div"
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
                            <div className="Details-div1"
                              style={{
                                height: "100%",
                                width: "200px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                              }}
                            >
                              <div style={{ width: "125px" }}>
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
                                  marginBottom: "0px",
                                }}
                                onClick={() => handleClick(item)}
                              >
                                Details
                                <BiChevronDown size={25} />
                              </p>
                            </div>
                            <div className="price-div1"
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
                          <div className="button-Div1">
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
                        <div className="Details-div2"
                          style={{
                            height: "100%",
                            // width: "200px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                          }}
                        >
                          {/* <div style={{ width: "125px" }}> */}
                          <b>Includes {item?.distance} Km</b>
                          {/* </div> */}
                          <div>
                            <b>{item?.hours}</b> hours to reach
                          </div>
                          <p
                            key={item.id}
                            style={{
                              cursor: "pointer",
                              color: "#0056b3",
                              marginBottom: "0px",
                            }}
                            onClick={() => handleClick(item)}
                          >




                            Details
                            <BiChevronDown size={25} />
                          </p>
                        </div>
                        <div className="button-Div2">
                          <div className="button-Div3">
                            <button
                              style={{
                                height: "40px",
                                width: "150px",
                                fontWeight: "700",
                                fontSize: "18px",
                              }}
                              onClick={() =>
                                handleBookNow(item)
                              }
                              className="button"
                            >
                              Book now
                            </button>
                          </div>
                        </div>
                      </div>
                      <>
                        {isDetailVisible && (
                          <>
                            {isCheckVisible.id === item.id ? (
                              <div className="DetailModal-Main" key={index}>
                                <Row>
                                  <Col md={12}>
                                    <div className="DetailModal-div1">
                                      <div
                                        className={selectedSection === 'inclusion' ? 'DetailModal-div3' : 'DetailModal-div2'}
                                        onClick={() => handleSectionClick('inclusion')}
                                      >
                                        INCLUSION
                                      </div>
                                      <div
                                        className={selectedSection === 'exclusions' ? 'DetailModal-div3' : 'DetailModal-div2'}
                                        onClick={() => handleSectionClick('exclusions')}
                                      >
                                        EXCLUSION
                                      </div>
                                      <div
                                        className={selectedSection === 'facilities' ? 'DetailModal-div3' : 'DetailModal-div2'}
                                        onClick={() => handleSectionClick('facilities')}
                                      >
                                        FACILITIES
                                      </div>
                                      <div
                                        className={selectedSection === 'T&C' ? 'DetailModal-div3' : 'DetailModal-div2'}
                                        onClick={() => handleSectionClick('T&C')}
                                      >
                                        T&C
                                      </div>
                                    </div>
                                  </Col>
                                  <Row>
                                    {selectedSection === "inclusion" && (
                                      // <div className="inclusion-DIV">
                                      <>
                                        <Col md={3} sm={6} xs={6} style={{ textAlign: "center", height: "50px" }}>
                                          <BsFuelPumpDieselFill />
                                          Base Fare
                                        </Col>
                                        <Col md={3} sm={6} xs={6} style={{ textAlign: "center", height: "50px" }}>
                                          <AiFillCar className="car-img" />
                                          Driver Allowance
                                        </Col>
                                        <Col md={3} sm={6} xs={6} style={{ textAlign: "center", height: "50px" }}>
                                          <HiCurrencyRupee className="currency-img" />
                                          State Tax & Toll
                                        </Col>
                                        <Col md={3} sm={6} xs={6} style={{ textAlign: "center", height: "50px" }}>
                                          <CgNotes className="GSTimg" />
                                          GST (5%)
                                        </Col>
                                      </>
                                      // </div>
                                    )}
                                    {selectedSection === "exclusions" && (
                                      // <div className="Exclusion-item-Div">
                                      <>
                                        <Col md={4} sm={12} xs={12} style={{ textAlign: "center", height: "50px" }}>
                                          <HiCurrencyRupee
                                            style={{
                                              width: "25px",
                                              height: "35px",
                                            }}
                                          />
                                          Pay ₹14/km after 2142 km
                                        </Col>
                                        <Col md={4} sm={12} xs={12} style={{ textAlign: "center", height: "50px" }}>
                                          <BsCarFrontFill
                                            style={{
                                              width: "25px",
                                              height: "35px",
                                            }}
                                          />{" "}
                                          Multiple pickups/drops
                                        </Col>
                                        <Col md={4} sm={12} xs={12} style={{ textAlign: "center", height: "50px" }}>
                                          <LuParkingCircle
                                            style={{
                                              width: "34px",
                                              height: "25px",
                                            }}
                                          />{" "}
                                          Parking
                                        </Col>
                                      </>
                                      // </div>
                                    )}
                                    {selectedSection === "facilities" && (
                                      <>
                                        <Col md={4} sm={4} xs={4} style={{ textAlign: "center", height: "50px" }}>
                                          <MdOutlineAirlineSeatReclineExtra
                                            style={{
                                              width: "30px",
                                              height: "25px",
                                            }}
                                          />
                                          4 seater
                                        </Col>
                                        <Col md={4} sm={4} xs={4} style={{ textAlign: "center", height: "50px" }}>
                                          <BiSolidBalloon
                                            style={{
                                              width: "30px",
                                              height: "25px",
                                            }}
                                          />
                                          2 bags
                                        </Col>
                                        <Col md={4} sm={4} xs={4} style={{ textAlign: "center", height: "50px" }}>
                                          <PiFanFill
                                            style={{
                                              width: "30px",
                                              height: "25px",
                                            }}
                                          />
                                          AC
                                        </Col>
                                      </>

                                    )}
                                    {selectedSection === "T&C" && (
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
                                    )}
                                  </Row>
                                </Row>
                              </div>
                            ) : null}
                          </>
                        )}

                      </>
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
