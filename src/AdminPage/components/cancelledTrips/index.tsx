import React, { useEffect, useState } from "react";
import { Form, Spin, message, Select, Input, Button } from "antd";
import { FaSync } from "react-icons/fa";
import API from "../../../config/api";
import axios from "axios";
import moment from "moment";

import { Loading3QuartersOutlined } from "@ant-design/icons";

const CancelledTrips = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://piccocabs-server-46642b82a774.herokuapp.com/Booking/cancelledTrips"
      );
      setIsLoading(false);

      setData(response.data.rows);
    } catch (error) {
      setIsLoading(false);

      console.error("Error:", error);
    }
  }

  //   const handleStatusTypeChange = async (value: any, index: number) => {
  //     let updatingStatus: any = data[index];
  //     updatingStatus.status = value;
  //     let reqBody = { ...updatingStatus };
  //     delete reqBody.id;
  //     if (value) {
  //       try {
  //         const response = await axios.put(
  //           "https://piccocabs-server-46642b82a774.herokuapp.com/Booking/" +
  //             updatingStatus.id +
  //             "",
  //           reqBody
  //         );

  //         console.log("Response:", response.data);
  //       } catch (error) {
  //         console.error("Error:", error);
  //       }
  //     }
  //   };

  return (
    <div className="table-responsive" style={{ height: "100%" }}>
      <h2 className="py-3 ps-2">Cancelled Trips</h2>
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
          <Spin
            indicator={
              <Loading3QuartersOutlined
                style={{
                  fontSize: 20,
                  color: "rgb(107, 181, 70)",
                  marginRight: 4,
                }}
                spin
              />
            }
          />{" "}
        </div>
      ) : data.length === 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            fontSize: "24px",
            color: "#999",
          }}
        >
          <span role="img" aria-label="Oops">
            😔
          </span>
          <p>Oops, there is no data</p>
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
              {/* <th scope="col">Pack</th> */}
              <th scope="col">Car</th>
              <th scope="col">Comments</th>
              <th scope="col">Created At</th>
              <th scope="col">User</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item: any, index: number) => {
              return (
                <tr key={item.id}>
                  <th scope="row">
                    {moment(item.createdAt).format("DDHHmmssYYM")}
                  </th>
                  <td>{item.status}</td>
                  {/* <td>
                      <Select
                        style={{ width: "130px" }}
                        defaultValue={item.status}
                        onChange={(value) =>
                          handleStatusTypeChange(value, index)
                        }
                      >
                        <Select.Option value="Trip Created">
                          Trip Created
                        </Select.Option>
                        <Select.Option value="Trip Confirmed">
                          Trip Confirmed
                        </Select.Option>
                        <Select.Option value="Assign On Trip">
                          Assign On Trip
                        </Select.Option>
                        <Select.Option value="Trip Completed">
                          Trip Completed
                        </Select.Option>
                        <Select.Option value="Canceled By Guest">
                          Canceled By Guest
                        </Select.Option>
                        <Select.Option value="Cancelled By Picco">
                          Cancelled By Picco
                        </Select.Option>
                        <Select.Option value="No Show">No Show</Select.Option>
                      </Select>
                    </td> */}
                  <td>
                    {item.bookType === "airports"
                      ? item.AirportStatus
                      : item.bookType}
                  </td>
                  <td>{item.tripStatus}</td>
                  <td>{item.pickUpLoc}</td>
                  <td>{item.dropOffLoc}</td>
                  <td>{item.driver}</td>
                  <td>{item.hours}</td>
                  <td>{item.kms}</td>
                  <td>{item.estimatedAmt + 300}</td>
                  {/* <td>{item.rentallPack}</td> */}
                  <td>{item.car}</td>
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

export default CancelledTrips;
