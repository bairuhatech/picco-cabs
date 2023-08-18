import React, { useEffect, useState } from "react";
import { Form, Spin, message, Select, Input, Button } from "antd";
import { FaSync } from "react-icons/fa";
import API from "../../../config/api";
import "./index.scss";
import axios from "axios";
import moment from "moment";
import { AiOutlineEye } from "react-icons/ai";
import BookingDrawer from "../drawer";
import Item from "antd/es/list/Item";

const Bookings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bookingData, setBookingData] = useState<
    Array<{ pickUpLoc: string; dropOffLoc: string; createdAt: Date }>
  >([]);
  const [data, setData] = useState<any>([]);
  const [selectedStatus, setSelectedStatus] = useState("Pending");
  const [selectedCarType, setSelectedCarType] = useState("");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [bookingID, setbookingid] = useState("");

  const [drawer, Setdrawer] = useState<any>(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleStatusChange = (value: any) => {
    setSelectedStatus(value);
  };

  useEffect(() => {
    getAllBookings();
    fetchData();
  }, []);

  const getAllBookings = async () => {
    setIsLoading(true);
    let url = API.BASE_URL + API.GET_ALL_BOOKINGS;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(url, options);
      if (response.status === 200) {
        const data = await response.json();
        setIsLoading(false);
        setBookingData(data);
        message.success("Success");
      } else {
        setIsLoading(false);
        message.success("Something went wrong !");
      }
    } catch (error) {
      setIsLoading(false);
      message.success("Something went wrong !");
    }
  };

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://piccocabs-server-46642b82a774.herokuapp.com/Driver/location"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleCarTypeChange = async (value: any, index: number) => {
    let updatingItem: any = bookingData[index];
    updatingItem.car = value;
    let reqBody = { ...updatingItem };
    delete reqBody.id;
    if (value) {
      try {
        const response = await axios.put(
          "https://piccocabs-server-46642b82a774.herokuapp.com/Booking/" +
            updatingItem.id +
            "",
          reqBody
        );

        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleStatusTypeChange = async (value: any, index: number) => {
    let updatingStatus: any = bookingData[index];
    updatingStatus.status = value;
    let reqBody = { ...updatingStatus };
    delete reqBody.id;
    if (value) {
      try {
        const response = await axios.put(
          "https://piccocabs-server-46642b82a774.herokuapp.com/Booking/" +
            updatingStatus.id +
            "",
          reqBody
        );

        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleDriverTypeChange = async (value: any, index: number) => {
    let updatingDriver: any = bookingData[index];
    updatingDriver.driver = value;
    let reqBody = { ...updatingDriver };
    delete reqBody.id;
    if (value) {
      try {
        const response = await axios.put(
          "https://piccocabs-server-46642b82a774.herokuapp.com/Booking/" +
            updatingDriver.id +
            "",
          reqBody
        );

        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleFilter = (value: any) => {
    const filteredData = bookingData.filter((item) => {
      const fromMatch = item.pickUpLoc
        ?.toLowerCase()
        .includes(value.fromLocation?.toLowerCase());
      const toMatch = item.dropOffLoc
        ?.toLowerCase()
        .includes(value.toLocation?.toLowerCase());
      const bookingIDMatch =
        moment(item.createdAt).format("DDHHmmssYYM") === value.bookingid;

      return (
        (fromMatch || !value.fromLocation) &&
        (toMatch || !value.toLocation) &&
        (bookingIDMatch || !value.bookingid)
      );
    });

    setFromLocation(fromLocation);
    setToLocation(toLocation);
    setbookingid(value.bookingIDMatch);
    setBookingData(filteredData);
  };

  const handleRefresh = () => {
    window.location.reload();
  };
  const change = () => {
    getAllBookings();
    fetchData();
  };

  return (
    <div className="table-responsive" style={{ height: "100%" }}>
      <h2 className="py-3 ps-2">Bookings</h2>
      {/*<form>
        <label>FROM</label>
        <input type="text" value={fromLocation} onChange={e => setFromLocation(e.target.value)} />
        <label>TO</label>
        <input type="text" value={toLocation} onChange={e => setToLocation(e.target.value)} />
        <button type="button" onClick={handleFilter}>Filter</button>
  </form>*/}
      <Form
        layout="inline"
        onFinish={handleFilter}
        style={{ paddingLeft: "10px", marginTop: "20px" }}
      >
        <Form.Item
          style={{ fontWeight: "600" }}
          label="BOOKINGID"
          name="bookingid"
        >
          <Input placeholder="bookingID" onChange={change} />
        </Form.Item>
        <Form.Item
          style={{ fontWeight: "600" }}
          label="FROM"
          name="fromLocation"
        >
          <Input placeholder="From Location" onChange={change} />
        </Form.Item>
        <Form.Item style={{ fontWeight: "600" }} label="TO" name="toLocation">
          <Input placeholder="To Location" onChange={change} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            style={{
              backgroundColor: "rgb(104, 175, 68)",
              width: "100%",
              color: "white",
              fontSize: "13px",
              fontWeight: "500",
            }}
            htmlType="submit"
          >
            Filter
          </Button>
        </Form.Item>
        <span style={{ marginLeft: "10px", cursor: "pointer" }}>
          <FaSync onClick={handleRefresh} />
        </span>
      </Form>
      <br />

      {isLoading ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin size="large" style={{ color: "red" }} />
        </div>
      ) : (
        <table className="table table-striped align-self-start table-hover">
          <thead>
            <tr>
              <th scope="col">Booking ID</th>
              <th scope="col">Status</th>
              <th scope="col">Book Type</th>
              <th scope="col">One Way/RoundTrip</th>
              <th scope="col">Pickup</th>
              <th scope="col">Drop</th>
              <th scope="Col">Driver</th>
              <th scope="col">Hrs</th>
              <th scope="col">Kms</th>
              <th scope="col">Est. Amount</th>
              <th scope="col">Pack</th> <th scope="col">Car</th>
              <th scope="col">Comments</th>
              <th scope="col">Created At</th>
              <th scope="col">User</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookingData?.reverse().map((item: any, index: number) => {
              return (
                <tr key={item.id}>
                  <th scope="row">
                    {moment(item.createdAt).format("DDHHmmssYYM")}
                  </th>
                  <td>
                    <Select
                      style={{ width: "130px" }}
                      defaultValue={item.status}
                      onChange={(value) => handleStatusTypeChange(value, index)}
                    >
                      <Select.Option value="Pending">Pending</Select.Option>
                      <Select.Option value="Success">Success</Select.Option>
                      <Select.Option value="Cancel">Cancel</Select.Option>
                    </Select>
                  </td>
                  <td>{item.bookType}</td>
                  <td>{item.tripStatus}</td>
                  <td>{item.pickUpLoc}</td>
                  <td>{item.dropOffLoc}</td>
                  <td>
                    <Select
                      style={{ width: "130px" }}
                      defaultValue={item.driver}
                      onChange={(value) => handleDriverTypeChange(value, index)}
                      options={data.map((item: any) => ({
                        label: item.DriverName,
                        value: item.DriverName,
                      }))}
                    />
                  </td>

                  <td>{item.hours}</td>
                  <td>{item.kms}</td>
                  <td>{item.estimatedAmt}</td>
                  <td>{item.rentallPack}</td>
                  <td>
                    <Select
                      style={{ width: "130px" }}
                      defaultValue={item.car}
                      onChange={(val) => handleCarTypeChange(val, index)}
                      options={data.map((item: any) => ({
                        label: item.CarType,
                        value: item.CarType,
                      }))}
                    />
                  </td>
                  <td>{item.comments}</td>
                  <td>{moment(item.createdAt).format("YYYY-MM-DD")}</td>
                  <td>{item.userName}</td>
                  <td>
                    <AiOutlineEye onClick={() => setSelectedBooking(item)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {selectedBooking && (
        <BookingDrawer
          drawer={true}
          bookingdetails={selectedBooking}
          onClose={() => setSelectedBooking(null)}
        />
      )}
    </div>
  );
};

export default Bookings;
