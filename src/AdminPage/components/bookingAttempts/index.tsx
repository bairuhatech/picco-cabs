import React, { useState, useEffect } from "react";
import { table } from "console";
import axios from "axios";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { Spin, Popconfirm } from "antd";
import API from "../../../config/api";

const BookingAttempts = () => {
  const [data, setData] = useState<any>([]);
  const [selectedBooking, setSelectedBooking] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        API.BASE_URL + API.GET_BOOKING_ATTEMPT,
        // "https://piccocabs-server-46642b82a774.herokuapp.com/booking-attempt/BookingAttempt"
      );
      setIsLoading(false);

      setSelectedBooking(response.data);
      setData(response.data);
    } catch (error) {
      setIsLoading(false);

      console.error("Error:", error);
    }
  }
  async function deleteData(id: any) {
    try {
      const response = await axios.delete(
        API.BASE_URL + API.DELETE_BOOKING_ATTEMPT + id,
        // `https://piccocabs-server-46642b82a774.herokuapp.com/booking-attempt/${id}`
      );
      setData((prevData: any) =>
        prevData.filter((item: any) => item.id !== id)
      );
      console.log("Delete Response:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  console.log("data varuodeuyyyy=========", data);

  return (
    <div className="table-responsive w-100">
      <h2 className="py-3 ps-2">Booking Attempts</h2>

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
                  color: "#6BB546",
                  marginRight: 4,
                }}
                spin
              />
            }
          />{" "}
        </div>
      ) : (
        <table className="table table-striped align-self-start table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Book Type</th>
              <th scope="col">One Way/RoundTrip</th>
              <th scope="col">Pickup</th>
              <th scope="col">Drop</th>
              <th scope="col">Hrs</th>
              <th scope="col">Kms</th>
              <th scope="col">Estimated Amount</th>
              <th scope="col">Pack</th>
              <th scope="col">Picco Car</th>
              <th scope="col">User</th>
              <th scope="col">Contact</th>
              <th scope="col">Comments</th>
              <th scope="col">Created At</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any, index: number) => {
              return (
                <tr key={item.id}>
                  <th scope="row">1</th>
                  <td>{item.bookType}</td>
                  <td>{item.tripStatus}</td>
                  <td>{item.pickUpLoc}</td>
                  <td>{item.dropOffLoc}</td>
                  <td>{item.hours}</td>
                  <td>{item.kms}</td>
                  <td>{item.estimatedAmt}</td>
                  <td>{item.rentallPack}</td>
                  <td>{item.PiccoCar}</td>
                  <td>{item.userName}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.comments}</td>
                  <td>{moment(item.createdAt).format("YYYY-MM-DD")}</td>
                  <td>
                    <div>
                      {/* <button
                        className="btn btn-danger"
                        onClick={() => deleteData(item.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button> */}
                      <Popconfirm
                        placement="left"
                        title={"are you sure Delete ?"}
                        description={
                          "You will not be able to retreive this data."
                        }
                        onConfirm={() => deleteData(item.id)}
                        okText="Yes"
                        cancelText="No"
                      >
                        <button className="btn btn-danger">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </Popconfirm>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookingAttempts;
