import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import smallcarimg from "../../assets/images/car_mini_small.png";
import "./index.scss";
import { text } from "stream/consumers";
import BookingForm from "../bookingSecondStep";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useLocation } from "react-router-dom";

const BookingThird = () => {
  const [show, setShow] = useState(true);
  const location = useLocation();

  const {
    pickUpLoc,
    dropOffLoc,
    pickUpDate,
    dropOffDate,
    pickUpTime,
    carDetails,
  } = location.state;
  console.log(">>>>>>>>>>>>>>>>>>>>>", dropOffLoc);
  console.log(">>>>>>>>>>>>>>>>>>>>>", pickUpDate);
  console.log(">>>>>>>>>>>>>>>>>>>>>", pickUpLoc);
  console.log(">>>>>>>>>>>>>>>>>>>>>", dropOffDate);
  console.log(">>>>>>>>>>>>>>>>>>>>>", pickUpTime);

  const onFinish = async (values: any) => {
    try {
      const requestBody = {
        userId: 1,
        bookType: "outstations",
        tripStatus: "oneWay",
        pickUpDate: "2023-08-01T12:00:00Z",
        dropOffDate: "2023-08-02T12:00:00Z",
        pickUpLat: 37.7749,
        pickUpLng: -122.4194,
        pickUpLoc: pickUpLoc,
        dropOffLat: 37.7749,
        dropOffLng: -122.4194,
        dropOffLoc: dropOffLoc,
        pickUpTime: 12,
        hours: 5,
        kms: 100,
        estimatedAmt: 50.5,
        rentallPack: 1,
        car: 1,
        comments: values.Comments,
        adminStatus: "roaming",
        status: "pending",
      };

      console.log(">>>>>>>>>>>>>>>>>>>??????????????????", requestBody);

      const response = await fetch("http://localhost:12345/Booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log(">>>>>>>>>>>>>>>>>>>>>{{{{{{{{{{{{{{{{{{{{{{{", data);

      console.log("API Response:", data);
      message.success("Booking successful!");
    } catch (error) {
      console.error("API Error:", error);
    }
  };
  return (
    <div>
      {show ? (
        <Form onFinish={onFinish}>
          <div className="booking-Div">
            <div style={{ display: "flex" }}>
              {/* <div> */}
              <IoMdArrowRoundBack
                onClick={()=> window.history.back()}
                size={25} 
                className="Back-arrow mb-3"
              />
              {/* </div> */}
              <div style={{ marginTop: "19px", marginLeft: "12px" }}>
                {pickUpLoc}&nbsp; <b>to</b>&nbsp;
                {dropOffLoc}
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
                <div className="price-Div">₹ 23180</div>
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
                    height: "15%",
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
                    height: "15%",
                    backgroundColor: "#f1f1f1",
                    textIndent: "5px",
                  }}
                />
              </Form.Item>
              <Form.Item
                name="haii"
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
                    height: "15%",
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
                    height: "30%",
                    backgroundColor: "#f1f1f1",
                    textIndent: "5px",
                  }}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    borderRadius: "5px",
                    width: "100%",
                    height: "12%",
                    backgroundColor: "#6bb546",
                    fontSize: "20px",
                  }}
                >
                  book now
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      ) : (
        <BookingForm/>
      )}
    </div>
  );
};

export default BookingThird;
