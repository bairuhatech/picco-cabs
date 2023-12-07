import React, { useState } from "react";
import { Form, Input, Spin } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import { width } from "@fortawesome/free-solid-svg-icons/faLocationDot";

function BookinModal(props: any) {
  console.log("props============><><><<><>", props);
  const [pickupaddress, setPickupaddress] = useState(props.from || "");
  const [dropaddress, setAropaddress] = useState(props.to || "");
  const [kms, setKms] = useState(props.to || "");
  const [hrs, setHrs] = useState(props.to || "");
  const [driver, setDriver] = useState(props.price || "");
  const [drope, setDrope] = useState(props.price || "");
  const [pickupAt, setPickupAt] = useState(props.price || "");
  const [pickupDate, setPckupDate] = useState(props.price || "");
  const [booktype, setBooktype] = useState(props.price || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    console.log("hiiiiiiii");
    setLoading(true);

    event.preventDefault();

    const newData = {
      bookType: booktype,
      pickUpDate: pickupDate,
      dropOffDate: dropaddress,
      pickUpLat: 37.7749,
      pickUpAddress: pickupaddress,
      dropOffAddress: "",
      hours: hrs,
      kms: kms,
      estimatedAmt: 0,
      driver: driver,
      pickupAt: pickupAt,
      drope: drope,
    };

    try {
      console.log("props.purpose===========><><>><><", props);

      if (props.purpose === "Edit") {
        await axios.put(`http://localhost:8080/Booking/id`, newData);
      }

      props.onSuccess();
      props.hide();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const values = props.data.reduce((acc: any, item: any) => {
    acc[item.id] = item;
    return item;
  }, {});

  //   const mappedData = Object.values(values);

  // mappedData.map((item) => {
  //   // Your code to process each item
  // });

  return (
    <div>
      <div>
        <Modal
          show={props.show}
          onHide={props.hide}
          centered
          footer={[
            <Button>Close</Button>,
            <Button key="submit">
              Update
              {loading && (
                <Spin
                  indicator={
                    <Loading3QuartersOutlined
                      style={{
                        fontSize: 12,
                        color: "black",
                        marginRight: 4,
                      }}
                      spin
                    />
                  }
                />
              )}
            </Button>,
          ]}
        >
          <div
            style={{
              height: "30px",
              width: "500px",

              display: "flex",
              justifyContent: "end",
              padding: "10px",
            }}
          >
            {/* <IoClose onClick={props.hide()} size={20} /> */}
          </div>
          <div
            style={{
              width: "100%",
              height: "620px",
              // backgroundColor: "red",
              padding: "10px",
              color: "rgb(104, 175, 68)",
              fontSize: "20px",
            }}
          >
            <div
              style={{
                width: "490px",
                height: "50px",
                // backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              𝐔𝐏𝐃𝐀𝐓𝐄 𝐘𝐎𝐔𝐑 𝐁𝐎𝐎𝐊𝚰𝐍𝐆𝐒
            </div>
            <Form>
              <Form.Item>
                <Input
                  onChange={(e) => setPickupaddress(e.target.value)}
                  size="large"
                  placeholder="Pickup Address"
                  defaultValue={values.pickUpAddress}
                />
              </Form.Item>

              <Form.Item>
                <Input
                  onChange={(e) => setAropaddress(e.target.value)}
                  type="text"
                  placeholder="Drop Address"
                  defaultValue={values.dropOffAddress}
                />
              </Form.Item>

              <Form.Item>
                <Input
                  onChange={(e) => setKms(e.target.value)}
                  type="text"
                  placeholder="KM"
                  defaultValue={values.kms}
                />
              </Form.Item>

              <Form.Item>
                <Input
                  onChange={(e) => setHrs(e.target.value)}
                  type="text"
                  placeholder="Hours"
                  defaultValue={values.hours}
                />
              </Form.Item>

              <Form.Item>
                <Input
                  onChange={(e) => setDriver(e.target.value)}
                  type="text"
                  placeholder="Driver"
                  defaultValue={values.driver}
                />
              </Form.Item>

              <Form.Item>
                <Input
                  onChange={(e) => setDrope(e.target.value)}
                  type="text"
                  placeholder="Drope"
                  defaultValue={values.drope}
                />
              </Form.Item>

              <Form.Item>
                <Input
                  onChange={(e) => setPickupAt(e.target.value)}
                  type="text"
                  placeholder="PickupAt"
                  defaultValue={values.pickupAt}
                />
              </Form.Item>

              <Form.Item>
                <Input
                  onChange={(e) => setPckupDate(e.target.value)}
                  type="text"
                  defaultValue={values.pickUpDate}
                  placeholder="PickupDate"
                />
              </Form.Item>

              <Form.Item>
                <Input
                  onChange={(e) => setBooktype(e.target.value)}
                  type="text"
                  placeholder="Book type"
                  defaultValue={values.bookType}
                />
              </Form.Item>
              <div
                style={{
                  width: "100%",
                  height: "50px",
                  // backgroundColor: "red",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <div
                  style={{
                    width: "170px",
                    height: "50px",
                    // backgroundColor: "blue",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button style={{ height: "40px" }} onClick={props.hide}>
                    CANCEL
                  </Button>
                  <Button style={{ height: "40px" }}>UPDATE</Button>
                </div>
              </div>
            </Form>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default BookinModal;
