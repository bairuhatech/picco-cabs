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
import { CgNotes } from "react-icons/cg";
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
import { Popover } from "antd";
import { HiCurrencyRupee } from "react-icons/hi";
import "./index.scss";
import { BiPackage } from "react-icons/bi";
import ModifyModal from "../../AdminPage/components/modals/modifyModal";
import { ImFileText } from "react-icons/im";


function BookingForm(props: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [showfare, setShowFare] = useState(false);
  const location = useLocation();
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedVeh, setSelectedVeh] = useState<any>(null);
  const [onClick, setOnClick] = useState(false);
  const [onClick1, setOnClick1] = useState(false);
  const [onClick2, setOnClick2] = useState(false);
  const [onClick3, setOnClick3] = useState(false);
  const [onClick4, setOnClick4] = useState(false);
  const [onClick5, setOnClick5] = useState(false);
  const [onClick6, setOnClick6] = useState(false);
  const [selectedSection, setSelectedSection] = useState(" ");
  const [selectedSection2, setSelectedSection2] = useState(" ");
  const [selectedSection3, setSelectedSection3] = useState(" ");
  const [selectedSection4, setSelectedSection4] = useState(" ");
  const [selectedSection5, setSelectedSection5] = useState(" ");
  const [selectedSection6, setSelectedSection6] = useState(" ");
  const [selectedSection7, setSelectedSection7] = useState(" ");

  const isLoggedIn = useSelector((state: any) => state.User.auth);
  const [Package, setPackage] = useState<any>({
    hrs: "8 Hrs",
    kilometer: "80 Km",
  });
  const [active, setActive] = useState<any>(80);
  const [modify, setModify] = useState(false);

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

  const handleClick = () => {
    setOnClick(!onClick);
  };

  const handleClick1 = () => {
    setOnClick1(!onClick1);
  };
  const handleClick2 = () => {
    setOnClick2(!onClick2);
  };
  const handleClick3 = () => {
    setOnClick3(!onClick3);
  };
  const handleClick4 = () => {
    setOnClick4(!onClick4);
  };
  const handleClick5 = () => {
    setOnClick5(!onClick5);
  };
  const handleClick6 = () => {
    setOnClick6(!onClick6);
  };
  const handleSectionClick = (section: any) => {
    setSelectedSection(section);
  };
  const handleSectionClick2 = (section: any) => {
    setSelectedSection2(section);
  };
  const handleSectionClick3 = (section: any) => {
    setSelectedSection3(section);
  };
  const handleSectionClick4 = (section: any) => {
    setSelectedSection4(section);
  };
  const handleSectionClick5 = (section: any) => {
    setSelectedSection5(section);
  };
  const handleSectionClick6 = (section: any) => {
    setSelectedSection6(section);
  };
  const handleSectionClick7 = (section: any) => {
    setSelectedSection7(section);
  };

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
  const handleClickRentals = (val: any, field: number) => {
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
                      onClick={handleClick}
                    >
                      Details
                    </p>
                    {/* {isDetailVisible && <div className="DetailModal-Main">DetailModal-Main Content</div>} */}
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
                          name: "Compact Mini",
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
              {onClick ? (
                <div className="DetailModal-Main">
                  <div
                    style={{
                      width: "50%",
                      height: "50%",
                      padding: "5px",
                    }}
                  >
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio10"
                      autoComplete="off"
                      defaultChecked={selectedSection === "inclusion"}
                      onClick={() => handleSectionClick("inclusion")}
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
                      defaultChecked={selectedSection === "exclusions"}
                      onClick={() => handleSectionClick("exclusions")}
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
                      defaultChecked={selectedSection === "facilities"}
                      onClick={() => handleSectionClick("facilities")}
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
                          BASEFARE
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
                            style={{ width: "20px", height: "30px" }}
                          />
                          Pay ₹14/km after 2142 km
                        </div>
                        <div className="MultiptlPickup-Div">
                          <BsCarFrontFill
                            style={{ width: "20px", height: "30px" }}
                          />{" "}
                          Multiple pickups/drops
                        </div>
                        <div className="parking-Div">
                          <LuParkingCircle
                            style={{ width: "34px", height: "25px" }}
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
                            style={{ width: "30px", height: "25px" }}
                          />
                          4 seater
                        </div>
                        <div className="bags-Div">
                          <BiSolidBalloon
                            style={{ width: "30px", height: "25px" }}
                          />
                          2 bags
                        </div>
                        <div className="AC_Div">
                          <PiFanFill
                            style={{ width: "30px", height: "25px" }}
                          />
                          AC
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedSection === "T&C" && (
                    <div>
                      <div className="TandCtext-Div">
                        • Your Trip has a KM limit as well as an Hours limit. If
                        your usage exceeds these limits, you will be charged for
                        the excess KM and/or hours used. <br />• The KM and
                        Hour(s) usage will be calculated starting from your
                        pick-up point and back to the pick-up point.
                        <br /> • The Airport entry charge, if applicable, is not
                        included in the fare and will be charged extra.
                      </div>
                    </div>
                  )}
                </div>
              ) : null}

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
                          name: "Executive Sedan",
                          type: "Sedan",
                        };
                        setSelectedVeh(carDetails);
                        setShowFare(true);
                        handleClick1();
                      }}
                    >
                      Details
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
                          name: "Executive Sedan",
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
              {onClick1 === true ? (
                <div className="DetailModal-Main">
                  <div
                    style={{
                      width: "50%",
                      height: "50%",
                      padding: "5px",
                    }}
                  >
                    {/* Add buttons to switch between sections */}
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio60"
                      autoComplete="off"
                      defaultChecked={selectedSection2 === "inclusion"}
                      onClick={() => handleSectionClick2("inclusion")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className={`btn btn-outline-success border border-2 border-success`}
                      htmlFor="btnradio60"
                    >
                      <p style={{ fontSize: "13px" }}>INCLUSION</p>
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio70"
                      autoComplete="off"
                      defaultChecked={selectedSection2 === "exclusions"}
                      onClick={() => handleSectionClick2("exclusions")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className="btn btn-outline-success border border-2 border-success  "
                      htmlFor="btnradio70"
                    >
                      <p style={{ fontSize: "13px" }}>EXCLUSION</p>
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio80"
                      autoComplete="off"
                      defaultChecked={selectedSection2 === "facilities"}
                      onClick={() => handleSectionClick2("facilities")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className="btn btn-outline-success border border-2 border-success "
                      htmlFor="btnradio80"
                    >
                      <p style={{ fontSize: "13px" }}>FACILITIES</p>
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio90"
                      autoComplete="off"
                      defaultChecked={selectedSection2 === "T&C"}
                      onClick={() => handleSectionClick2("T&C")}
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
                      <p style={{ fontSize: "13px" }}>T&C</p>
                    </label>
                  </div>

                  {/* Render fields based on the selected section */}
                  {selectedSection2 === "inclusion" && (
                    <div>
                      <div className="inclusion-DIV">
                        <div className="Basefare-DIV">
                          <BsFuelPumpDieselFill />
                          BASEFARE
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
                  {selectedSection2 === "exclusions" && (
                    <div>
                      <div className="Exclusion-item-Div">
                        <div className="pay-DIV">
                          <HiCurrencyRupee
                            style={{ width: "20px", height: "30px" }}
                          />
                          Pay ₹14/km after 2142 km
                        </div>
                        <div className="MultiptlPickup-Div">
                          <BsCarFrontFill
                            style={{ width: "20px", height: "30px" }}
                          />{" "}
                          Multiple pickups/drops
                        </div>
                        <div className="parking-Div">
                          <LuParkingCircle
                            style={{ width: "34px", height: "25px" }}
                          />{" "}
                          Parking
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedSection2 === "facilities" && (
                    <div>
                      <div className="facilities-DIV">
                        <div className="seates-Div">
                          <MdOutlineAirlineSeatReclineExtra
                            style={{ width: "30px", height: "25px" }}
                          />
                          4 seater
                        </div>
                        <div className="bags-Div">
                          <BiSolidBalloon
                            style={{ width: "30px", height: "25px" }}
                          />
                          2 bags
                        </div>
                        <div className="AC_Div">
                          <PiFanFill
                            style={{ width: "30px", height: "25px" }}
                          />
                          AC
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedSection2 === "T&C" && (
                    <div>
                      <div className="TandCtext-Div">
                        • Your Trip has a KM limit as well as an Hours limit. If
                        your usage exceeds these limits, you will be charged for
                        the excess KM and/or hours used. <br />• The KM and
                        Hour(s) usage will be calculated starting from your
                        pick-up point and back to the pick-up point.
                        <br /> • The Airport entry charge, if applicable, is not
                        included in the fare and will be charged extra.
                      </div>
                    </div>
                  )}
                </div>
              ) : null}

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
                          name: "Spacious SUV",
                          type: "SUV",
                        };
                        setSelectedVeh(carDetails);
                        setShowFare(true);
                        handleClick2();
                      }}
                    >
                      Details
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
                          name: "Spacious SUV",
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
              {onClick2 === true ? (
                <div className="DetailModal-Main">
                  <div
                    style={{
                      width: "50%",
                      height: "50%",
                      padding: "5px",
                    }}
                  >
                    {/* Add buttons to switch between sections */}
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio100"
                      autoComplete="off"
                      defaultChecked={selectedSection3 === "inclusion"}
                      onClick={() => handleSectionClick3("inclusion")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className={`btn btn-outline-success border border-2 border-success`}
                      htmlFor="btnradio100"
                    >
                      <p style={{ fontSize: "13px" }}>INCLUSION</p>
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio110"
                      autoComplete="off"
                      defaultChecked={selectedSection3 === "exclusions"}
                      onClick={() => handleSectionClick3("exclusions")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className="btn btn-outline-success border border-2 border-success  "
                      htmlFor="btnradio110"
                    >
                      <p style={{ fontSize: "13px" }}>EXCLUSION</p>
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio120"
                      autoComplete="off"
                      defaultChecked={selectedSection3 === "facilities"}
                      onClick={() => handleSectionClick3("facilities")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className="btn btn-outline-success border border-2 border-success "
                      htmlFor="btnradio120"
                    >
                      <p style={{ fontSize: "13px" }}>FACILITIES</p>
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio130"
                      autoComplete="off"
                      defaultChecked={selectedSection3 === "T&C"}
                      onClick={() => handleSectionClick3("T&C")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className="btn btn-outline-success border border-2 border-success "
                      htmlFor="btnradio130"
                    >
                      <p style={{ fontSize: "13px" }}>T&C</p>
                    </label>
                  </div>

                  {/* Render fields based on the selected section */}
                  {selectedSection3 === "inclusion" && (
                    <div>
                      <div className="inclusion-DIV">
                        <div className="Basefare-DIV">
                          <BsFuelPumpDieselFill />
                          BASEFARE
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
                  {selectedSection3 === "exclusions" && (
                    <div>
                      <div className="Exclusion-item-Div">
                        <div className="pay-DIV">
                          <HiCurrencyRupee
                            style={{ width: "20px", height: "30px" }}
                          />
                          Pay ₹14/km after 2142 km
                        </div>
                        <div className="MultiptlPickup-Div">
                          <BsCarFrontFill
                            style={{ width: "20px", height: "30px" }}
                          />{" "}
                          Multiple pickups/drops
                        </div>
                        <div className="parking-Div">
                          <LuParkingCircle
                            style={{ width: "34px", height: "25px" }}
                          />{" "}
                          Parking
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedSection3 === "facilities" && (
                    <div>
                      <div className="facilities-DIV">
                        <div className="seates-Div">
                          <MdOutlineAirlineSeatReclineExtra
                            style={{ width: "30px", height: "25px" }}
                          />
                          6/7 seater
                        </div>
                        <div className="bags-Div">
                          <BiSolidBalloon
                            style={{ width: "30px", height: "25px" }}
                          />
                          2 bags
                        </div>
                        <div className="AC_Div">
                          <PiFanFill
                            style={{ width: "30px", height: "25px" }}
                          />
                          AC
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedSection3 === "T&C" && (
                    <div>
                      <div className="TandCtext-Div">
                        • Your Trip has a KM limit as well as an Hours limit. If
                        your usage exceeds these limits, you will be charged for
                        the excess KM and/or hours used. <br />• The KM and
                        Hour(s) usage will be calculated starting from your
                        pick-up point and back to the pick-up point.
                        <br /> • The Airport entry charge, if applicable, is not
                        included in the fare and will be charged extra.
                      </div>
                    </div>
                  )}
                </div>
              ) : null}

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
                          name: "Innova SUV",
                          type: "innova",
                        };
                        setSelectedVeh(carDetails);
                        setShowFare(true);
                        handleClick3();
                      }}
                    >
                      Details
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
                            ? selectedRoute?.innovaPrice +
                              selectedRoute?.innovaPrice +
                              300
                            : selectedRoute?.innovaPrice + 300}
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
                          name: "Innova SUV",
                          type: "innova",
                        })
                      }
                      className="button"
                    >
                      Book now
                    </button>
                  </div>
                </div>
              </div>
              {onClick3 === true ? (
                <div className="DetailModal-Main">
                  <div
                    style={{
                      width: "50%",
                      height: "50%",
                      padding: "5px",
                    }}
                  >
                    {/* Add buttons to switch between sections */}
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio140"
                      autoComplete="off"
                      defaultChecked={selectedSection4 === "inclusion"}
                      onClick={() => handleSectionClick4("inclusion")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className={`btn btn-outline-success border border-2 border-success`}
                      htmlFor="btnradio140"
                    >
                      <p style={{ fontSize: "13px" }}>INCLUSION</p>
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio150"
                      autoComplete="off"
                      defaultChecked={selectedSection4 === "exclusions"}
                      onClick={() => handleSectionClick4("exclusions")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className="btn btn-outline-success border border-2 border-success  "
                      htmlFor="btnradio150"
                    >
                      <p style={{ fontSize: "13px" }}>EXCLUSION</p>
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio160"
                      autoComplete="off"
                      defaultChecked={selectedSection4 === "facilities"}
                      onClick={() => handleSectionClick4("facilities")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className="btn btn-outline-success border border-2 border-success "
                      htmlFor="btnradio160"
                    >
                      <p style={{ fontSize: "13px" }}>FACILITIES</p>
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio170"
                      autoComplete="off"
                      defaultChecked={selectedSection4 === "T&C"}
                      onClick={() => handleSectionClick4("T&C")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className="btn btn-outline-success border border-2 border-success "
                      htmlFor="btnradio170"
                    >
                      <p style={{ fontSize: "13px" }}>T&C</p>
                    </label>
                  </div>

                  {/* Render fields based on the selected section */}
                  {selectedSection4 === "inclusion" && (
                    <div>
                      <div className="inclusion-DIV">
                        <div className="Basefare-DIV">
                          <BsFuelPumpDieselFill />
                          BASEFARE
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
                  {selectedSection4 === "exclusions" && (
                    <div>
                      <div className="Exclusion-item-Div">
                        <div className="pay-DIV">
                          <HiCurrencyRupee
                            style={{ width: "20px", height: "30px" }}
                          />
                          Pay ₹14/km after 2142 km
                        </div>
                        <div className="MultiptlPickup-Div">
                          <BsCarFrontFill
                            style={{ width: "20px", height: "30px" }}
                          />{" "}
                          Multiple pickups/drops
                        </div>
                        <div className="parking-Div">
                          <LuParkingCircle
                            style={{ width: "34px", height: "25px" }}
                          />{" "}
                          Parking
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedSection4 === "facilities" && (
                    <div>
                      <div className="facilities-DIV">
                        <div className="seates-Div">
                          <MdOutlineAirlineSeatReclineExtra
                            style={{ width: "30px", height: "25px" }}
                          />
                          6 seater
                        </div>
                        <div className="bags-Div">
                          <BiSolidBalloon
                            style={{ width: "30px", height: "25px" }}
                          />
                          2 bags
                        </div>
                        <div className="AC_Div">
                          <PiFanFill
                            style={{ width: "30px", height: "25px" }}
                          />
                          AC
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedSection4 === "T&C" && (
                    <div>
                      <div className="TandCtext-Div">
                        • Your Trip has a KM limit as well as an Hours limit. If
                        your usage exceeds these limits, you will be charged for
                        the excess KM and/or hours used. <br />• The KM and
                        Hour(s) usage will be calculated starting from your
                        pick-up point and back to the pick-up point.
                        <br /> • The Airport entry charge, if applicable, is not
                        included in the fare and will be charged extra.
                      </div>
                    </div>
                  )}
                </div>
              ) : null}
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
                          name: "Innova Crysta",
                          type: "Crysta",
                        };
                        setSelectedVeh(carDetails);
                        setShowFare(true);
                        handleClick4();
                      }}
                    >
                      Details
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
                            ? selectedRoute?.crystaPrice +
                              selectedRoute?.crystaPrice +
                              300
                            : selectedRoute?.crystaPrice + 300}
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
                          name: "Innova Crysta",
                          type: "Crysta",
                        })
                      }
                      className="button"
                    >
                      Book now
                    </button>
                  </div>
                </div>
              </div>
              {onClick4 === true ? (
                <div className="DetailModal-Main">
                  <div
                    style={{
                      width: "50%",
                      height: "50%",
                      padding: "5px",
                    }}
                  >
                    {/* Add buttons to switch between sections */}
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio180"
                      autoComplete="off"
                      defaultChecked={selectedSection5 === "inclusion"}
                      onClick={() => handleSectionClick5("inclusion")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className={`btn btn-outline-success border border-2 border-success`}
                      htmlFor="btnradio180"
                    >
                      <p style={{ fontSize: "13px" }}>INCLUSION</p>
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio190"
                      autoComplete="off"
                      defaultChecked={selectedSection5 === "exclusions"}
                      onClick={() => handleSectionClick5("exclusions")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className="btn btn-outline-success border border-2 border-success  "
                      htmlFor="btnradio190"
                    >
                      <p style={{ fontSize: "13px" }}>EXCLUSION</p>
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio200"
                      autoComplete="off"
                      defaultChecked={selectedSection5 === "facilities"}
                      onClick={() => handleSectionClick5("facilities")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className="btn btn-outline-success border border-2 border-success "
                      htmlFor="btnradio200"
                    >
                      <p style={{ fontSize: "13px" }}>FACILITIES</p>
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio210"
                      autoComplete="off"
                      defaultChecked={selectedSection5 === "T&C"}
                      onClick={() => handleSectionClick5("T&C")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className="btn btn-outline-success border border-2 border-success "
                      htmlFor="btnradio210"
                    >
                      <p style={{ fontSize: "13px" }}>T&C</p>
                    </label>
                  </div>

                  {/* Render fields based on the selected section */}
                  {selectedSection5 === "inclusion" && (
                    <div>
                      <div className="inclusion-DIV">
                        <div className="Basefare-DIV">
                          <BsFuelPumpDieselFill />
                          BASEFARE
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
                  {selectedSection5 === "exclusions" && (
                    <div>
                      <div className="Exclusion-item-Div">
                        <div className="pay-DIV">
                          <HiCurrencyRupee
                            style={{ width: "20px", height: "30px" }}
                          />
                          Pay ₹14/km after 2142 km
                        </div>
                        <div className="MultiptlPickup-Div">
                          <BsCarFrontFill
                            style={{ width: "20px", height: "30px" }}
                          />{" "}
                          Multiple pickups/drops
                        </div>
                        <div className="parking-Div">
                          <LuParkingCircle
                            style={{ width: "34px", height: "25px" }}
                          />{" "}
                          Parking
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedSection5 === "facilities" && (
                    <div>
                      <div className="facilities-DIV">
                        <div className="seates-Div">
                          <MdOutlineAirlineSeatReclineExtra
                            style={{ width: "30px", height: "25px" }}
                          />
                          6 seater
                        </div>
                        <div className="bags-Div">
                          <BiSolidBalloon
                            style={{ width: "30px", height: "25px" }}
                          />
                          2 bags
                        </div>
                        <div className="AC_Div">
                          <PiFanFill
                            style={{ width: "30px", height: "25px" }}
                          />
                          AC
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedSection5 === "T&C" && (
                    <div>
                      <div className="TandCtext-Div">
                        • Your Trip has a KM limit as well as an Hours limit. If
                        your usage exceeds these limits, you will be charged for
                        the excess KM and/or hours used. <br />• The KM and
                        Hour(s) usage will be calculated starting from your
                        pick-up point and back to the pick-up point.
                        <br /> • The Airport entry charge, if applicable, is not
                        included in the fare and will be charged extra.
                      </div>
                    </div>
                  )}
                </div>
              ) : null}

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
                          name: "Tempo Traveller",
                          type: "Tempo",
                        };
                        setSelectedVeh(carDetails);
                        setShowFare(true);
                        handleClick5();
                      }}
                    >
                      Details
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
                            ? selectedRoute?.TempoTravellerPrice +
                              selectedRoute?.TempoTravellerPrice +
                              300
                            : selectedRoute?.TempoTravellerPrice + 300}
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
                          name: "Tempo Traveller",
                          type: "Tempo",
                        })
                      }
                      className="button"
                    >
                      Book now
                    </button>
                  </div>
                </div>
              </div>
              {onClick5 === true ? (
                <div className="DetailModal-Main">
                  <div
                    style={{
                      width: "50%",
                      height: "50%",
                      padding: "5px",
                    }}
                  >
                    {/* Add buttons to switch between sections */}
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio220"
                      autoComplete="off"
                      defaultChecked={selectedSection6 === "inclusion"}
                      onClick={() => handleSectionClick6("inclusion")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className={`btn btn-outline-success border border-2 border-success`}
                      htmlFor="btnradio220"
                    >
                      <p style={{ fontSize: "13px" }}>INCLUSION</p>
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio230"
                      autoComplete="off"
                      defaultChecked={selectedSection6 === "exclusions"}
                      onClick={() => handleSectionClick6("exclusions")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className="btn btn-outline-success border border-2 border-success  "
                      htmlFor="btnradio230"
                    >
                      <p style={{ fontSize: "13px" }}>EXCLUSION</p>
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio240"
                      autoComplete="off"
                      defaultChecked={selectedSection6 === "facilities"}
                      onClick={() => handleSectionClick6("facilities")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className="btn btn-outline-success border border-2 border-success "
                      htmlFor="btnradio240"
                    >
                      <p style={{ fontSize: "13px" }}>FACILITIES</p>
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio250"
                      autoComplete="off"
                      defaultChecked={selectedSection6 === "T&C"}
                      onClick={() => handleSectionClick6("T&C")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className="btn btn-outline-success border border-2 border-success "
                      htmlFor="btnradio250"
                    >
                      <p style={{ fontSize: "13px" }}>T&C</p>
                    </label>
                  </div>

                  {/* Render fields based on the selected section */}
                  {selectedSection6 === "inclusion" && (
                    <div>
                      <div className="inclusion-DIV">
                        <div className="Basefare-DIV">
                          <BsFuelPumpDieselFill />
                          BASEFARE
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
                  {selectedSection6 === "exclusions" && (
                    <div>
                      <div className="Exclusion-item-Div">
                        <div className="pay-DIV">
                          <HiCurrencyRupee
                            style={{ width: "20px", height: "30px" }}
                          />
                          Pay ₹14/km after 2142 km
                        </div>
                        <div className="MultiptlPickup-Div">
                          <BsCarFrontFill
                            style={{ width: "20px", height: "30px" }}
                          />{" "}
                          Multiple pickups/drops
                        </div>
                        <div className="parking-Div">
                          <LuParkingCircle
                            style={{ width: "34px", height: "25px" }}
                          />{" "}
                          Parking
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedSection6 === "facilities" && (
                    <div>
                      <div className="facilities-DIV">
                        <div className="seates-Div">
                          <MdOutlineAirlineSeatReclineExtra
                            style={{ width: "30px", height: "25px" }}
                          />
                          12 seater
                        </div>
                        <div className="bags-Div">
                          <BiSolidBalloon
                            style={{ width: "30px", height: "25px" }}
                          />
                          2 bags
                        </div>
                        <div className="AC_Div">
                          <PiFanFill
                            style={{ width: "30px", height: "25px" }}
                          />
                          AC
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedSection6 === "T&C" && (
                    <div>
                      <div className="TandCtext-Div">
                        • Your Trip has a KM limit as well as an Hours limit. If
                        your usage exceeds these limits, you will be charged for
                        the excess KM and/or hours used. <br />• The KM and
                        Hour(s) usage will be calculated starting from your
                        pick-up point and back to the pick-up point.
                        <br /> • The Airport entry charge, if applicable, is not
                        included in the fare and will be charged extra.
                      </div>
                    </div>
                  )}
                </div>
              ) : null}
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
                          name: "Big tempo",
                          type: "Bigtempo",
                        };
                        setSelectedVeh(carDetails);
                        setShowFare(true);
                        handleClick6();
                      }}
                    >
                      Details
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
                            ? selectedRoute?.traveller18Price +
                              selectedRoute?.traveller18Price +
                              300
                            : selectedRoute?.traveller18Price + 300}
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
                          name: "Big tempo",
                          type: "Bigtempo",
                        })
                      }
                      className="button"
                    >
                      Book now
                    </button>
                  </div>
                </div>
              </div>
              {onClick6 === true ? (
                <div className="DetailModal-Main">
                  <div
                    style={{
                      width: "50%",
                      height: "50%",
                      padding: "5px",
                    }}
                  >
                    {/* Add buttons to switch between sections */}
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio260"
                      autoComplete="off"
                      defaultChecked={selectedSection7 === "inclusion"}
                      onClick={() => handleSectionClick7("inclusion")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className={`btn btn-outline-success border border-2 border-success`}
                      htmlFor="btnradio260"
                    >
                      <p style={{ fontSize: "13px" }}>INCLUSION</p>
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio270"
                      autoComplete="off"
                      defaultChecked={selectedSection7 === "exclusions"}
                      onClick={() => handleSectionClick7("exclusions")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className="btn btn-outline-success border border-2 border-success  "
                      htmlFor="btnradio270"
                    >
                      <p style={{ fontSize: "13px" }}>EXCLUSION</p>
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio280"
                      autoComplete="off"
                      defaultChecked={selectedSection7 === "facilities"}
                      onClick={() => handleSectionClick7("facilities")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className="btn btn-outline-success border border-2 border-success "
                      htmlFor="btnradio280"
                    >
                      <p style={{ fontSize: "13px" }}>FACILITIES</p>
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio290"
                      autoComplete="off"
                      defaultChecked={selectedSection7 === "T&C"}
                      onClick={() => handleSectionClick7("T&C")}
                    />
                    <label
                      style={{
                        width: "100px",
                        fontWeight: 500,
                        fontSize: "15px",
                        height: "35px",
                      }}
                      className="btn btn-outline-success border border-2 border-success "
                      htmlFor="btnradio290"
                    >
                      <p style={{ fontSize: "13px" }}>T&C</p>
                    </label>
                  </div>

                  {/* Render fields based on the selected section */}
                  {selectedSection7 === "inclusion" && (
                    <div>
                      <div className="inclusion-DIV">
                        <div className="Basefare-DIV">
                          <BsFuelPumpDieselFill />
                          BASEFARE
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
                  {selectedSection7 === "exclusions" && (
                    <div>
                      <div className="Exclusion-item-Div">
                        <div className="pay-DIV">
                          <HiCurrencyRupee
                            style={{ width: "20px", height: "30px" }}
                          />
                          Pay ₹14/km after 2142 km
                        </div>
                        <div className="MultiptlPickup-Div">
                          <BsCarFrontFill
                            style={{ width: "20px", height: "30px" }}
                          />{" "}
                          Multiple pickups/drops
                        </div>
                        <div className="parking-Div">
                          <LuParkingCircle
                            style={{ width: "34px", height: "25px" }}
                          />{" "}
                          Parking
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedSection7 === "facilities" && (
                    <div>
                      <div className="facilities-DIV">
                        <div className="seates-Div">
                          <MdOutlineAirlineSeatReclineExtra
                            style={{ width: "30px", height: "25px" }}
                          />
                          18 seater
                        </div>
                        <div className="bags-Div">
                          <BiSolidBalloon
                            style={{ width: "30px", height: "25px" }}
                          />
                          2 bags
                        </div>
                        <div className="AC_Div">
                          <PiFanFill
                            style={{ width: "30px", height: "25px" }}
                          />
                          AC
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedSection7 === "T&C" && (
                    <div>
                      <div className="TandCtext-Div">
                        • Your Trip has a KM limit as well as an Hours limit. If
                        your usage exceeds these limits, you will be charged for
                        the excess KM and/or hours used. <br />• The KM and
                        Hour(s) usage will be calculated starting from your
                        pick-up point and back to the pick-up point.
                        <br /> • The Airport entry charge, if applicable, is not
                        included in the fare and will be charged extra.
                      </div>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <div className="cardMain-div2">
            {showBooking && <BookingThird selectedCar={selectedCar} />}
          </div>
        )}
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
                        onClick={()=> {
                          setModify(true)
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
                          setModify(false)
                        }}
                        />
                      ): null}
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
