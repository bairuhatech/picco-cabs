import AddNewOffersModal from "../modals/addNewOffer";
import { message, Spin } from "antd";
import { useState, useEffect } from "react";
import API from "../../../config/api";

const OfferSectionManagement = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [offersection, setOffersection] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);

  const modalToggler = () => {
    setToggleModal(!toggleModal);
  };

  const closeModal = () => {
    setToggleModal(false);
  };

  useEffect(() => {
    getAllOffer();
  }, []);

  const getAllOffer = async () => {
    setIsLoading(true);
    let url = API.BASE_URL + API.getAllOffer;
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
        console.log(data.results);
        setOffersection(data.results);
        console.log(data, "=========================>>>>>>> datadata");
        message.success("success");
        setIsLoading(false);
      } else {
        setIsLoading(false);
        message.error("something went wrong !");
      }
    } catch (error) {
      setIsLoading(false);
      message.error("something went wrong !");
    }
  };

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
            <Spin size="large" style={{ color: "red" }} />
            <br />
            <br />
            <Spin size="large" style={{ color: "red" }} />
            <br />
            <br />
            <Spin size="large" style={{ color: "red" }} />
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
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {offersection.map((item: any, index: any) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.Title}</td>
                  <td>{item.Description}</td>
                  <td>{item.Price}</td>
                  <td>{item.Image}</td>
                  <td>{item.Action}</td>
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
