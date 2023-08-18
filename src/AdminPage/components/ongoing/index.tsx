import React, { useEffect, useState } from "react";
import { Form, Spin, message, Select, Input, Button } from "antd";
import { FaSync } from "react-icons/fa";
import API from "../../../config/api";
import axios from "axios";
import moment from "moment";


const OnGoing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bookingData, setBookingData] = useState([]);
  const [data, setData] = useState<any>([]);
  const [selectedStatus, setSelectedStatus] = useState("Pending");
  const [selectedCarType, setSelectedCarType] = useState("");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [bookingID, setbookingid] = useState("");
  
  

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://piccocabs-server-46642b82a774.herokuapp.com/Booking/ongoing"
      );
      setData(response.data.rows);

      console.log("data vannoda=========", data)
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="table-responsive" style={{ height: "100%" }}>
      <h2 className="py-3 ps-2">OnGoings</h2>
    <br/>

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
              <th scope="col">Pack</th>
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
                  <td>{item.status}
                  </td>
                  <td>{item.bookType}</td>
                  <td>{item.tripStatus}</td>
                  <td>{item.pickUpLoc}</td>
                  <td>{item.dropOffLoc}</td>
                  <td>{item.driver}
                  </td>

                  <td>{item.hours}</td>
                  <td>{item.kms}</td>
                  <td>{item.estimatedAmt}</td>
                  <td>{item.rentallPack}</td>
                  <td>{item.car}
                  </td>
                  <td>{item.comments}</td>
                  <td>{moment(item.createdAt).format("YYYY-MM-DD")}</td>
                  <td>{item.userName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
    </div>
  );
};

export default OnGoing;