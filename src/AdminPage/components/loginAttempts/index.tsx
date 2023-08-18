import React, { useEffect, useState } from "react";
import API from "../../../config/api";
import { message } from "antd";
import axios from "axios";
import moment from "moment";

const LoginAttempts = () => {
  const [loginData, setLoginData] = useState<any>([]);

  useEffect(() => {
    getAllBookings();
  }, []);

  async function getAllBookings() {
    try {
      const response = await axios.get(
        "https://piccocabs-server-46642b82a774.herokuapp.com/Loginattempts/get"
      );
      setLoginData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="table-responsive w-100" style={{ height: "100%" }}>
      <h2 className="py-3 ps-2">Login Attempts</h2>
      <table className="table table-striped align-self-start table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Joined In</th>
          </tr>
        </thead>
        <tbody>
          {loginData.map((item: any, index: any) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.phoneNumber}</td>
                <td>{moment(item.createdAt).format("MMMM Do YYYY")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default LoginAttempts;