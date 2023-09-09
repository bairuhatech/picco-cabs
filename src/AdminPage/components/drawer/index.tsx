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
    PiccoCar,
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
    pickUpAddress,
    dropOffAddress,
  } = props.bookingdetails;

  const formLayout = { labelCol: { span: 4 } };
  return (
    <>
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
            <b>User Name :</b> {userName}
          </span>
          <br /> <br />
          <span>
            <b>Driver :</b> {driver}
          </span>
          <br /> <br />
          <span>
            <b>Car Type :</b> {PiccoCar}
          </span>
          <br /> <br />
          <span>
            <b>Book Type :</b> {bookType}
          </span>
          <br /> <br />
          {/* <span>
            <b>adminStatus :</b> {adminStatus}
          </span>
          <br /> <br /> */}
          <span>
            <b>Pickup Time :</b> {pickUpTime}
          </span>
          <br /> <br />
          <span>
            <b>Comments :</b> {comments}
          </span>
          <br /> <br />
          <span>
            <b>Email :</b> {email}
          </span>
          <br /> <br />
          <span>
            <b>Phone Number :</b> {phoneNumber}
          </span>
          <br /> <br />
          <span>
            <b>Status :</b> {status}
          </span>
          <br /> <br />
          <span>
            <b>Amount :</b> {estimatedAmt ? estimatedAmt + 300: null}
          </span>
          <br /> <br />
          <span>
            <b>Hours :</b> {hours}
          </span>
          <br /> <br />
          <span>
            <b>Trip Status :</b> {tripStatus}
          </span>
          <br /> <br />
          <span>
            <b>Return Date :</b> {returnDate}
          </span>
          <br /> <br />
          <span>
            <b>Pickup Date :</b>
            {moment(pickUpDate).format("YYYY-MM-DD")}
          </span>
          <br /> <br />
          <span>
            <b>Drop date :</b>
            {moment(dropOffDate).format("YYYY-MM-DD")}
          </span>
          <br /> <br />
          {/* <span>
            <b>Pickup la :</b> {pickUpLat}
          </span>
          <br /> <br /> */}
          {/* <span>
            <b>pickUpLng :</b> {pickUpLng}
          </span>
          <br /> <br /> */}
          <span>
            <b>Pickup Location :</b> {pickUpLoc}
          </span>
          <br /> <br />
          {/* <span>
            <b>dropOffLat :</b> {dropOffLat}
          </span>
          <br /> <br />
          <span>
            <b>dropOffLng :</b> {dropOffLng}
          </span>
          <br /> <br /> */}
          <span>
            <b>Drop Of Location :</b> {dropOffLoc}
          </span>
          <br /> <br />
          <span>
            <b>Pickup Address :</b> {pickUpAddress}
          </span>
          <br /> <br />
          <span>
            <b>Drop Address :</b> {dropOffAddress}
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
        </div>
      </Drawer>
    </>
  );
};

export default BookingDrawer;
