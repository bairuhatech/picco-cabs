import { useEffect, useState } from "react";
import { message } from "antd";
import API from "../../../config/api";
import axios from "axios";
import moment from "moment";
import { Spin } from "antd";

import { Loading3QuartersOutlined } from "@ant-design/icons";

const Users = () => {
  const [user, setUser] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  console.log("dataaaa vannooo", fetchData);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://piccocabs-server-46642b82a774.herokuapp.com/User/get"
      );
      setIsLoading(false);

      setUser(response.data);
    } catch (error) {
      setIsLoading(false);

      console.error("Error:", error);
    }
  }

  return (
    <div className="table-responsive w-100">
      <h2 className="py-3 ps-2">Users</h2>

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
              <th scope="col">UserName</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email ID</th>
              <th scope="col">Joined In</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item: any, index: any) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.email}</td>
                <td>{moment(item.createdAt).format("MMMM Do YYYY")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;
