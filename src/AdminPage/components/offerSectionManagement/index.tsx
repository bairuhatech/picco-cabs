import AddNewOffersModal from "../modals/addNewOffer";
import { message, Spin } from "antd";
import { useState, useEffect } from "react";
import API from "../../../config/api";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { Loading3QuartersOutlined } from "@ant-design/icons";

const OfferSectionManagement = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<any>([]);
  const [data, setData] = useState<
    Array<{ DriverName: string; phoneNumber: string }>
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  const modalToggler = () => {
    setToggleModal(!toggleModal);
  };

  const closeModal = () => {
    setToggleModal(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        API.BASE_URL + API.GET_OFFERS
        // "https://piccocabs-server-46642b82a774.herokuapp.com/Offers/Offer"
      );
      setIsLoading(false);

      setSelectedStatus(response.data);
      setData(response.data);
    } catch (error) {
      setIsLoading(false);

      console.error("Error:", error);
    }
  }
  async function deleteData(id: any) {
    try {
      const response = await axios.delete(
        API.BASE_URL + API.DELETE_OFFERS + id
        // `https://piccocabs-server-46642b82a774.herokuapp.com/Offers/${id}`
      );
      setData((prevData: any) =>
        prevData.filter((item: any) => item.id !== id)
      );
      // setData((prevData: any) =>
      //   prevData.filter((item: any) => item.id !== id)
      // );
      console.log("Delete Response:", response);
    } catch (error) {
      console.log("??????????????????", data);
      console.error("Error:", error);
    }
  }

  return (
    <>
      <div className="table-responsive w-100">
        <h2 className="py-3 ps-2">OfferSection Management</h2>
        <button
          className="btn-secondary btn ms-2 fw-bold"
          onClick={modalToggler}
        >
          Add New
        </button>
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
          <table className="table table-striped align-self-start table-hover mt-2">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Image</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item: any, index: any) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.image}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <AddNewOffersModal status={toggleModal} onClose={closeModal} />
    </>
  );
};

export default OfferSectionManagement;
