import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { FaEdit, FaPlus } from "react-icons/fa";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import AddLocationModal from "../modals/addNewLocation";
import "font-awesome/css/font-awesome.min.css";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { Spin, Popconfirm } from "antd";
import API from "../../../config/api";

const LocationsTable = () => {
  const [selected, setSelected] = useState<any>({});
  const [data, setData] = useState<any>([]);
  const [modalShow, setModalShow] = useState<any>(false);
  const [modalPurpose, setModalPurpose] = useState<any>("");
  const [selectedLocation, setSelectedLocation] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setIsLoading(true);

    try {
      const response = await axios.get(
        API.BASE_URL + API.GET_PICKUP_LOCATION,
        // "https://piccocabs-server-46642b82a774.herokuapp.com/Pickuplocation/location"
      );
      setData(response.data);
      setIsLoading(false);

      console.log("data vannoda", response.data);
    } catch (error) {
      setIsLoading(false);

      console.error("Error:", error);
    }
  }

  async function deleteData(id: any) {
    try {
      const response = await axios.delete(
        API.BASE_URL + API.DELETE_PICKUP_LOCATION + id
        // `https://piccocabs-server-46642b82a774.herokuapp.com/Pickuplocation/${id}`
      );
      // setIsLoading(false);

      setData((prevData: any) =>
        prevData.filter((item: any) => item.id !== id)
      );
      console.log("Delete Response:", response);
    } catch (error) {
      // setIsLoading(false);

      console.error("Error:", error);
    }
  }

  const handleEdit = (location: any) => {
    setSelectedLocation(location.id);
    setModalPurpose("Edit");
    setModalShow(true);
    console.log(location.id);
  };

  const handleCreate = () => {
    setSelectedLocation({});
    setModalPurpose("Create");
    setModalShow(true);
  };

  const handleModalClose = () => {
    setModalShow(false);
    setSelectedLocation({});
  };

  const handleModalSuccess = () => {
    fetchData();
    setModalShow(false);
    setSelectedLocation({});
  };

  return (
    <div className="table-responsive w-100" style={{ height: "100%" }}>
      <div className="d-flex justify-content-between">
        <h2 className="py-3 ps-2">Locations</h2>
        <button
          style={{ border: "1px solid green", color: "green" }}
          className="btn btn-picco align-self-center me-3 text-light"
          onClick={() => handleCreate()}
        >
          <FaPlus className="text-light" />
          <b style={{ color: "green" }}>Add Route</b>
        </button>
      </div>

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
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Kilometers</th>
              <th scope="col">Hours</th>
              <th scope="col">Mini Price</th>
              <th scope="col">Sedan Price</th>
              <th scope="col">SUV Price</th>
              <th scope="col">Innova Price</th>
              <th scope="col">Crysta Price</th>
              <th scope="col">Tempo trvlr Price</th>
              <th scope="col">Big trvlr Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.place}</td>
                <td>{item.location}</td>
                <td>{item.kilometer}</td>
                <td>{item.hours}</td>
                <td>{item.miniPrice}</td>
                <td>{item.sedanPrice}</td>
                <td>{item.suvPrice}</td>
                <td>{item.innovaPrice}</td>
                <td>{item.crystaPrice}</td>
                <td>{item.TempoTravellerPrice}</td>
                <td>{item.traveller18Price}</td>
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
                      description={
                        "You will not be able to retreive this data."
                      }
                      onConfirm={() => deleteData(item.id)}
                      okText="Yes"
                      cancelText="No"
                    >
                      <button className="btn btn-danger">
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
      <AddLocationModal
        show={modalShow}
        hide={handleModalClose}
        purpose={modalPurpose}
        from={selectedLocation.place}
        locationId={selectedLocation}
        to={selectedLocation.location}
        price={selectedLocation.rate}
        onSuccess={handleModalSuccess}
      />
    </div>
  );
};

export default LocationsTable;
