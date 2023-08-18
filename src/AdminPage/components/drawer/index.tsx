import React, { useState } from "react";
import { Button, Drawer, Form, Radio, Space } from "antd";
import type { DrawerProps } from "antd/es/drawer";
import type { RadioChangeEvent } from "antd/es/radio";
import "./index.scss";
import moment from "moment";

const BookingDrawer = (props: any) => {
  const [open, setOpen] = useState(props.drawer);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");

  const {
    adminStatus,
    bookType,
    driver,
    car,
    CarType,
    pickUpTime,
    phoneNumber,
    comments,
    email,
    returnDate,
    status,
    estimatedAmt,
    rentallPack,
    hours,
    tripStatus,
    pickUpDate,
    dropOffDate,
    pickUpLat,
    pickUpLng,
    pickUpLoc,
    dropOffLat,
    dropOffLng,
    dropOffLoc,
    userName,
  } = props.bookingdetails;
  console.log(props.bookingdetails, "====================>>>>>bookingData");
  console.log("====================>>>>>bookingData", driver);

  const formLayout = { labelCol: { span: 4 } };
  return (
    <>
      {/* <Space></Space> */}
      <Drawer
        className="drawer-div"
        placement={placement}
        width={500}
        onClose={props.onClose}
        visible={props.drawer}
      >
        <div className="Bookingsdrawer-Div">
          <div className="Drawer">
            <b>BOOKINGS DETAILS</b>
          </div>
          <span>
            <b>userName :</b> {userName}
          </span>
          <br /> <br />
          <span>
            <b>Driver :</b> {driver}
          </span>
          <br /> <br />
          <span>
            <b>car :</b> {car}
          </span>
          <br /> <br />
          <span>
            <b>CarType :</b> {CarType}
          </span>
          <br /> <br />
          <span>
            <b>bookType :</b> {bookType}
          </span>
          <br /> <br />
          <span>
            <b>Driver :</b> {driver}
          </span>
          <br /> <br />
          <span>
            <b>adminStatus :</b> {adminStatus}
          </span>
          <br /> <br />
          <span>
            <b>pickUpTime :</b> {pickUpTime}
          </span>
          <br /> <br />
          <span>
            <b>comments :</b> {comments}
          </span>
          <br /> <br />
          <span>
            <b>email :</b> {email}
          </span>
          <br /> <br />
          <span>
            <b>status :</b> {status}
          </span>
          <br /> <br />
          <span>
            <b>estimatedAmt :</b> {estimatedAmt}
          </span>
          <br /> <br />
          <span>
            <b>rentallPack :</b> {rentallPack}
          </span>
          <br /> <br />
          <span>
            <b>hours :</b> {hours}
          </span>
          <br /> <br />
          <span>
            <b>tripStatus :</b> {tripStatus}
          </span>
          <br /> <br />
          <span>
            <b>pickUpDate :</b>
            {moment(pickUpDate).format("YYYY-MM-DD")}
          </span>
          <br /> <br />
          <span>
            <b>dropOffDate :</b>
            {moment(dropOffDate).format("YYYY-MM-DD")}
          </span>
          <br /> <br />
          <span>
            <b>pickUpLat :</b> {pickUpLat}
          </span>
          <br /> <br />
          <span>
            <b>pickUpLng :</b> {pickUpLng}
          </span>
          <br /> <br />
          <span>
            <b>pickUpLoc :</b> {pickUpLoc}
          </span>
          <br /> <br />
          <span>
            <b>dropOffLat :</b> {dropOffLat}
          </span>
          <br /> <br />
          <span>
            <b>dropOffLng :</b> {dropOffLng}
          </span>
          <br /> <br />
          <span>
            <b>dropOffLoc :</b> {dropOffLoc}
          </span>
          <br /> <br />
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginRight: "35px",
            }}
          >
            <Button
              style={{
                width: "30%",
                backgroundColor: " #92ca92",
                color: "white",
                fontWeight: "500",
                fontSize: "15px",
              }}
              onClick={() => setOpen(props.onClose)}
            >
              cancel
            </Button>
          </div>
          <br />
          {/* </Form.Item> */}
          {/* <Form.Item label={"Car"}>
              <span>{car}</span>
            </Form.Item>
            <Form.Item label={"email"}>
              <span>{email}</span>
            </Form.Item>
            <Form.Item label={"bookType"}>
              <span>{bookType}</span>
            </Form.Item>
            <Form.Item label={"Status"}>
              <span>{adminStatus}</span>
            </Form.Item>
            <Form.Item label={"pickUpTime"}>
              <span>{pickUpTime}</span>
            </Form.Item>
            <Form.Item label={"phoneNumber"}>
              <span>{phoneNumber}</span>
            </Form.Item>
            <Form.Item label={"comments"}>
              <span>{comments}</span>
            </Form.Item>

            <Form.Item label={"returnDate"}>
              <span>{returnDate}</span>
            </Form.Item>

            <Form.Item label={"estimatedAmt"}>
              <span>{estimatedAmt}</span>
            </Form.Item>
            <Form.Item label={"rentallPack"}>
              <span>{rentallPack}</span>
            </Form.Item>
            <Form.Item label={"hours"}>
              <span>{hours}</span>
            </Form.Item>
            <Form.Item label={"tripStatus"}>
              <span>{tripStatus}</span>
            </Form.Item>
            <Form.Item label={"pickUpDate"}>
              <span>{pickUpDate}</span>
            </Form.Item>
            <Form.Item label={"dropOffDate"}>
              <span>{dropOffDate}</span>
            </Form.Item>
            <Form.Item label={"pickUpLat"}>
              <span>{pickUpLat}</span>
            </Form.Item>

            <Form.Item label={"pickUpLng"}>
              <span>{pickUpLng}</span>
            </Form.Item>
            <Form.Item label={"pickUpLoc"}>
              <span>{pickUpLoc}</span>
            </Form.Item>
            <Form.Item label={"dropOffLat"}>
              <span>{dropOffLat}</span>
            </Form.Item>
            <Form.Item label={"dropOffLng"}>
              <span>{dropOffLng}</span>
            </Form.Item>
            <Form.Item label={"dropOffLoc"}>
              <span>{dropOffLoc}</span>
            </Form.Item> */}
          {/* </Form> */}
        </div>
        {/* <div>
          <p>userName: {driver}</p>
          <p>status: {adminStatus}</p>
          <p>Type: {bookType}</p>
        </div> */}
      </Drawer>
    </>
  );
};

export default BookingDrawer;
