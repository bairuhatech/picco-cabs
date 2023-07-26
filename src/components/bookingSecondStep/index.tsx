import React, { useState } from "react";
import "./index.scss";
import { IoMdArrowRoundBack } from "react-icons/io";
import smallcarimg from "../../assets/images/car_mini_small.png";
import sedanimg from "../../assets/images/car_sedan_small.png";
import suvimage from "../../assets/images/car_suv_small.png";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import FareModal from "../fareDetails";
import CustomModal from "../loginForm/index";

function BookingForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  return (
    <div>
      <div className="cardMain-div">
        <div className="card-Div">
          <div style={{ fontSize: "20px" }} className="selectcar-Div">
            <IoMdArrowRoundBack
              onClick={() => window.history.back()}
              className="Back-arrow"
            />
            select a car
          </div>

          <div className="card">
            <div className="picco-mini">Picco mini</div>
            <div className="piccoimg-Div">
              <img
                className="piccominiImg"
                style={{ width: "33%", height: "100%" }}
                src={smallcarimg}
                alt="Picco Mini"
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
                  <button onClick={() => setFormModal(true)} className="button">
                    Book now
                  </button>
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
                alt="Picco SUV"
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
                  <button onClick={() => setFormModal(true)} className="button">
                    Book now
                  </button>
                </div>
                {/* )} */}
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
                alt="Picco Sedan"
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
                  <button
                    onClick={() => setFormModal(!formModal)}
                    className="button"
                  >
                    Book now
                  </button>
                </div>
              </div>
              {formModal && <CustomModal open={show} Cancel={Cancel} />}
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
