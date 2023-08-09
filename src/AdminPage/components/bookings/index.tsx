import React, { useEffect, useState } from "react";
import { Spin, message, Select } from "antd";
import API from "../../../config/api";
import "./index.scss";
import axios from "axios";
import moment from "moment";

const Bookings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bookingData, setBookingData] = useState([]);
  const [data, setData] = useState<any>([]);
  const [selectedStatus, setSelectedStatus] = useState("Pending");
  const [selectedCarType, setSelectedCarType] = useState("");

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
    updatingItem.driver = value;
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

  return (
    <div className="table-responsive" style={{ height: "100%" }}>
      <h2 className="py-3 ps-2">Bookings</h2>
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
              <th scope="col">#</th>
              <th scope="col">Status</th>
              <th scope="col">Book Type</th>
              <th scope="col">One Way/RoundTrip</th>
              <th scope="col">Pickup</th>
              <th scope="col">Drop</th>
              <th scope="Col">Driver</th>
              <th scope="col">Hrs</th>
              <th scope="col">Kms</th>
              <th scope="col">Est. Amount</th>
              <th scope="col">Pack</th>
              <th scope="col">Car</th>
              <th scope="col">Comments</th>
              <th scope="col">Created At</th>
              <th scope="col">User</th>
            </tr>
          </thead>
          <tbody>
            {bookingData?.reverse().map((item: any, index: number) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>
                    <Select
                      style={{ width: "130px" }}
                      defaultValue={selectedStatus}
                      onChange={handleStatusChange}
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
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Bookings;
