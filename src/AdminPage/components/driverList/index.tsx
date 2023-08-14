import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { FaEdit, FaPlus } from "react-icons/fa";
import axios from "axios";
import { Select } from "antd";
import { Modal, Button, Form } from "react-bootstrap";
import AddLocationModal from "../modals/addNewLocation";
import "font-awesome/css/font-awesome.min.css";
import AddDriverModal from "../modals/addNewDriver";


const DriversTable = () => {
  const [selected, setSelected] = useState<any>({});
  const [data, setData] = useState<any>([]);
  const [selectedStatus, setSelectedStatus] = useState<any>([]);
  const [modalShow, setModalShow] = useState<any>(false);
  const [modalPurpose, setModalPurpose] = useState<any>("");
  const [selectedCar, setSelectedCar] = useState<any>({});
  

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://piccocabs-server-46642b82a774.herokuapp.com/Driver/location"
      );
      setSelectedStatus(response.data)
      setData(response.data);

      console.log("data vannoda=========",data)
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function deleteData(id: any) {
    try {
      const response = await axios.delete(
        `https://piccocabs-server-46642b82a774.herokuapp.com/Driver/${id}`
      );
      setData((prevData: any) =>
        prevData.filter((item: any) => item.id !== id)
      );
      console.log("Delete Response:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  }

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
    console.log("updatingStatus",updatingStatus)
    updatingStatus.status = value;
    let reqBody = { ...updatingStatus };
    delete reqBody.id;
    if (value) {
      try {
        const response = await axios.put(
          "https://piccocabs-server-46642b82a774.herokuapp.com/Driver/" +
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

  return (
    <div className="table-responsive w-100" style={{height:"100%"}}>
      <div className="d-flex justify-content-between">
        <h2 className="py-3 ps-2">Drivers</h2>
        <button
        style={{border:"1px solid green", color:"green"}}
          className="btn btn-picco align-self-center me-3 text-light"
          onClick={() => handleCreate()}
        >
          <FaPlus className="text-light" />
          <b style={{color:"green"}}>Add Driver</b>
        </button>
      </div>
      <table className="table table-striped align-self-start table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Car Type</th>
            <th scope="col">Car Number</th>
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
          {data.map((item: any, index:number) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.CarType}</td>
              <td>{item.CarNumber}</td>
              <td>{item.DriverName}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.language}</td>
              <td>{item.DlNumber}</td>
              <td>
                  <Select 
                  style={{width: "130px"}}
                  defaultValue={item.status}
                  onChange={(value)=> handleSelect(value, index)}
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
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteData(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
