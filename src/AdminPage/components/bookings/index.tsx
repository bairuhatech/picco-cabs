import React, { useEffect, useState } from "react";
import { Spin, message } from "antd";
import API from "../../../config/api";

const Bookings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    getAllBookings();
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
      console.log(
        "==============data ethiiii========================",
        response
      );
      if (response.status === 200) {
        const data = await response.json();
        setIsLoading(false);
        console.log("Data ---> ", data);
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
  // console.log(bookingData, "response==========================<<<<<>>>>");

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
          {/* <br />
          <br />
          <Spin size="large" style={{ color: "red" }} />
          <br />
          <br />

          <Spin size="large" style={{ color: "red" }} /> */}
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
              <th scope="col">Estimated Amount</th>
              <th scope="col">Pack</th>
              <th scope="col">Car</th>
              <th scope="col">Comments</th>
              <th scope="col">Created At</th>
              <th scope="col">User</th>
            </tr>
          </thead>
          <tbody>
            {bookingData?.reverse().map((item: any) => {
              console.log("=========ooooooooooooo", bookingData);
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.status}</td>
                  <td>{item.bookType}</td>
                  <td>{item.tripStatus}</td>
                  <td>{item.pickUpLoc}</td>
                  <td>{item.dropOffLoc}</td>
                  <td>{item.Driver}</td>
                  <td>{item.hours}</td>
                  <td>{item.kms}</td>
                  <td>{item.estimatedAmt}</td>
                  <td>{item.rentallPack}</td>
                  <td>{item.car}</td>
                  <td>{item.comments}</td>
                  <td>{item.createdAt}</td>
                  <td>{item.Username}</td>
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
