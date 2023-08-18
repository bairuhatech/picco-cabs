import React, { useState, useEffect } from "react";
import { table } from "console";
import axios from "axios";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";




const BookingAttempts = () => {
  const [data, setData] = useState<any>([]);
  const [selectedBooking, setSelectedBooking] = useState<any>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://piccocabs-server-46642b82a774.herokuapp.com/booking-attempt/BookingAttempt"
      );
      setSelectedBooking(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  async function deleteData(id: any) {
    try {
      const response = await axios.delete(
        `https://piccocabs-server-46642b82a774.herokuapp.com/booking-attempt/${id}`
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
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteData(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BookingAttempts;
