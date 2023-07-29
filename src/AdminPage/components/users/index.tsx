import { useEffect, useState } from "react";
import { message } from "antd";
import API from "../../../config/api";

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    setIsLoading(true);
    let url = API.BASE_URL + API.getAllUser;
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    };
    try {
      const response = await fetch(url, option);
      if (response.status === 200) {
        const data = await response.json();
        console.log(data.results, "====================>>>>datadatadata");
        setUserdata(data.results);
        message.success("success");
        setIsLoading(false);
      } else {
        setIsLoading(false);
        message.error("something is  wrong !");
      }
    } catch (error) {
      setIsLoading(false);
      message.error("something is went wrong !");
    }
  };
  return (
    <div className="table-responsive w-100">
      <h2 className="py-3 ps-2">Users</h2>
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
          {userdata.map((item: any, index: any) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.email}</td>
              <td>{item.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
