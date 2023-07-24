import React, { useState } from "react";
import "./index.scss";
import { IoMdArrowRoundBack } from "react-icons/io";
import smallcarimg from "../../assets/images/car_mini_small.png";
import sedanimg from "../../assets/images/car_sedan_small.png";
import suvimage from "../../assets/images/car_suv_small.png";
// import index   from "../";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import FareModal from "../fareDetails";

function BookingForm() {
  const datas = [
    {
      name: "Picco Mini",
      seats: "4 seats",
      bag: "1bag",
      price: "2380",
      image: smallcarimg,
    },
    {
      name: "Picco Sedan",
      seats: "4 seats",
      bag: "2 bags",
      price: "2640",
      image: sedanimg,
    },
    {
      name: "Picco Suv",
      seats: "6 seats",
      bag: "3 bags",
      price: "3290",
      image: suvimage,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="cardMain-div">
        <div className="card-Div">
          <div style={{ fontSize: "20px" }} className="selectcar-Div">
            <IoMdArrowRoundBack className="Back-arrow" /> select a car
          </div>

          <div className="card">
            <div className="picco-mini">Picco mini</div>
            <div className="piccoimg-Div">
              <img
                className="piccominiImg"
                style={{ width: "33%", height: "100%" }}
                src={smallcarimg}
              />

              <div className="bookingbutton-Div">
                <div className="faredetail-Div">
                  <p
                    style={{ cursor: "pointer", color: "#0056b3" }}
                    onClick={() => setIsModalOpen(!isModalOpen)}
                  >
                    Fare details
                  </p>
                </div>
                <div className="button-Div">
                  <button className="button">Book now</button>
                </div>
              </div>
            </div>
            <div className="seats-Div">
              <div className="seatcontent-Div">
                <span>Ac</span>
                <span>6 seat</span>
                <span>3 bag</span>
              </div>
              <div className="price-Div">₹ 23180</div>
            </div>
          </div>
          <br />
          <div className="card">
            <div className="picco-mini">Picco suv</div>
            <div className="piccoimg-Div">
              <img
                className="piccosuvImg"
                style={{ width: "30%", height: "100%" }}
                src={suvimage}
              />

              <div className="bookingbutton-Div">
                <div className="faredetail-Div">
                  <p
                    style={{ color: "#0056b3" }}
                    onClick={() => setIsModalOpen(!isModalOpen)}
                  >
                    Fare details
                  </p>
                </div>
                <div className="button-Div">
                  <button className="button">Book now</button>
                </div>
              </div>
            </div>
            <div className="seats-Div">
              <div className="seatcontent-Div">
                <span>Ac</span>
                <span>4 seat</span>
                <span>2 bag</span>
              </div>
              <div className="price-Div">₹ 23180</div>
            </div>
          </div>
          <br />
          <div className="card">
            <div className="picco-mini">Picco sedan</div>
            <div className="piccoimg-Div">
              <img
                className="piccosedanImg"
                style={{ width: "30%", height: "100%" }}
                src={sedanimg}
              />
              {isModalOpen && (
                <FareModal open={showModal} close={handleCancel} />
              )}

              <div className="bookingbutton-Div">
                <div className="faredetail-Div">
                  <p
                    style={{ cursor: "pointer", color: "#0056b3" }}
                    onClick={() => setIsModalOpen(!isModalOpen)}
                  >
                    Fare details
                  </p>
                </div>
                <div className="button-Div">
                  <button className="button">Book now</button>
                </div>
              </div>
            </div>
            <div className="seats-Div">
              <div className="seatcontent-Div">
                <span>Ac</span>
                <span>4 seat</span>
                <span>1 bag</span>
              </div>
              <div className="price-Div">₹ 23180</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
