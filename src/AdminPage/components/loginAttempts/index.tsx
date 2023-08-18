import React, { useEffect, useState } from "react";
import API from "../../../config/api";
import { message } from "antd";
import axios from "axios";
import moment from "moment";
import { Spin } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";

const LoginAttempts = () => {
  const [loginData, setLoginData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllBookings();
  }, []);

  async function getAllBookings() {
    try {
      const response = await axios.get(
        "https://piccocabs-server-46642b82a774.herokuapp.com/Loginattempts/get"
      );
      setIsLoading(false);

      setLoginData(response.data);
    } catch (error) {
      setIsLoading(false);

      console.error("Error:", error);
    }
  }

  return (
    <div className="table-responsive w-100" style={{ height: "100%" }}>
      <h2 className="py-3 ps-2">Login Attempts</h2>

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
      ) : (
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
      )}
    </div>
  );
};
export default LoginAttempts;
