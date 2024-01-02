import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { FaEdit, FaPlus } from "react-icons/fa";
import { FaSync } from "react-icons/fa";
import axios from "axios";
import { Form, Select, Input, Button, Spin, Popconfirm } from "antd";
import { Modal } from "react-bootstrap";
import AddLocationModal from "../modals/addNewLocation";
import "font-awesome/css/font-awesome.min.css";
import AddDriverModal from "../modals/addNewDriver";
import Item from "antd/es/list/Item";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import API from "../../../config/api";

const DriversTable = () => {
  const [selected, setSelected] = useState<any>({});
  const [data, setData] = useState<
    Array<{ DriverName: string; phoneNumber: string }>
  >([]);
  const [selectedStatus, setSelectedStatus] = useState<any>([]);
  const [modalShow, setModalShow] = useState<any>(false);
  const [modalPurpose, setModalPurpose] = useState<any>("");
  const [selectedCar, setSelectedCar] = useState<any>({});
  const [DriverName, setdrivername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        API.BASE_URL + API.GET_DRIVER_LOCATION
        // "https://piccocabs-server-46642b82a774.herokuapp.com/Driver/location"
      );
      setIsLoading(false);

      setSelectedStatus(response.data);
      setData(response.data);

      console.log("data vannoda=========", data);
    } catch (error) {
      setIsLoading(false);

      console.error("Error:", error);
    }
  }

  async function deleteData(id: any) {
    try {
      const response = await axios.delete(
        API.BASE_URL + API.DELETE_DRIVER + `${id}`,
        // `https://piccocabs-server-46642b82a774.herokuapp.com/Driver/${id}`
      );
      setData((prevData: any) =>
        prevData.filter((item: any) => item.id !== id)
      );
      console.log("Delete Response:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  const change = () => {
    fetchData();
  };
  const handleEdit = (location: any) => {
    setSelectedCar(location.id);
    setModalPurpose("Edit");
    setModalShow(true);
    console.log(location.id);
  };

  const handleCreate = () => {
    setSelectedCar({});
    setModalPurpose("Create");
    setModalShow(true);
  };

  const handleModalClose = () => {
    setModalShow(false);
    setSelectedCar({});
  };

  const handleModalSuccess = () => {
    fetchData();
    setModalShow(false);
    setSelectedCar({});
  };

  const handleSelect = async (value: any, index: number) => {
    let updatingStatus: any = selectedStatus[index];
    console.log("updatingStatus", updatingStatus);
    updatingStatus.status = value;
    let reqBody = { ...updatingStatus };
    delete reqBody.id;
    if (value) {
      try {
        const response = await axios.put(
          API.BASE_URL + API.UPDATE_DRIVER,
          // "https://piccocabs-server-46642b82a774.herokuapp.com/Driver/" 
          +
            updatingStatus.id +
            "",
          reqBody
        );

        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  const Filter = (values: any) => {
    const filteredData = data.filter((item: any) => {
      const driverNameMatch = item?.DriverName?.toLowerCase()?.includes(
        values.names?.toLowerCase()
      );
      const phoneNumberMatch = item?.phoneNumber === values?.number;
      return (
        (driverNameMatch || !values.names) &&
        (phoneNumberMatch || !values.number)
      );
    });
    console.log("==============filter========", filteredData);
    setPhoneNumber(phoneNumber);
    setdrivername(DriverName);
    setData(filteredData);
  };
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="table-responsive w-100" style={{ height: "100%" }}>
      <div className="d-flex justify-content-between">
        <h2 className="py-3 ps-2">Drivers</h2>
        <button
          style={{ border: "1px solid green", color: "green" }}
          className="btn btn-picco align-self-center me-3 text-light"
          onClick={() => handleCreate()}
        >
          <FaPlus className="text-light" />
          <b style={{ color: "green" }}>Add Driver</b>
        </button>
      </div>
      <Form
        layout="inline"
        onFinish={Filter}
        style={{ paddingLeft: "10px", marginTop: "10px" }}
      >
        <Form.Item style={{ fontWeight: "600" }} label="DiverName" name="names">
          <Input placeholder="DiverName" onChange={change} />
        </Form.Item>
        <Form.Item
          style={{ fontWeight: "600" }}
          label="PhoneNumber"
          name="number"
        >
          <Input placeholder="PhoneNumber" onChange={change} />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            style={{
              backgroundColor: "rgb(104, 175, 68)",
              width: "100%",
              color: "white",
              fontSize: "13px",
              fontWeight: "500",
            }}
          >
            Filter
          </Button>
        </Form.Item>
        <span style={{ marginLeft: "10px", cursor: "pointer" }}>
          <FaSync onClick={handleRefresh} />
        </span>
      </Form>
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
      ) : (
        <table className="table table-striped align-self-start table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              {/* <th scope="col">Car Type</th> */}
              {/* <th scope="col">Car Number</th> */}
              <th scope="col">Driver Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Language</th>
              <th scope="col">Licence No:</th>
              <th scope="col">Status</th>
              <th scope="col">Current Booking</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any, index: number) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                {/* <td>{item.CarType}</td> */}
                {/* <td>{item.CarNumber}</td> */}
                <td>{item.DriverName}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.language}</td>
                <td>{item.DlNumber}</td>
                <td>
                  <Select
                    style={{ width: "130px" }}
                    defaultValue={item.status}
                    onChange={(value) => handleSelect(value, index)}
                  >
                    <Select.Option value="Active">Active</Select.Option>
                    <Select.Option value="InActive">InActive</Select.Option>
                  </Select>
                </td>
                <td>{item.currentBooking}</td>
                <td>
                  <div>
                    <button
                      className="btn btn-info me-2"
                      onClick={() => handleEdit(item)}
                    >
                      <FaEdit />
                    </button>
                    <Popconfirm
										placement="left"
										title={"are you sure Delete ?"}
										description={"You will not be able to retreive this data."}
										onConfirm={() => deleteData(item.id)}
										okText="Yes"
										cancelText="No">
                    <button
                      className="btn btn-danger"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </Popconfirm>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <AddDriverModal
        show={modalShow}
        hide={handleModalClose}
        purpose={modalPurpose}
        carType={selectedCar.CarType}
        locationId={selectedCar}
        to={selectedCar.CarNumber}
        price={selectedCar.DriverName}
        onSuccess={handleModalSuccess}
      />
    </div>
  );
};

export default DriversTable;
