import React, { useState, useEffect } from "react";
import { Form, Input, Button, message, Spin, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import smallcarimg from "../../assets/images/car_mini_small.png";
import "./index.scss";
import BookingForm from "../bookingSecondStep";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useLocation } from "react-router-dom";
import moment from "moment";
import piccologo from "../../assets/images/logo.png";

const BookingThird = (props: any) => {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const {
    pickUpLoc,
    dropOffLoc,
    pickUpDate,
    dropOffDate,
    timeOfPickup,
    pickUpTime,
    carDetails,
    tripType,
    selectedRoute,
    Package,
    RentPlace,
    modes,
    modesecond,
    userName,
  } = location.state;
  

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const formattedDate = moment(pickUpDate).format("MMMM Do, YYYY");

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      const requestBody = {
        userId: 1,
        bookType: modes || modesecond,
        tripStatus: tripType || "roundTrip",
        pickUpDate: "2023-08-01T12:00:00Z",
        dropOffDate: "2023-08-02T12:00:00Z",
        pickUpLat: 37.7749,
        pickUpLng: -122.4194,
        pickUpLoc: selectedRoute?.place || RentPlace || "",
        dropOffLat: 37.7749,
        dropOffLng: -122.4194,
        dropOffLoc: selectedRoute?.location || "",
        pickUpTime: 12,
        hours: Package?.hours || 0,
        kms: Package?.kms || 0,
        estimatedAmt: selectedRoute?.rate || 0,
        returnDate:"2023-08-02T12:00:00Z",
        rentallPack: 1,
        car: "",
        PiccoCar: props.selectedCar.name,
        comments: values.Comments,
        userName: values.name,
        phoneNumber: values.phone,
        email: values.email,
        driver: "",
        adminStatus: "roaming",
        status: "pending",
      };

      console.log(
        ">>>>>>>>>>>>>>>>>>>??????????????????",
        selectedRoute?.location
      );

      

      const response = await fetch(
        "https://piccocabs-server-46642b82a774.herokuapp.com/Booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();
      console.log(">>>>>>>>>>>>>>>>>>>>>{{{{{{{{{{{{{{{{{{{{{{{", data);
      setLoading(false);
      console.log("API Response:", data);
      setIsModalOpen(true);
      setTimeout(() => {
        setIsModalOpen(false);
        window.history.back()
      }, 2000);
    } catch (error) {
      console.error("API Error:", error);
      setLoading(false);
    }
  };
  let pack =
    Package?.value === "custom_package" ? (
      <div>
        {Package?.hours}Hr&nbsp;{Package?.kms}kms
      </div>
    ) : (
      <div>{Package?.label}</div>
    );
  return (
    <div>
      {show ? (
        <Form onFinish={onFinish}>
          <div className="booking-Div">
            <div style={{ display: "flex" }}>
              {/* <div> */}
              <IoMdArrowRoundBack
                onClick={() => window.history.back()}
                size={25}
                className="Back-arrow mb-3"
              />
              {/* </div> */}
              <div style={{ marginTop: "19px", marginLeft: "12px" }}>
                <p>
                  {RentPlace || selectedRoute?.place}
                  &nbsp;<b>{RentPlace ? "" : "to"}</b> &nbsp;
                  {RentPlace ? "" : selectedRoute?.location}
                  <br />
                  <b>{Package?.label ? "Package: " : "Pickup: "}</b>
                  {pack || formattedDate}
                  <b>{Package?.label ? "" : "Time:"}</b>
                  {timeOfPickup || ""}
                </p>
              </div>
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
                      // onClick={() => setIsModalOpen(!isModalOpen)}
                    >
                      Fare details
                    </p>
                  </div>
                  <div className="button-Div">
                    {/* <button className="button">Book now</button> */}
                  </div>
                </div>
              </div>
              <div className="seats-Div">
                <div className="seatcontent-Div">
                  <span>Ac</span>
                  <span>6 seat</span>
                  <span>3 bag</span>
                </div>
                <div className="price-Div">₹ {selectedRoute?.rate}</div>
              </div>
            </div>
            <div className="TravallersDetail-Div">
              <p style={{ fontSize: "20px", fontWeight: "5px" }}>
                Traveller's Detail
              </p>
            </div>
            <div className="input-Div">
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input
                  placeholder="Name"
                  style={{
                    borderRadius: "5px",
                    width: "100%",
                    height: "35px",
                    backgroundColor: "#f1f1f1",
                    textIndent: "5px",
                  }}
                />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                ]}
              >
                <Input
                  placeholder="Phone"
                  style={{
                    borderRadius: "5px",
                    width: "100%",
                    height: "35px",
                    backgroundColor: "#f1f1f1",
                    textIndent: "5px",
                  }}
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email address",
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email address",
                  },
                ]}
              >
                <Input
                  placeholder="Email"
                  style={{
                    borderRadius: "5px",
                    width: "100%",
                    height: "35px",
                    backgroundColor: "#f1f1f1",
                    textIndent: "5px",
                  }}
                />
              </Form.Item>
              <Form.Item
                name="Comments"
                rules={[
                  { required: true, message: "Please enter your address" },
                ]}
              >
                <Input
                  placeholder="Comments"
                  style={{
                    borderRadius: "5px",
                    width: "100%",
                    height: "60px",
                    backgroundColor: "#f1f1f1",
                    textIndent: "5px",
                  }}
                />
              </Form.Item>
              <Spin spinning={loading} tip="Booking in progress...">
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ 
                      borderRadius: "5px",
                      width: "100%",
                      height: "10%",
                      backgroundColor: "#6bb546",
                      fontSize: "20px",
                    }}
                    disabled={loading}
                  >
                    book now
                  </Button>
                </Form.Item>
              </Spin>
            </div>
          </div>
        </Form>
      ) : (
        <BookingForm  />
      )}
      {isModalOpen ? (
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          closable={false}
          style={{ maxWidth: "25%" }}
        >
          <div
            style={{
              width: "100%",
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              paddingBottom: "20px",
            }}
          >
            <img src={piccologo} style={{ width: "50%", height: "200px" }} />
            <h6>Booking Successfully.</h6>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default BookingThird;
