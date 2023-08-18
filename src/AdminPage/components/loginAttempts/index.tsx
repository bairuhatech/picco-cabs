import React, { useEffect, useState } from "react";
import API from "../../../config/api";
import { message } from "antd";

const LoginAttempts = () => {
  const [loginData, setLoginData] = useState([]);

  useEffect(() => {
    getAllBookings();
  }, []);

  const getAllBookings = async () => {
    let url = API.BASE_URL + API.getAllLoginAttempt;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    };
    try {
      const response = await fetch(url, options);

      if (response.status === 200) {
        const data = await response.json();
        console.log("Data ---> ", data);
        setLoginData(data.results);
        message.success("Success");
      } else {
        message.success("Something went wrong !");
      }
    } catch (error) {
      message.success("Something went wrong !");
    }
  };

  return (
    <div className="table-responsive w-100" style={{ height: "100%" }}>
      <h2 className="py-3 ps-2">Login Attempts</h2>
      <table className="table table-striped align-self-start table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Date and Time</th>
            <th scope="col">Joined In</th>
          </tr>
        </thead>
        <tbody>
          {loginData.map((item: any) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.phoneNumber}</td>
                <td>{item.DateandTime}</td>
                <td>{item.joinedIn}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default LoginAttempts;
