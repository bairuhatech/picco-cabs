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
import { Col, Container, Row } from "react-bootstrap";

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
        pickUpAddress: values.PickupAddress,
        dropOffCity: "",
        dropOffAddress: values.DropAddress,
        dropOffLat: 37.7749,
        dropOffLng: -122.4194,
        dropOffLoc: selectedRoute?.location || "",
        pickUpTime: tripType === "rentals" ? RentalTime : timeOfPickup || "",
        hours: tripType === "rentals" ? parseInt(props.Package?.hrs) : 0,
        kms:
          tripType === "rentals"
            ? parseInt(props.Package?.kilometer)
            : parseInt(selectedRoute.kilometer),
        estimatedAmt:
          props.selectedCar.name === "Compact Mini"
            ? selectedRoute?.miniPrice +
                (tripType === "roundTrip" ? selectedRoute.miniPrice : null) ||
              props.selectedCar.price
            : props.selectedCar.name === "Executive Sedan"
            ? selectedRoute?.sedanPrice +
                (tripType === "roundTrip" ? selectedRoute.sedanPrice : null) ||
              props.selectedCar.price
            : props.selectedCar.name === "Spacious SUV"
            ? selectedRoute?.suvPrice +
                (tripType === "roundTrip" ? selectedRoute.suvPrice : null) ||
              props.selectedCar.price
            : props.selectedCar.name === "Innova SUV"
            ? selectedRoute?.innovaPrice +
                (tripType === "roundTrip" ? selectedRoute.innovaPrice : null) ||
              props.selectedCar.price
            : props.selectedCar.name === "Innova Crysta"
            ? selectedRoute?.crystaPrice +
                (tripType === "roundTrip" ? selectedRoute.crystaPrice : null) ||
              props.selectedCar.price
            : props.selectedCar.name === "Tempo Traveller"
            ? selectedRoute?.TempoTravellerPrice +
                (tripType === "roundTrip"
                  ? selectedRoute.TempoTravellerPrice
                  : null) || props.selectedCar.price
            : selectedRoute?.traveller18Price +
                (tripType === "roundTrip"
                  ? selectedRoute.traveller18Price
                  : null) || props.selectedCar.price,
        // ? props.selectedCar.price
        // : null,
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
        status: "Trip Created",
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
          hours: parseInt(props.Package?.hrs) || 0,
          kms: parseInt(props.Package?.kilometer) || 0,
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
  // let pack =
  //   Package?.value === "custom_package" ? (
  //     <div>
  //       {Package?.hours}Hr&nbsp;{Package?.kms}kms
  //     </div>
  //   ) : (
  //     <div>{Package?.label}</div>
  //   );
  return (
    <>
      <div className="BookingDivMain">
        <div className="SecondCard-Div">
          {/* /// */}
          <div className="SecondCard-Div">
            <div className="booking-Div">
              <div className="ContactPickUp-Div">
                <div className="pickup-Div">
                  <p
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                      color: " #6BB546",
                    }}
                  >
                    ᴄᴏɴᴛᴀᴄᴛ & ᴘɪᴄᴋᴜᴘ ᴅᴇᴛᴀɪʟs
                  </p>
                </div>
              </div>
              <Form onFinish={onFinish}>
                <div className="NameInput-Div">
                  <Form.Item
                    name="name"
                    className="label"
                    // label={"ɴᴀᴍᴇ"}
                    rules={[
                      { required: true, message: "Please Enter Your Name" },
                    ]}
                  >
                    <Input
                      placeholder="ᴇɴᴛᴇʀ ʏᴏᴜʀ ɴᴀᴍᴇ ʜᴇʀᴇ"
                      className="nameinput"
                      size="large"
                    />
                  </Form.Item>
                </div>

                <div className="EmailInput-Div">
                  <Form.Item
                    name="email"
                    className="label"
                    // label={"ᴇᴍᴀɪʟ"}
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Your Email Address",
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
                      size="large"
                    />
                  </Form.Item>
                </div>
                <div className="MobileInput-Div">
                  <Form.Item
                    name="Phone"
                    className="label"
                    // label={"ᴍᴏʙɪʟᴇ"}
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Your Phone Number",
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      placeholder="ᴇɴᴛᴇʀ ʏᴏᴜʀ ᴍᴏʙɪʟᴇ ɴᴜᴍʙᴇʀ ʜᴇʀᴇ"
                      className="Mobileinput"
                      size="large"
                    />
                  </Form.Item>
                </div>
                {/* <div className="MobileInput-Div"> */}
                <Form.Item
                  name="Comments"
                  // label={"ᴄᴏᴍᴍᴇɴᴛ"}
                  rules={[{ required: true, message: "Please Add a Comment" }]}
                >
                  <Input
                    placeholder="ᴇɴᴛᴇʀ ʏᴏᴜʀ ᴄᴏᴍᴍᴇɴᴛ ʜᴇʀᴇ"
                    className="Commentinput"
                    size="large"
                  />
                </Form.Item>
                <Form.Item
                  name="PickupAddress"
                  // label={"ᴘɪᴄᴋᴜᴘ ᴀᴅᴅʀᴇss"}
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Your Pickup Address",
                    },
                  ]}
                >
                  <Input
                    placeholder="ᴇɴᴛᴇʀ ʏᴏᴜʀ ᴘɪᴄᴋᴜᴘ ᴀᴅᴅʀᴇss"
                    className="Commentinput"
                    size="large"
                  />
                </Form.Item>
                <Form.Item
                  name="DropAddress"
                  // label={"ᴅʀᴏᴘ ᴀᴅᴅʀᴇss"}
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Your Drop Address",
                    },
                  ]}
                >
                  <Input
                    placeholder="ᴇɴᴛᴇʀ ʏᴏᴜʀ ᴅʀᴏᴘ ᴀᴅᴅʀᴇss"
                    className="Commentinput"
                    size="large"
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
                        // size="large"
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
          {/* /// */}
        </div>

        {/* /// */}

        <div className="Secondcard-Main">
          <div className="Secondcard">
            <div className="bookingdetail-Div">YOUR BOOKING DETAIL HERE</div>
            <Form {...Data}>
              <FormItem
                // style={{ height: "5%" }}
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
                  {moment(formattedDate).format("Do MMMM YYYY")} at{" "}
                  {timeOfPickup}
                </div>
              </FormItem>
              <FormItem wrapperCol={{ offset: 1 }} label={"ᴄᴀʀ ᴛʏᴘᴇ:"}>
                <div style={{ borderRadius: "5px" }} className="content-Div">
                  {props.selectedCar.name}
                </div>
              </FormItem>
              <FormItem wrapperCol={{ offset: 1 }} label={"ᴋᴍ:"}>
                <div style={{ borderRadius: "5px" }} className="content-Div">
                  {props?.selectedCar?.distance}
                </div>
              </FormItem>
              <FormItem wrapperCol={{ offset: 1 }} label={"ᴛᴏᴛᴇʟ ғᴀʀᴇ:"}>
                <div style={{ borderRadius: "5px" }} className="content-Div">
                  {" "}
                  ₹ {props?.selectedCar?.price}
                </div>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingThird;
