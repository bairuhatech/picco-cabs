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
import { Loading3QuartersOutlined } from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";
import { Col, Container } from "react-bootstrap";

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
    userfrom,
    userName,
    modesSecondary,
    RentalTime,
    RentalDate,
    airport,
  } = location.state;

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const formattedDate = moment(pickUpDate).format("YYYY-MM-DD");

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      const requestBody = {
        userId: 1,
        bookType: modes || modesecond || modesSecondary,
        tripStatus: tripType || "roundTrip",
        pickUpDate: tripType === "rentals" ? RentalDate : formattedDate,
        dropOffDate: "2023-08-02T12:00:00Z",
        pickUpLat: 37.7749,
        pickUpLng: -122.4194,
        pickUpLoc: selectedRoute?.place || RentPlace || userfrom || "",
        pickUpCity: "",
        pickUpAddress: "",
        dropOffCity: "",
        dropOffAddress: "",
        dropOffLat: 37.7749,
        dropOffLng: -122.4194,
        dropOffLoc: selectedRoute?.location || "",
        pickUpTime: tripType === "rentals" ? RentalTime : timeOfPickup || "",
        hours: parseInt(Package?.hours) || 0,
        kms: parseInt(Package?.kms) || 0,
        estimatedAmt:
          props.selectedCar.name === "Compact Mini"
            ? selectedRoute?.miniPrice +
              (tripType === "roundTrip" ? selectedRoute.miniPrice : null)
            : props.selectedCar.name === "Executive Sedan"
            ? selectedRoute?.sedanPrice +
              (tripType === "roundTrip" ? selectedRoute.sedanPrice : null)
            : props.selectedCar.name === "Spacious SUV"
            ? selectedRoute?.suvPrice +
              (tripType === "roundTrip" ? selectedRoute.suvPrice : null)
            : props.selectedCar.name === "Innova SUV"
            ? selectedRoute?.innovaPrice +
              (tripType === "roundTrip" ? selectedRoute.innovaPrice : null)
            : props.selectedCar.name === "Innova Crysta"
            ? selectedRoute?.crystaPrice +
              (tripType === "roundTrip" ? selectedRoute.crystaPrice : null)
            : props.selectedCar.name === "Tempo Traveller"
            ? selectedRoute?.TempoTravellerPrice +
              (tripType === "roundTrip"
                ? selectedRoute.TempoTravellerPrice
                : null)
            : selectedRoute?.traveller18Price +
                (tripType === "roundTrip"
                  ? selectedRoute.traveller18Price
                  : null) || 1,
        returnDate: "2023-08-02T12:00:00Z",
        rentallPack: 1,
        car: "",
        PiccoCar: props.selectedCar.name,
        AirportStatus: airport || "",
        carType: "",
        comments: values.Comments,
        userName: values.name,
        phoneNumber: values.Phone,
        email: values.email,
        driver: "",
        adminStatus: "roaming",
        status: "pending",
      };

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
      setLoading(false);
      console.log("API Response:", data);
      setIsModalOpen(true);
      setTimeout(() => {
        setIsModalOpen(false);
        window.history.back();
      }, 2000);
    } catch (error) {
      console.error("API Error:", error);
      setLoading(false);

      try {
        const errorRequestBody = {
          userId: 1,
          bookType: modes || modesecond,
          tripStatus: tripType || "roundTrip",
          pickUpDate: formattedDate,
          dropOffDate: "2023-08-02T12:00:00Z",
          pickUpLat: 37.7749,
          pickUpLng: -122.4194,
          pickUpLoc: selectedRoute?.place || RentPlace || "",
          dropOffLat: 37.7749,
          dropOffLng: -122.4194,
          dropOffLoc: selectedRoute?.location || "",
          pickUpTime: timeOfPickup || "",
          hours: parseInt(Package?.hours) || 0,
          kms: parseInt(Package?.kms) || 0,
          estimatedAmt:
            props.selectedCar.name === "Compact Mini"
              ? selectedRoute?.miniPrice +
                (tripType === "roundTrip" ? selectedRoute.miniPrice : null)
              : props.selectedCar.name === "Executive Sedan"
              ? selectedRoute?.sedanPrice +
                (tripType === "roundTrip" ? selectedRoute.sedanPrice : null)
              : props.selectedCar.name === "Spacious SUV"
              ? selectedRoute?.suvPrice +
                (tripType === "roundTrip" ? selectedRoute.suvPrice : null)
              : props.selectedCar.name === "Innova SUV"
              ? selectedRoute?.innovaPrice +
                (tripType === "roundTrip" ? selectedRoute.innovaPrice : null)
              : props.selectedCar.name === "Innova Crysta"
              ? selectedRoute?.crystaPrice +
                (tripType === "roundTrip" ? selectedRoute.crystaPrice : null)
              : props.selectedCar.name === "Tempo Traveller"
              ? selectedRoute?.TempoTravellerPrice +
                (tripType === "roundTrip"
                  ? selectedRoute.TempoTravellerPrice
                  : null)
              : selectedRoute?.traveller18Price,
          rentallPack: 1,
          car: 1,
          comments: values.Comments,
          PiccoCar: props.selectedCar.name,
          AirportStatus: airport || "",
          phoneNumber: values.Phone,
          userName: values.name,
          email: values.email,
        };

        const errorResponse = await fetch(
          "https://piccocabs-server-46642b82a774.herokuapp.com/booking-attempt",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(errorRequestBody),
          }
        );

        const errorData = await errorResponse.json();
        console.log("Error API Response:", errorData);
      } catch (error) {
        console.error("Error API Error:", error);
      }
    }
  };
  const Data = {
    labelCol: { span: 4 },
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
    // <div>
    //   {show ? (
    //     <Form onFinish={onFinish}>
    //       <div className="booking-Div">
    //         <div style={{ display: "flex" }}>
    //           {/* <div> */}
    //           <IoMdArrowRoundBack
    //             onClick={() => window.history.back()}
    //             size={25}
    //             className="Back-arrow mb-3"
    //           />
    //           {/* </div> */}
    //           <div style={{ marginTop: "19px", marginLeft: "12px" }}>
    //             <p>
    //               {RentPlace || selectedRoute?.place}
    //               &nbsp;<b>{RentPlace ? "" : "to"}</b> &nbsp;
    //               {RentPlace ? "" : selectedRoute?.location}
    //               <br />
    //               <b>{Package?.label ? "Package: " : "Pickup: "}</b>
    //               {pack || formattedDate}
    //               <b>{Package?.label ? "" : "Time:"}</b>
    //               {timeOfPickup || ""}
    //             </p>
    //           </div>
    //         </div>
    //         <div className="card">
    //           <div className="picco-mini">Compact Mini</div>
    //           <div className="piccoimg-Div">
    //             <img
    //               className="piccominiImg"
    //               style={{ width: "33%", height: "100%" }}
    //               src={smallcarimg}
    //               alt="Compact Mini"
    //             />
    //             <div className="bookingbutton-Div">
    //               {/* <div classN ame="faredetail-Div">
    //                 <p
    //                   style={{ cursor: "pointer", color: "#0056b3" }}
    //                   // onClick={() => setIsModalOpen(!isModalOpen)}
    //                 >
    //                   Fare Details
    //                 </p>
    //               </div> */}
    //               <div className="button-Div">
    //                 {/* <button className="button">Book now</button> */}
    //               </div>
    //             </div>
    //           </div>
    //           <div className="seats-Div">
    //             <div className="seatcontent-Div">
    //               <span>Ac</span>
    //               <span>4 seat</span>
    //               <span>2 bag</span>
    //             </div>
    //             <div className="price-Div">
    //               ₹{" "}
    //               {props.selectedCar.name === "Compact Mini"
    //                 ? selectedRoute?.miniPrice +
    //                   (tripType === "roundTrip"
    //                     ? selectedRoute.miniPrice
    //                     : null) +
    //                   300
    //                 : props.selectedCar.name === "Executive Sedan"
    //                 ? selectedRoute?.sedanPrice +
    //                   (tripType === "roundTrip"
    //                     ? selectedRoute.sedanPrice
    //                     : null) +
    //                   300
    //                 : props.selectedCar.name === "Spacious SUV"
    //                 ? selectedRoute?.suvPrice +
    //                   (tripType === "roundTrip"
    //                     ? selectedRoute.suvPrice
    //                     : null) +
    //                   300
    //                 : props.selectedCar.name === "Innova SUV"
    //                 ? selectedRoute?.innovaPrice +
    //                 (tripType === "roundTrip"
    //                     ? selectedRoute.innovaPrice
    //                     : null) +
    //                   300
    //                 : props.selectedCar.name === "Innova Crysta"
    //                 ? selectedRoute?.crystaPrice +
    //                 (tripType === "roundTrip"
    //                     ? selectedRoute.crystaPrice
    //                     : null) +
    //                   300
    //                 : props.selectedCar.name === "Tempo Traveller"
    //                 ? selectedRoute?.TempoTravellerPrice +
    //                 (tripType === "roundTrip"
    //                     ? selectedRoute.TempoTravellerPrice
    //                     : null) +
    //                   300
    //                 : selectedRoute?.traveller18Price +
    //                 (tripType === "roundTrip" ? selectedRoute.traveller18Price : null) +
    //                 300
    //                 }
    //             </div>
    //           </div>
    //         </div>
    //         <div className="TravallersDetail-Div">
    //           <p style={{ fontSize: "20px", fontWeight: "5px" }}>
    //             Traveller's Detail
    //           </p>
    //         </div>
    //         <div className="input-Div">
    //           <Form.Item
    //             name="name"
    //             rules={[{ required: true, message: "Please enter your name" }]}
    //           >
    //             <Input
    //               placeholder="Name"
    //               style={{
    //                 borderRadius: "5px",
    //                 width: "100%",
    //                 height: "35px",
    //                 backgroundColor: "#f1f1f1",
    //                 textIndent: "5px",
    //               }}
    //             />
    //           </Form.Item>
    //           <Form.Item
    //             name="Phone"
    //             rules={[
    //               { required: true, message: "Please enter your phone number" },
    //             ]}
    //           >
    //             <Input
    //               placeholder="Phone"
    //               style={{
    //                 borderRadius: "5px",
    //                 width: "100%",
    //                 height: "35px",
    //                 backgroundColor: "#f1f1f1",
    //                 textIndent: "5px",
    //               }}
    //             />
    //           </Form.Item>
    //           <Form.Item
    //             name="email"
    //             rules={[
    //               {
    //                 required: true,
    //                 message: "Please enter your email address",
    //               },
    //               {
    //                 type: "email",
    //                 message: "Please enter a valid email address",
    //               },
    //             ]}
    //           >
    //             <Input
    //               placeholder="Email"
    //               style={{
    //                 borderRadius: "5px",
    //                 width: "100%",
    //                 height: "35px",
    //                 backgroundColor: "#f1f1f1",
    //                 textIndent: "5px",
    //               }}
    //             />
    //           </Form.Item>
    //           <Form.Item
    //             name="Comments"
    //             rules={[
    //               { required: true, message: "Please enter your address" },
    //             ]}
    //           >
    //             <Input
    //               placeholder="Comments"
    //               style={{
    //                 borderRadius: "5px",
    //                 width: "100%",
    //                 height: "60px",
    //                 backgroundColor: "#f1f1f1",
    //                 textIndent: "5px",
    //               }}
    //             />
    //           </Form.Item>
    //           <Spin
    //             spinning={loading}
    //             indicator={
    //               <Loading3QuartersOutlined spin style={{ color: "green" }} />
    //             }
    //             tip="Booking in progress..."
    //           >
    //             <Form.Item>
    //               <Button
    //                 type="primary"
    //                 htmlType="submit"
    //                 style={{
    //                   borderRadius: "5px",
    //                   width: "100%",
    //                   height: "10%",
    //                   backgroundColor: "#6bb546",
    //                   fontSize: "20px",
    //                 }}
    //                 disabled={loading}
    //               >
    //                 Book Now
    //               </Button>
    //             </Form.Item>
    //           </Spin>
    //         </div>
    //       </div>
    //     </Form>
    //   ) : (
    //     <BookingForm />
    //   )}
    //   {isModalOpen ? (
    //     <Modal
    //       title="Basic Modal"
    //       open={isModalOpen}
    //       onOk={handleOk}
    //       closable={false}
    //       style={{ maxWidth: "25%" }}
    //     >
    //       <div
    //         style={{
    //           width: "100%",
    //           height: "200px",
    //           display: "flex",
    //           alignItems: "center",
    //           justifyContent: "center",
    //           flexDirection: "column",
    //           paddingBottom: "20px",
    //         }}
    //       >
    //         <img src={piccologo} style={{ width: "50%", height: "200px" }} />
    //         <h6>Booking Successfully.</h6>
    //       </div>
    //     </Modal>
    //   ) : null}
    // </div>

    <div className="BookingDivMain">
      <div className="SecondCard-Div">
        <div className="Secondcard">
          <div className="bookingdetail-Div">YOUR BOOKING DETAIL HERE</div>
          <Form {...Data}>
            <FormItem
              style={{ height: "5%" }}
              wrapperCol={{ offset: 1 }}
              label={" ɪᴛᴇɴᴇʀᴀʀʏ:"}
            >
              <div style={{ borderRadius: "5px" }} className="content-Div">
                {RentPlace || selectedRoute?.place}
                &nbsp;<b>{RentPlace ? "" : "to"}</b> &nbsp;
                {RentPlace ? "" : selectedRoute?.location}
              </div>
            </FormItem>
            <FormItem wrapperCol={{ offset: 1 }} label={"ᴘɪᴄᴋ ᴜᴘ ᴅᴀᴛᴇ:"}>
              <div style={{ borderRadius: "5px" }} className="content-Div">
                {moment(formattedDate).format("Do MMMM YYYY")} at {timeOfPickup}
              </div>
            </FormItem>
            <FormItem wrapperCol={{ offset: 1 }} label={"ᴄᴀʀ ᴛʏᴘᴇ:"}>
              <div style={{ borderRadius: "5px" }} className="content-Div">
                {props.selectedCar.name}
              </div>
            </FormItem>
            <FormItem wrapperCol={{ offset: 1 }} label={"ᴋᴍ:"}>
              <div style={{ borderRadius: "5px" }} className="content-Div">
                {tripType === "roundTrip"
                  ? selectedRoute?.kilometer *2
                  : selectedRoute?.kilometer}{" "}
                km
              </div>
            </FormItem>
            <FormItem wrapperCol={{ offset: 1 }} label={"ᴛᴏᴛᴇʟ ғᴀʀᴇ:"}>
              <div style={{ borderRadius: "5px" }} className="content-Div">
                {" "}
                ₹{" "}
                {props.selectedCar.name === "Compact Mini"
                  ? selectedRoute?.miniPrice +
                    (tripType === "roundTrip"
                      ? selectedRoute.miniPrice
                      : null) +
                    300
                  : props.selectedCar.name === "Executive Sedan"
                  ? selectedRoute?.sedanPrice +
                    (tripType === "roundTrip"
                      ? selectedRoute.sedanPrice
                      : null) +
                    300
                  : props.selectedCar.name === "Spacious SUV"
                  ? selectedRoute?.suvPrice +
                    (tripType === "roundTrip" ? selectedRoute.suvPrice : null) +
                    300
                  : props.selectedCar.name === "Innova SUV"
                  ? selectedRoute?.innovaPrice +
                    (tripType === "roundTrip"
                      ? selectedRoute.innovaPrice
                      : null) +
                    300
                  : props.selectedCar.name === "Innova Crysta"
                  ? selectedRoute?.crystaPrice +
                    (tripType === "roundTrip"
                      ? selectedRoute.crystaPrice
                      : null) +
                    300
                  : props.selectedCar.name === "Tempo Traveller"
                  ? selectedRoute?.TempoTravellerPrice +
                    (tripType === "roundTrip"
                      ? selectedRoute.TempoTravellerPrice
                      : null) +
                    300
                  : selectedRoute?.traveller18Price +
                    (tripType === "roundTrip"
                      ? selectedRoute.traveller18Price
                      : null) +
                    300}
              </div>
            </FormItem>
          </Form>
        </div>
        <div className="exclusion-Div"></div>
      </div>
      <div style={{ width: "50%", height: "100vh" }}>
        <div className="booking-Div">
          <div className="ContactPickUp-Div">
            <div className="pickup-Div">
              <p style={{ fontWeight: "600", fontSize: "20px" }}>
                ᴄᴏɴᴛᴀᴄᴛ & ᴘɪᴄᴋᴜᴘ ᴅᴇᴛᴀɪʟs
              </p>
            </div>
          </div>
          <Form onFinish={onFinish}>
            <div className="NameInput-Div">
              <Form.Item
                name="name"
                className="label"
                label={"ɴᴀᴍᴇ"}
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input
                  placeholder="ᴇɴᴛᴇʀ ʏᴏᴜʀ ɴᴀᴍᴇ ʜᴇʀᴇ"
                  className="nameinput"
                />
              </Form.Item>
            </div>

            <div className="EmailInput-Div">
              <Form.Item
                name="email"
                className="label"
                label={"ᴇᴍᴀɪʟ"}
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
                  placeholder="ᴇɴᴛᴇʀ ʏᴏᴜʀ ᴇᴍᴀɪʟ ʜᴇʀᴇ"
                  className="Emailinput"
                />
              </Form.Item>
            </div>
            <div className="MobileInput-Div">
              <Form.Item
                name="Phone"
                className="label"
                label={"ᴍᴏʙɪʟᴇ"}
                rules={[
                  { required: true, message: "Please enter your phone number" },
                ]}
              >
                <Input
                  placeholder="ᴇɴᴛᴇʀ ʏᴏᴜʀ ᴍᴏʙɪʟᴇ ɴᴜᴍʙᴇʀ ʜᴇʀᴇ"
                  className="Mobileinput"
                />
              </Form.Item>
            </div>
            {/* <div className="MobileInput-Div"> */}
            <Form.Item
              name="Comments"
              label={"ᴄᴏᴍᴍᴇɴᴛ"}
              rules={[{ required: true, message: "Please enter your address" }]}
            >
              <Input
                placeholder="ᴇɴᴛᴇʀ ʏᴏᴜʀ ᴄᴏᴍᴍᴇɴᴛ ʜᴇʀᴇ"
                className="Commentinput"
              />
            </Form.Item>
            <Spin
              spinning={loading}
              indicator={
                <Loading3QuartersOutlined spin style={{ color: "green" }} />
              }
              tip="Booking in progress..."
            >
              {/* </div> */}
              <Col md={12}>
                <Form.Item>
                  <Button
                    className="button"
                    htmlType="submit"
                    disabled={loading}
                    type="primary"
                  >
                    PROCEED
                  </Button>
                </Form.Item>
              </Col>
            </Spin>
          </Form>

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
                <img
                  src={piccologo}
                  style={{ width: "50%", height: "200px" }}
                />
                <h6>Booking Successfully.</h6>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BookingThird;
